(ns app.core
  (:require [clojure.java.io :as io]
            [route-map.core  :as rm]
            [app.manifest    :as m]
            [cheshire.core   :as json]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.cors   :refer [wrap-cors]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.json   :refer [wrap-json-response wrap-json-body]]
            [app.actions :as actions]
            [app.crud    :as crud]
            [app.dbcore  :as db]
            [org.httpkit.server :as server]
            [clojure.string     :as str])
  (:gen-class))

(defn routes [ctx]
  {"Patient"   {"$search" {:GET (actions/patient-search ctx)}
                [:id]     {:GET (crud/get-patient-by-id ctx)
                           :DELETE (crud/delete-patient ctx)
                           :PUT (crud/patch-patient ctx)}
                :GET  (actions/get-patient-by-identifier ctx)
                :POST (crud/create-patient ctx)}})

(defn params-to-keyword [params]
  (reduce-kv (fn [acc k v]
               (assoc acc (keyword k) v)) {} params))

(defn handler [ctx]
  (fn [{meth :request-method uri :uri :as req}]
    (if-let [res (rm/match [meth uri] (routes ctx))]
      ((:match res) (-> (assoc req :params (params-to-keyword (:params req)))
                        (update-in [:params] merge (:params res))))
      {:status 404 :body {:error "Not found"}})))

(defn preflight
  [{meth :request-method hs :headers :as req}]
  (let [headers (get hs "access-control-request-headers")
        origin (get hs "origin")
        meth  (get hs "access-control-request-method")]
    {:status 200
     :headers {"Access-Control-Allow-Headers" headers
               "Access-Control-Allow-Methods" meth
               "Access-Control-Allow-Origin" origin
               "Access-Control-Allow-Credentials" "true"
               "Access-Control-Expose-Headers" "Location, Transaction-Meta, Content-Location, Category, Content-Type, X-total-count"}}))

(defn allow [resp req]
  (let [origin (get-in req [:headers "origin"])]
    (update resp :headers merge
            {"Access-Control-Allow-Origin" origin
             "Access-Control-Allow-Credentials" "true"
             "Access-Control-Expose-Headers" "Location, Content-Location, Category, Content-Type, X-total-count"})))

(defn mk-handler [dispatch]
  (fn [{headers :headers uri :uri :as req}]
    (if (= :options (:request-method req))
      (preflight req)
      (let [resp (dispatch req)]
        (-> resp (allow req))))))

(defn app [ctx]
  (-> (handler ctx)
      mk-handler
      wrap-json-body
      wrap-params
      wrap-json-response
      wrap-reload))

(defonce state (atom nil))

(defn stop-server []
  (when-not (nil? @state)
    (@state :timeout 100)
    (reset! state nil)))

(defn start-server []
  (let [app* (app db/pool-config)]
    (reset! state (server/run-server app* {:port (as-> (get-in m/app-config [:app :port]) port
                                                  (cond-> port
                                                    (string? port)
                                                    Integer/parseInt))}))))

(defn restart-server [] (stop-server) (start-server))

(defn -main [& [_ _]]
  (start-server)
  (println "Server started"))

(comment
  (restart-server)
  )
