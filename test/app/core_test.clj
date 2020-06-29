(ns app.core-test
  (:require [matcho.core       :as matcho]
            [app.dbcore        :as db]
            [honeysql.core     :as hsql]
            [clj-http.client   :as http]
            [cheshire.core     :as json]
            [ring.mock.request :as mock]
            [app.core          :as sut]
            [app.manifest      :as m]
            [clojure.test      :refer :all]))

(use-fixtures :each
  (fn [f]
    (db/truncate-test)
    (f)))

(def app* ((sut/app db/test-config)))

(deftest crud-read
  (testing "Get patient test"
    (db/execute {:insert-into :patient
                 :values [{:id "pt-1"
                           :resource (hsql/call :cast (json/generate-string {:identifier "123"}) :jsonb)}]} db/test-config)
    (let [response-body (-> (mock/request :get "/Patient/pt-1") app*
                            :body
                            (json/parse-string true))
          absent-patient (-> (mock/request :get "/Patient/pt-2") app*
                             :body
                             (json/parse-string true))]
      (matcho/match {:entry {:id "pt-1"
                             :resource {:identifier "123"}}} response-body)
      (matcho/match {:message "Patient with this id hasn't been found"} absent-patient))))

(deftest crud-create
  (testing "Create patient test"
    (let [response-body (-> (-> (mock/request :post "/Patient/")
                                (mock/json-body {:identifier "1234"
                                                 :name [{:family "Test"}]})) app*
                            :body
                            (json/parse-string true))
          created-resource (-> (mock/request :get (str "/Patient/" (-> response-body :entry :id))) app*
                               :body
                               (json/parse-string true))
          duplicated-iden (-> (-> (mock/request :post "/Patient/")
                                  (mock/json-body {:identifier "1234"
                                                   :name [{:family "Foobar"}]})) app*
                              :body
                              (json/parse-string true))]
      (matcho/match {:identifier "1234"
                     :name [{:family "Test"}]} (get-in response-body [:entry :resource]))
      (matcho/match {:identifier "1234"
                     :name [{:family "Test"}]} (get-in response-body [:entry :resource]))
      (matcho/match {:message "Patient with this identifier already exists"} duplicated-iden))))

(deftest crud-delete
  (testing "Delete patient test"
    (db/execute {:insert-into :patient
                 :values [{:id "pt-1"
                           :resource (hsql/call :cast (json/generate-string {:identifier "123"}) :jsonb)}]} db/test-config)
    (let [response-body (-> (mock/request :delete "/Patient/pt-1")
                            app*
                            :body
                            (json/parse-string true))]
      (matcho/match {:message "ok"} response-body)
      (matcho/match {:message "Patient with this id hasn't been found"} (-> (mock/request :get "/Patient/pt-1")
                                                                            app*
                                                                            :body
                                                                            (json/parse-string true))))))
