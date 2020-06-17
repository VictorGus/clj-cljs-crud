(ns app.dbcore
  (:require [honeysql.core       :as hsql]
            [hikari-cp.core      :as hc]
            [clojure.java.jdbc   :as jdbc]
            [clj-postgresql.core :as pg]
            [app.manifest :as m]))

(def pool-config (delay (pg/pool :host     (get-in m/app-config [:db :host])
                                 :port     (get-in m/app-config [:db :port])
                                 :user     (get-in m/app-config [:db :user])
                                 :password (get-in m/app-config [:db :password])
                                 :dbname   (get-in m/app-config [:db :dbname])
                                 :hikari {:read-only true})))

(defn query [query]
  (->> query hsql/format
       (jdbc/query @pool-config)))

(defn query-first [query]
  (->> query hsql/format
       (jdbc/query @pool-config)
       first))

(defn execute [query]
  (->> query hsql/format
       (jdbc/execute! @pool-config)
       first))
