(ns app.actions
  (:require [app.dbcore       :as db]
            [clojure.string   :as str]
            [honeysql.types   :refer :all]
            [honeysql.helpers :refer :all]
            [honeysql.core    :as hsql]))

(defn patient-search [{{:keys [search-query]} :params :as req}]
  (let [query-params (as-> (str/trim search-query) q
                       (str/split q #" ")
                       (remove str/blank? q)
                       (map #(str % ":*") q))]
    {:status 200
     :body {:entry (db/query (cond-> {:select [:*]
                                      :from [:patient]}
                               (not-empty query-params)
                               (assoc :where (hsql/raw (str "to_tsvector(resource)" " @@ " "to_tsquery ('" (str/join " & " query-params) "')")))))}}))


(defn get-patient-by-identifier [{{:keys [iden]} :params :as req}]
  {:status 200
   :body {:entry (db/query-first {:select [:*]
                                  :from [:patient]
                                  :where (hsql/raw (str "resource->>'identifier' = " (str "'" iden "'")))})}})
