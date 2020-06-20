(ns app.patient.crud.view
  (:require [re-frame.core          :as rf]
            [app.patient.crud.model :as model]
            [app.pages              :as pages]
            [app.styles             :as styles]
            [clojure.string         :as str]
            [zenform.model          :as zf]
            [app.inputs             :as inputs]
            [app.patient.crud.form  :as form]
            [zframes.redirect       :as redirect]))


(def card-style
  (styles/style
   [:#patient-card-wrapper
    {:margin-bottom "5px"}
    [:#patient-card
     {:border-radius "8px"
      :padding-top "15px"
      :border "1px solid rgba(51, 51, 51, 0.1)"}
     [:.patient-name
      {:font-size "24px"
       :margin "0px"
       :font-weight "900"}]
     [:.info-item
      [:#label-item
       {:height "23px"
        :font-size "15px"}]]
     [:.patient-info
      {:display "flex"
       :margin-bottom "5px"}
      [:.patient-info-item
       {:border-radius "8px"
        :margin-right "5px"
        :border "1px solid rgba(51, 51, 51, 0.1)"}]
      [:.card-title {:font-weight "700"
                     :font-size "20px"}]
      [:.card-title-inner {:font-weight "600"
                           :margin-bottom "0px"
                           :font-size "16px"}]]
     [:.patient-title-wrapper {:display "flex" :align-items "center"}
      [:.delete-button {:position "absolute" :right "30px" :top 0 :cursor "pointer"}]
      [:.edit-button  {:position "absolute" :right 0 :top 0 :cursor "pointer"}]]
     [:.icon
      {:height "65px"
       :width "65px"
       :margin-top "10px"
       :padding-right "10px"}
      [:.icon.img
       {:fill "blue"}]]]]
   [:.info-item {:margin-right "10px"}]
   [:.remove-icon {:display "none"}]
   [:.address-section:hover [:.remove-icon {:cursor   "pointer"
                                            :display  "block"
                                            :position "absolute"
                                            :right "0"
                                            :margin-right "10px"
                                            :z-index  "10"}]]
   [:.info-header {:font-size "22px"
                   :font-weight "900"
                   :color "white"
                   :background-color "#0069d9"}]))

(defn patient-card [address-ids]
  [:div.card
     [:div.card-header.info-header "Информация о пациенте"]
     [:form
      [:div.form-group.p-3
       [:div.row.mb-3
        [:div.col-sm
         [:label.text-muted "Фамилия"]
         [inputs/text-input form/form-path [:family]]]
        [:div.col-sm
         [:label.text-muted "Имя"]
         [inputs/text-input form/form-path [:given]]]
        [:div.col-sm
         [:label.text-muted "Отчество"]
         [inputs/text-input form/form-path [:patronymic]]]]
       [:div.row
        [:div.col-4.mb-3
         [:label.text-muted "Дата рождения"]
         [inputs/date-input form/form-path [:birthDate] {:class "form-control"
                                                         :type "date"}]]]
       [:div.row
        [:div.col-sm-8
         [:label.text-muted "Пол"]
         [inputs/select form/form-path [:gender] {:class "form-control selector"}]]]]]
     [:div.card-body
      [:h5.card-title "Адрес"]
      (for [id address-ids]
        [:div.mb-3.address-section
         [:div.row.mb-3.form-row
          [:div.col
           [:label.text-muted "Страна"]
           [inputs/text-input form/form-path [:address id :country]]]
          [:div.col
           [:label.text-muted "Город"]
           [inputs/text-input form/form-path [:address id :city]]]
          [:div.col
           [:label.text-muted "Почтовый индекс"]
           [inputs/text-input form/form-path [:address id :postalCode]]]
          [:div.col
           [:label.text-muted "Район"]
           [inputs/text-input form/form-path [:address id :state]]]
          [:i.fas.fa-trash-alt.remove-icon
           {:on-click #(rf/dispatch [:zf/remove-collection-item form/form-path [:address] id])}]]
         [:div.row
          [:div.col-sm-6
           [:label.text-muted "Улица"]
           [inputs/text-input form/form-path [:address id :line]]]]
         (when (and (not= id (dec (count address-ids)))
                    (> (count address-ids) 1))
           [:hr])])]
     [:button.btn.btn-link.mt-2
      {:on-click #(rf/dispatch [:zf/add-collection-item form/form-path [:address]])}
      "+ Добавить адрес"]
     [:div.card-body
      [:h5.card-title "Идентификаторы"]
      [:div.row.mb-3
       [:div.col-6
        [:label.text-muted {:for "ssn-input"} "Номер полиса ОМС"]
        [inputs/text-input form/form-path [:identifier]]]]]])

(pages/reg-subs-page
 model/edit-index
 (fn [address-ids params]
   [:div
    [:nav {:aria-label "breadcrumb"}
     [:ol.breadcrumb
      [:li.breadcrumb-item
       [:a {:href "#"} "Пациенты"]]
      [:li.breadcrumb-item
       [:a {:href (str "#/patient/" (:uid params))}
        (:uid params)]]
      [:li.breadcrumb-item.active
       "Редактирование"]]]
    [:div#patient-card-wrapper card-style
     [:div#patient-card.col-md-6.offset-md-3
      [patient-card address-ids]
      [:button.btn.btn-outline-primary.mt-3.mb-2.mr-2
       {:on-click #(rf/dispatch [::model/save-changes  ::redirect/redirect])}
       "Сохранить"]
      [:button.btn.btn-outline-danger.mt-3.mb-2
       {:on-click #(rf/dispatch [::model/cancel-action ::redirect/redirect])}
       "Отмена"]]]]))

(pages/reg-subs-page
 model/create-index
 (fn [address-ids params]
   [:div
    [:nav {:aria-label "breadcrumb"}
     [:ol.breadcrumb
      [:li.breadcrumb-item
       [:a {:href "#"} "Пациенты"]]
      [:li.breadcrumb-item.active
       "Создание"]]]
    [:div#patient-card-wrapper card-style
     [:div#patient-card.col-md-6.offset-md-3
      [patient-card address-ids]
      [:button.btn.btn-outline-primary.mt-3.mb-2.mr-2
       {:on-click #(rf/dispatch [::model/patient-create ::redirect/redirect])}
       "Создать"]
      [:button.btn.btn-outline-danger.mt-3.mb-2
       {:on-click #(rf/dispatch [::model/cancel-action  ::redirect/redirect])}
       "Отмена"]]]]))
