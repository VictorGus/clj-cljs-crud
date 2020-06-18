(ns app.patient.crud.form
  (:require [re-frame.core      :as rf]
            [zenform.model      :as zf]
            [zenform.validators :as validators]))

(def form-path [:form :edit])

(def form-schema
  {:type :form
   :fields {:family     {:type :string}
            :given      {:type :string}
            :patronymic {:type :string}
            :address    {:type :collection
                         :item {:type   :form
                                :fields {:line       {:type :string}
                                         :city       {:type :string}
                                         :postalCode {:type :string}
                                         :state      {:type :string}
                                         :country    {:type :string}}}}
            :birthDate  {:type :string}
            :gender     {:type :string
                         :items [{:value "male"    :display "Мужской"}
                                 {:value "female"  :display "Женский"}
                                 {:value "other"   :display "Другой"}
                                 {:value "unknown" :display "Неизвестен"}]}
            :identifier {:type :string
                         :validators {:required {:message "Пожалуйста, укажите номер ОМС"}}}}})

(rf/reg-event-fx
 ::init
 (fn [{db :db} [_ {:keys [resource]}]]
   {:dispatch [:zf/init form-path form-schema (as-> (update resource :name (fn [[n]]
                                                                             (let [[given patronymic] (:given n)]
                                                                               (merge n {:given given
                                                                                         :patronymic patronymic})))) resource
                                                (-> resource
                                                    (merge (select-keys (get resource :name) [:given :family :patronymic]))
                                                    (dissoc :name)))]}))

(defn eval-form [db fx]
  (let [{:keys [errors form value]} (->> form-path (get-in db) zf/eval-form)
        content (-> value
                    (assoc :name [(merge (select-keys value [:family])
                                         {:given [(:given value) (:patronymic value)]})])
                    (dissoc :family :given :patronymic))]
    (if (empty? errors)
      (fx content)
      {:db (assoc-in db form-path form)
       :dispatch [:flash/danger {:msg (-> errors vals first :required)}]})))
