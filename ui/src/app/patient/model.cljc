(ns app.patient.model
  (:require [re-frame.core  :as rf]
            [clojure.string :as str]))

(def index ::index)
(def show-index ::show)

(rf/reg-event-fx
 index
 (fn [{db :db} [pid phase params]]
   (cond
     (= :deinit phase)
     {}
     (or (= :params phase) (= :init phase))
     {:xhr/fetch {:uri "/Patient/$search"
                  :params {:search-query (if (get-in params [:params :q])
                                           (str/replace (get-in params [:params :q]) #" " "%20")
                                           "%20")}
                  :req-id ::patients-search}})))

(rf/reg-sub
 index
 :<- [:xhr/response ::patients-search]
 (fn [{data :data}]
   (map
    (fn [el]
      (update-in el [:resource :name]
                 (partial map #(str (get % :family) " " (str/join " " (get % :given))))))
    (:entry data))))

(rf/reg-event-fx
 show-index
 (fn [{db :db} [pd phase params]]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     (cond
       (= :deinit phase)
       {}
       (or (= :params phase) (= :init phase))
       {:dispatch [:xhr/fetch {:uri (str "/Patient/" id)
                               :req-id ::patient-show}]}))))

(rf/reg-sub
 show-index
 :<- [:xhr/response ::patient-show]
 (fn [{{entry :entry} :data} [_]]
   (let [content (:resource entry)]
     (update content :name (partial map #(str (get % :family) " " (str/join " " (get % :given))))))))

(rf/reg-event-fx
 ::success-delete
 (fn [{db :db} [_ {{{{:keys [efx]} :params} :success} :request}]]
   {:dispatch-n [[:flash/success {:msg "Пациент успешно удален"}]
                 [efx {:uri ""}]]}))

(rf/reg-event-fx
 ::delete-patient
 (fn [{db :db} [_ efx]]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     {:xhr/fetch {:uri (str "/Patient/" id)
                  :method "DELETE"
                  :success {:event ::success-delete
                            :params {:efx efx}}}})))
