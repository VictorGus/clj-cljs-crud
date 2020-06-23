(ns app.routes)

(def routes {:. :app.patient.model/index
             "patient" {"create" {:. :app.patient.crud.model/create}
                        [:uid]   {:. :app.patient.model/show
                                  "edit" {:. :app.patient.crud.model/edit}}}})
