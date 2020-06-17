(ns app.patient.crud.model
  (:require [re-frame.core         :as rf]
            [app.patient.crud.form :as form]))

(def edit-index ::edit)

(rf/reg-event-fx
 ::init-edit-form
 (fn [{db :db} [_ {{entry :entry} :data}]]
   {:dispatch [::form/init entry]}))

(rf/reg-event-fx
 edit-index
 (fn [{db :db} [pid phase params]]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     (cond
       (= :deinit phase)
       {}
       (or (= :params phase) (= :init phase))
       {:xhr/fetch {:uri (str "/Patient/" id)
                    :success {:event ::init-edit-form}
                    :req-id ::patient-edit}}))))

(rf/reg-event-fx
 ::save-changes
 (fn [{db :db} _]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     (form/eval-form db (fn [values]
                          {:xhr/fetch {:uri (str "/Patient/" id)
                                       :method "PUT"
                                       :success {:event ::success-action}
                                       :body values}})))))

(rf/reg-event-fx
 ::cancel-editing
 (fn [{db :db} _]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     {:redirect {:uri (str "/patient/" id)}})))

(rf/reg-sub
 edit-index
 :<- [:xhr/response ::patient-edit]
 (fn [{{entry :entry} :data}]
   {}))
