(ns app.layout
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.styles :as styles]
            [zframes.flash :as flash]))

(def layout-style
  (styles/style
   [:#layout {:margin-top "20px"}]
   [:.flashes {:position "fixed" :top "20px" :right "20px" :max-width "500px" :z-index 200}
    [:ul {:padding-left "20px"}]]))

(defn layout [page]
  [:div.h-100 layout-style
   [flash/flashes]
   [:div page]])
