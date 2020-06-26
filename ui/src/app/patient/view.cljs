(ns app.patient.view
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [app.pages :as pages]
            [app.styles :as styles]
            [zframes.redirect :as redirect]
            [zframes.debounce :as debounce]
            [app.patient.model :as model]
            [clojure.string :as str]))

(def input-style
  (styles/style
   [:.wrapper
    {:margin-top "20px"}]
   [:.patient-grid
    {:width "100%"}
    [:.icon
     {:height "65px"
      :width "65px"
      :margin-top "10px"
      :padding-right "10px"}

     [:.icon.img
      {:fill "blue"}]]

    [:.patient-record
     {:display "flex"
      :text-decoration "none"
      :color "black"
      :padding "8px 8px"
      :margin-top "12px"
      :border-radius ".25rem"
      :border "1px solid rgba(51, 51, 51, 0.1)"}


     [:.patient-info
      {:display "flex"
       :flex-grow "1"
       :align-items "center"}

      [:.patient-address-value
       {:padding "5px 5px"}]

      [:.patient-name
       {:font-size "20px"}]
      ]]

    [:.right-wrapper
     [:.right-item
      {:text-align "right"}
      [:.patient-right-value
       {:padding "5px 5px"}]]]
    [:.patient-record:hover
     {:background-color "#e6f2ff"}]]
   [:.not-found {:font-size "22px"}]))

(defn item-view [data]
  [:a.patient-record
   {:href (str "/#/patient/" (:id data))}
   [:div.icon
    [:img {:src (case (get-in data [:resource :gender])
                  "male"
                  "male.svg"
                  "female"
                  "female.svg"
                  "alien.svg")}]]
   [:div.patient-info
    [:div
     [:b.patient-name (get-in data [:resource :name])]
     [:span.text-muted.pl-2 (get-in data [:resource :birthDate])]
     [:div
      [:span.text-muted
       "Улица:"]
      [:span.patient-address-value (or (get-in data [:resource :address 0 :line])
                                       "-")]
      [:span.text-muted
       "Город:"]
      [:span.patient-address-value (or (get-in data [:resource :address 0 :city])
                                       "-")]
      [:span.text-muted
       "Район:"]
      [:span.patient-address-value (or (get-in data [:resource :address 0 :state])
                                       "-")]
      [:span.text-muted
       "Страна:"]
      [:span.patient-address-value (or (get-in data [:resource :address 0 :country])
                                       "-")]]]]
   [:div.d-flex.align-items-center.right-wrapper
    [:div.right-item
     [:span.text-muted
      "Номер ОМС:"]
     [:span.patient-right-value (or (get-in data [:resource :identifier])
                                    "-")]]]])

(pages/reg-subs-page
 model/index
 (fn [data]
   [:div.wrapper.container input-style
    [:div.d-flex.flex-row.w-100
     [:div.flex-grow-1
      [:input.form-control {:type "text"
                            :placeholder "Поиск..."
                            :on-change #(debounce/debounce [::redirect/set-params {:q (-> % .-target .-value)}])}]]
     [:div
      [:button.btn.btn-outline-primary.btn-block.ml-2
       {:on-click #(rf/dispatch [::redirect/redirect {:uri "/patient/create"}])}
       "+ Создать"]]]
    [:div.patient-grid.ml-1
     (for [item data]
       [item-view item])]]))

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
   [:.info-header {:font-size "22px"
                   :font-weight "900"
                   :color "white"
                   :background-color "#0069d9"}]))

(defn patient-card [data]
  [:div#patient-card-wrapper card-style
   [:div#patient-card.col-md-6.offset-md-3
    [:div.patient-title-wrapper
     [:div.icon
      [:img {:src (case (:gender data)
                    "male"
                    "male.svg"
                    "female"
                    "female.svg"
                    "alien.svg")}]]
     [:div
      [:p.patient-name (:name data)]
      [:p.text-muted.mb-0  (:birthDate data)]]
     [:p.edit-button.mt-2.mr-2 [:i.fas.fa-edit {:on-click #(rf/dispatch [::redirect/redirect
                                                                         {:uri (str
                                                                                (-> js/window .-location .-href
                                                                                    (str/split #"#")
                                                                                    last) "/edit")}])}]]
     [:p.delete-button.mt-2.mr-2 [:i.fas.fa-trash-alt {:on-click #(rf/dispatch [::model/delete-patient ::redirect/redirect])}]]]
    [:div.card
     [:div.card-header.info-header "Информация о пациенте"]
     (when (:address data)
       [:div.card-body
        [:h5.card-title "Адрес"]
        (for [item (:address data)]
          [:div.d-flex.flex-wrap
           [:div.info-item
            [:span.text-muted "Страна: "]
            (:country item)]
           [:div.info-item
            [:span.text-muted "Город: "]
            (:city item)]
           [:div.info-item
            [:span.text-muted "Почтовый индекс: "]
            (:postalCode item)]
           [:div.info-item
            [:span.text-muted "Район: "]
            (:state item)]
           [:div.info-item
            [:span.text-muted "Улица: "]
            (:line item)]])])
     [:div.card-body
      [:h5.card-title "Индентификаторы"]
      [:span.info-item
       [:span.text-muted "ОМС: "]
       (:identifier data)]]]]])

(pages/reg-subs-page
 model/show-index
 (fn [data params]
   [:div
    [:nav {:aria-label "breadcrumb"}
     [:ol.breadcrumb
      [:li.breadcrumb-item
       [:a {:href "#"} "Пациенты"]]
      [:li.breadcrumb-item.active
       (:uid params)]]]
    [patient-card data]]))
