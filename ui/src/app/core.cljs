(ns ^:figwheel-hooks app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [zframes.xhr]
            [zframes.redirect :as redirect]
            [zframes.flash :as flash]
            [zframes.routing]
            [app.routes :as routes]
            [app.pages :as pages]
            [app.layout :as layout]
            [app.patient.crud.view]
            [app.patient.view]))

(rf/reg-event-fx
 ::initialize
 (fn [{db :db} _]
   {:db (-> db
            (assoc-in [:xhr :config :base-url] (or (.-baseURL js/window)
                                                   "http://localhost:9090"))
            (assoc :route-map/routes routes/routes))
    :route-map/start {}}))

(defn not-found-page []
  [:h1 "Not found"])

(defn current-page []
  (let [route  (rf/subscribe [:route-map/current-route])]
    (fn []
      (let [page (get @pages/pages (:match @route))
            params (:params @route)]
        [layout/layout
         (if page
           [page params]
           [not-found-page])]))))

(defn mount-root []
  (rf/dispatch-sync [::initialize])
  (r/render [current-page] (.getElementById js/document "app")))
