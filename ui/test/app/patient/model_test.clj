(ns app.patient.model-test
  (:require [app.patient.model :as sut]
            [re-frame.core     :as rf]
            [zframes.routing   :as routing]
            [utils             :as u]
            [matcho.core       :as matcho]
            [clojure.test :refer :all]))

(use-fixtures :once
  (fn [f]
    (u/prepare-data)
    (f)))

(deftest show
  (testing "Patient data display"
    (u/reset-db)
    (def s (rf/subscribe [sut/show-index]))
    (routing/redirect "/patient/pt-1")

    (matcho/match {:name ["Testov" "Test"]
                   :identifier "123"} @s)))
