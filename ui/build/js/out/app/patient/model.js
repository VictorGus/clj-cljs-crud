// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.patient.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
app.patient.model.index = cljs.core.cst$kw$app$patient$model_SLASH_index;
app.patient.model.show_index = cljs.core.cst$kw$app$patient$model_SLASH_show;
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.model.index,(function (p__8209,p__8210){
var map__8211 = p__8209;
var map__8211__$1 = (((((!((map__8211 == null))))?(((((map__8211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8211):map__8211);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8211__$1,cljs.core.cst$kw$db);
var vec__8212 = p__8210;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8212,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8212,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8212,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deinit,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$patient$model_SLASH_set_DASH_loading_DASH_status_DASH_true], null),cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,"/Patient/$search",cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search_DASH_query,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$q], null)))?clojure.string.replace(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$q], null)),/ /,"%20"):"%20")], null),cljs.core.cst$kw$req_DASH_id,cljs.core.cst$kw$app$patient$model_SLASH_patients_DASH_search], null)], null);
} else {
return null;
}
}
}));
var G__8217_8224 = app.patient.model.index;
var G__8218_8225 = cljs.core.cst$kw$_LT__DASH_;
var G__8219_8226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_response,cljs.core.cst$kw$app$patient$model_SLASH_patients_DASH_search], null);
var G__8220_8227 = ((function (G__8217_8224,G__8218_8225,G__8219_8226){
return (function (p__8221){
var map__8222 = p__8221;
var map__8222__$1 = (((((!((map__8222 == null))))?(((((map__8222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8222):map__8222);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8222__$1,cljs.core.cst$kw$data);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__8222,map__8222__$1,data,G__8217_8224,G__8218_8225,G__8219_8226){
return (function (el){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(el,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$name], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,((function (map__8222,map__8222__$1,data,G__8217_8224,G__8218_8225,G__8219_8226){
return (function (p1__8216_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__8216_SHARP_,cljs.core.cst$kw$family))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__8216_SHARP_,cljs.core.cst$kw$given)))].join('');
});})(map__8222,map__8222__$1,data,G__8217_8224,G__8218_8225,G__8219_8226))
));
});})(map__8222,map__8222__$1,data,G__8217_8224,G__8218_8225,G__8219_8226))
,cljs.core.cst$kw$entry.cljs$core$IFn$_invoke$arity$1(data));
});})(G__8217_8224,G__8218_8225,G__8219_8226))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__8217_8224,G__8218_8225,G__8219_8226,G__8220_8227) : re_frame.core.reg_sub.call(null,G__8217_8224,G__8218_8225,G__8219_8226,G__8220_8227));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.model.show_index,(function (p__8228,p__8229){
var map__8230 = p__8228;
var map__8230__$1 = (((((!((map__8230 == null))))?(((((map__8230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8230):map__8230);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8230__$1,cljs.core.cst$kw$db);
var vec__8231 = p__8229;
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8231,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8231,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8231,(2),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$deinit,phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,phase)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$init,phase)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$req_DASH_id,cljs.core.cst$kw$app$patient$model_SLASH_patient_DASH_show], null)], null);
} else {
return null;
}
}
}));
var G__8236_8245 = app.patient.model.show_index;
var G__8237_8246 = cljs.core.cst$kw$_LT__DASH_;
var G__8238_8247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_response,cljs.core.cst$kw$app$patient$model_SLASH_patient_DASH_show], null);
var G__8239_8248 = ((function (G__8236_8245,G__8237_8246,G__8238_8247){
return (function (p__8240){
var map__8241 = p__8240;
var map__8241__$1 = (((((!((map__8241 == null))))?(((((map__8241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8241):map__8241);
var map__8242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8241__$1,cljs.core.cst$kw$data);
var map__8242__$1 = (((((!((map__8242 == null))))?(((((map__8242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8242):map__8242);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8242__$1,cljs.core.cst$kw$entry);
var content = cljs.core.cst$kw$resource.cljs$core$IFn$_invoke$arity$1(entry);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(content,cljs.core.cst$kw$name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,((function (content,map__8241,map__8241__$1,map__8242,map__8242__$1,entry,G__8236_8245,G__8237_8246,G__8238_8247){
return (function (p1__8235_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__8235_SHARP_,cljs.core.cst$kw$family))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__8235_SHARP_,cljs.core.cst$kw$given)))].join('');
});})(content,map__8241,map__8241__$1,map__8242,map__8242__$1,entry,G__8236_8245,G__8237_8246,G__8238_8247))
));
});})(G__8236_8245,G__8237_8246,G__8238_8247))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__8236_8245,G__8237_8246,G__8238_8247,G__8239_8248) : re_frame.core.reg_sub.call(null,G__8236_8245,G__8237_8246,G__8238_8247,G__8239_8248));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$app$patient$model_SLASH_delete_DASH_patient,(function (p__8249,_){
var map__8250 = p__8249;
var map__8250__$1 = (((((!((map__8250 == null))))?(((((map__8250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8250):map__8250);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8250__$1,cljs.core.cst$kw$db);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params,cljs.core.cst$kw$uid], null));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$xhr_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,["/Patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.cst$kw$method,"DELETE"], null)], null);
}));
