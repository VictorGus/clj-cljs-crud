(ns app.patient.crud.model
  (:require [re-frame.core         :as rf]
            [app.patient.crud.form :as form]))

(def edit-index ::edit)

(rf/reg-sub
 edit-index
 (fn [_]
   {}))

(rf/reg-event-fx
 edit-index
 (fn [{db :db} [pid phase params]]
   {}))
