(ns app.patient.crud.model
  (:require [re-frame.core         :as rf]
            [app.patient.crud.form :as form]))

(def edit-index ::edit)

(rf/reg-event-fx
 ::init-edit-form
 (fn [{db :db} [_ {{entry :entry} :data}]]
   {:dispatch [::form/init entry]}))

(rf/dispatch [edit-index])

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
 ::success-action
 (fn [{db :db} [_ {{{{:keys [efx id msg]} :params} :success} :request}]]
   {:dispatch-n [[:flash/success {:msg msg}]
                 [efx {:uri (if id
                              (str "/patient/" id)
                              "")}]]}))

(rf/reg-event-fx
 ::save-changes
 (fn [{db :db} [_ efx]]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     (form/eval-form db (fn [values]
                          {:xhr/fetch {:uri (str "/Patient/" id)
                                       :method "PUT"
                                       :success {:event ::success-action
                                                 :params {:efx efx
                                                          :msg "Пациент успешно изменен"
                                                          :id  id}}
                                       :body values}})))))

(rf/reg-event-fx
 ::patient-create
 (fn [{db :db} [_ efx]]
   (form/eval-form db (fn [values]
                        {:xhr/fetch {:uri "/Patient"
                                     :method "POST"
                                     :success {:event ::success-action
                                               :params {:efx efx
                                                        :msg "Пациент успешно создан"}}
                                     :error   {:event :flash/danger
                                               :params {:msg "Пациент с таким ОМС уже существует"}}
                                     :body values}}))))

(rf/reg-event-fx
 ::cancel-action
 (fn [{db :db} [_ efx]]
   (let [id (get-in db [:route-map/current-route :params :uid])]
     {:dispatch [efx {:uri (if id
                             (str "/patient/" id)
                             "")}]})))

(rf/reg-sub
 edit-index
 :<- [:xhr/response ::patient-edit]
 :<- [:zf/collection-indexes form/form-path [:address]]
 (fn [[{{entry :entry} :data} address-ids]]
   address-ids))

(def create-index ::create)

(rf/reg-event-fx
 create-index
 (fn [{db :db} [pid phase params]]
   (cond
     (= :deinit phase)
     {}
     (or (= :params phase) (= :init phase))
     {:dispatch [::form/init]})))

(rf/reg-sub
 create-index
 :<- [:zf/collection-indexes form/form-path [:address]]
 (fn [address-ids]
   address-ids))
