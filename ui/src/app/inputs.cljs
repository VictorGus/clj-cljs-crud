(ns app.inputs
  (:require [re-frame.core :as rf]
            [reagent.core  :as r]))

(defn text-input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        attrs (assoc attrs :on-change #(rf/dispatch [:zf/set-value form-path path (.. % -target -value)]))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:input (-> attrs
                    (assoc :value v)
                    (update :class (fn [class] (str (or class "form-control") (when errs " is-invalid") ))))]))))

(defn select [form-path path & [attrs]]
  (let [node @(rf/subscribe [:zf/node form-path path])
        on-change (fn [x]
                    (rf/dispatch
                     [:zf/set-value form-path path
                      (.. x -target -value)]))]

    (let [{value-current :value
           :keys [errors]} node

          value-current (or value-current "")]

      [:select
       (merge attrs
              {:on-change on-change
               :value value-current})

       (for [item (:items node)
             :let [{:keys [id value display]} item
                   key (or id value)]]
         [:option
          {:key key :value value}
          (or display value)])])))

(defn date-input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        state (r/atom {})
        attrs (assoc attrs :on-change (fn [e]
                                        (swap! state assoc :value (.. e -target -value))
                                        (rf/dispatch [:zf/set-value form-path path (.. e -target -value)])))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:input (-> attrs
                    (assoc :default-value v)
                    (assoc :value v)
                    (assoc :type "date")
                    (update :class (fn [class] (str class (when errs " is-invalid") ))))]))))
