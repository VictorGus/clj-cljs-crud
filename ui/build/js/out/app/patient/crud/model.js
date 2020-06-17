// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.patient.crud.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.patient.crud.form');
app.patient.crud.model.edit_index = cljs.core.cst$kw$app$patient$crud$model_SLASH_edit;
var G__8196_8198 = app.patient.crud.model.edit_index;
var G__8197_8199 = ((function (G__8196_8198){
return (function (_){
return cljs.core.PersistentArrayMap.EMPTY;
});})(G__8196_8198))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8196_8198,G__8197_8199) : re_frame.core.reg_sub.call(null,G__8196_8198,G__8197_8199));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.patient.crud.model.edit_index,(function (p__8200,p__8201){
var map__8202 = p__8200;
var map__8202__$1 = (((((!((map__8202 == null))))?(((((map__8202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8202):map__8202);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8202__$1,cljs.core.cst$kw$db);
var vec__8203 = p__8201;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8203,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8203,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8203,(2),null);
return cljs.core.PersistentArrayMap.EMPTY;
}));
