(ns utils
  (:require [clojure.string    :as str]
            [app.core          :as app]
            [honeysql.core     :as hsql]
            [re-frame.core     :as rf]
            [cheshire.core     :as json]
            [app.routes        :as routes]
            [app.dbcore        :as db]))


(defn json-fetch [{:keys [uri token headers is-fetching-path params success error] :as opts}]
  (if (vector? opts)
    (doseq [o opts] (json-fetch o))
    (let [headers (cond-> {"accept" "application/json"}
                    token                (assoc "authorization" (str "Bearer " token))
                    (nil? (:files opts)) (assoc "Content-Type" "application/json")
                    true                 (merge (or headers {})))
          request (-> opts
                      (dissoc :method)
                      (dissoc :body)
                      (assoc :resource (:body opts))
                      (assoc :headers headers)
                      (assoc :query-string (str/join "&" (map (fn [[k v]] (str (name k) "=" v)) (:params opts)))) ;; FIXME: Probably duplicate
                      (assoc :request-method
                             (if-let [m (:method opts)]
                               (keyword (str/lower-case (name m)))
                               :get)))
          resp    (update ((app/app db/test-config) request) :body #(json/parse-string % true))]
      (when (:req-id opts)
        (rf/dispatch [:xhr/done
                      {:request opts
                       :data    (:body resp)
                       :status  (:status resp)}]))
      (if (< (:status resp) 299)
        (when-let [ev (:event success)]
          (rf/dispatch [ev (merge success {:request opts :response resp :data (:body resp)}) (:params success)]))
        (when-let [ev (:event error)]
          (rf/dispatch [ev (merge error {:request opts :response resp :data (:body resp)}) (:params error)]))))))

(rf/reg-fx :json/fetch json-fetch)

(rf/reg-fx :xhr/fetch #(rf/dispatch [:xhr/fetch %]))

(rf/reg-event-fx
 :xhr/done
 (fn [{db :db} [_ {{:keys [req-id] :as req} :request :as resp}]]
   {:db (assoc-in db [:xhr :req req-id] resp)}))

(rf/reg-sub
 :xhr/response
 (fn [db [_ key]]
   (get-in db [:xhr :req key])))

(rf/reg-event-fx
 :xhr/fetch
 (fn [{db :db} [_ opts]]
   (merge
    {:db (reduce (fn [acc opt]
                   (assoc-in acc [(:pid opt) :loading] true))
                 db
                 (if (vector? opts) opts [opts]))
     :json/fetch opts})))

(defn reset-db []
  (reset! re-frame.db/app-db {:route-map/routes routes/routes}))

(defn prepare-data []
  (db/truncate-test)
  (db/execute {:insert-into :patient
                            :values [{:id "pt-1"
                                      :resource (hsql/call :cast (json/generate-string {:identifier "123"
                                                                                        :name [{:given ["Test"]
                                                                                                :family "Testov"}]}) :jsonb)}]} db/test-config))
