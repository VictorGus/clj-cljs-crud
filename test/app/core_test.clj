(ns app.core-test
  (:require [matcho.core       :as matcho]
            [app.dbcore        :as db]
            [honeysql.core     :as hsql]
            [clj-http.client   :as http]
            [cheshire.core     :as json]
            [ring.mock.request :as mock]
            [app.core          :as sut]
            [app.manifest      :as m]
            [clojure.test    :refer :all]))

(use-fixtures :each
  (fn [f]
    (reset! db/config @db/test-config)
    (db/truncate-test)
    (f)
    (reset! db/config @db/pool-config)))

(deftest crud-read
  (testing "Get patient test"
    (db/execute {:insert-into :patient
                 :values [{:id "pt-1"
                           :resource (hsql/call :cast (json/generate-string {:identifier "123"}) :jsonb)}]} db/test-config)
    (let [response-body (-> (mock/request :get "/Patient/pt-1") sut/app
                            :body
                            (json/parse-string true))
          absent-patient (-> (mock/request :get "/Patient/pt-2") sut/app
                             :body
                             (json/parse-string true))]
      (matcho/match {:entry {:id "pt-1"
                             :resource {:identifier "123"}}} response-body)
      (matcho/match {:message "Patient with this id hasn't been found"} absent-patient))))

(deftest crud-create
  (testing "Create patient test"
    (let [response-body (-> (-> (mock/request :post "/Patient/")
                                (mock/json-body {:identifier "1234"
                                                 :name [{:family "Test"}]})) sut/app
                            :body
                            (json/parse-string true))
          created-resource (-> (mock/request :get (str "/Patient/" (-> response-body :entry :id))) sut/app
                               :body
                               (json/parse-string true))]
      (matcho/match {:identifier "1234"
                     :name [{:family "Test"}]} (get-in response-body [:entry :resource]))
      (matcho/match {:identifier "1234"
                     :name [{:family "Test"}]} (get-in created-resource [:entry :resource])))))

(deftest crud-delete
  (testing "Delete patient test"
    (db/execute {:insert-into :patient
                 :values [{:id "pt-1"
                           :resource (hsql/call :cast (json/generate-string {:identifier "123"}) :jsonb)}]} db/test-config)
    (let [response-body (-> (mock/request :delete "/Patient/pt-1")
                            sut/app
                            :body
                            (json/parse-string true))]
      (matcho/match {:message "ok"} response-body)
      (matcho/match {:message "Patient with this id hasn't been found"} (-> (mock/request :get "/Patient/pt-1")
                                                                            sut/app
                                                                            :body
                                                                            (json/parse-string true))))))
