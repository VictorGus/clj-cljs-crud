(ns app.patient.crud.view
  (:require [re-frame.core          :as rf]
            [app.patient.crud.model :as model]
            [app.pages :as pages]
            [app.styles :as styles]
            [zframes.redirect :as redirect]))

(pages/reg-subs-page
 model/edit-index
 (fn [_]
   [:div "test"]))
