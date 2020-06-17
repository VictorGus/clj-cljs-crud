(ns app.crud
  (:require [app.dbcore    :as db]
            [cheshire.core :as json]
            [honeysql.core :as hsql]))

(defn deep-merge [v & vs]
  (letfn [(rec-merge [v1 v2]
            (if (and (map? v1) (map? v2))
              (merge-with deep-merge v1 v2)
              v2))]
    (if (some identity vs)
      (reduce #(rec-merge %1 %2) v vs)
      v)))

(defn get-patient-by-id [{{:keys [id]} :params :as req}]
  (if-let [entry (db/query-first {:select [:*]
                                  :from [:patient]
                                  :where [:= :id id]})]
    {:status 200
     :body {:entry entry}}
    {:status 404
     :body {:message "Patient with this id hasn't been found"}}))

(defn get-patient-by-identifier [{{:keys [iden]} :params :as req}]
  {:status 200
   :body {:entry (db/query-first {:select [:*]
                                  :from [:patient]
                                  :where (hsql/raw (str "resource->>'identifier' = " iden))})}})

(defn delete-patient [{:keys [id] :as req}]
  (let [deleted-rows (db/execute {:delete-from :patient
                                  :where [:= :id id]})]
    (if (= 0 deleted-rows)
      {:status 404
       :body {:message "Patient with this id hasn't been found"}}
      {:status 200
       :body {:message "ok"}})))

(defn create-patient [{:keys [body] :as req}]
  (let [id (str (java.util.UUID/randomUUID))]
    (db/execute {:insert-into :patient
                 :values [{:id id
                           :resource (hsql/call :cast (json/generate-string body) :jsonb)}]})
    {:status 201
     :body {:entry {:id id
                    :resource body}}}))

(defn patch-patient [{:keys [body] {id :id} :params :as req}]
  (let [{old-resource :resource} (db/query-first {:select [:resource]
                                                  :from [:patient]
                                                  :where [:= :id id]})
        new-resource (deep-merge old-resource body)
        updated-rows (db/execute {:update :patient
                                  :set {:resource (hsql/call :cast (json/generate-string new-resource) ::jsonb)}
                                  :where [:= :id id]})]
    (if (= 0 updated-rows)
      (do
        (db/execute {:insert-into :patient
                     :values [{:id id
                               :resource body}]})
        {:status 201
         :body {:entry {:id id
                        :resource body}}})
      {:status 200
       :body {:entry {:id id
                      :resource new-resource}}})))
