// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zenform.validators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
if((typeof zenform !== 'undefined') && (typeof zenform.validators !== 'undefined') && (typeof zenform.validators.validate !== 'undefined')){
} else {
zenform.validators.validate = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7941 = cljs.core.get_global_hierarchy;
return (fexpr__7941.cljs$core$IFn$_invoke$arity$0 ? fexpr__7941.cljs$core$IFn$_invoke$arity$0() : fexpr__7941.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zenform.validators","validate"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (cfg,value){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cfg);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$min_DASH_length,(function (p__7942,v){
var map__7943 = p__7942;
var map__7943__$1 = (((((!((map__7943 == null))))?(((((map__7943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7943):map__7943);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7943__$1,cljs.core.cst$kw$value);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7943__$1,cljs.core.cst$kw$message);
if(typeof v === 'string'){
if((cljs.core.count(v) < limit)){
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["Shouldn't be shorter then ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join('');
}
} else {
return null;
}
} else {
return null;
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$min_DASH_items,(function (p__7945,v){
var map__7946 = p__7945;
var map__7946__$1 = (((((!((map__7946 == null))))?(((((map__7946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7946):map__7946);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7946__$1,cljs.core.cst$kw$value);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7946__$1,cljs.core.cst$kw$message);
if(cljs.core.coll_QMARK_((function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())){
if((cljs.core.count(v) < limit)){
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["Shouldn't be shorter then ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join('');
}
} else {
return null;
}
} else {
return null;
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$number,(function (p__7948,v){
var map__7949 = p__7948;
var map__7949__$1 = (((((!((map__7949 == null))))?(((((map__7949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7949):map__7949);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7949__$1,cljs.core.cst$kw$message);
if((((!(((typeof v === 'string')?clojure.string.blank_QMARK_(v):cljs.core.empty_QMARK_(v))))) && ((((v >= (0))) || ((v <= (0))))))){
return null;
} else {
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Should be a number";
}
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$required,(function (p__7951,v){
var map__7952 = p__7951;
var map__7952__$1 = (((((!((map__7952 == null))))?(((((map__7952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7952):map__7952);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7952__$1,cljs.core.cst$kw$message);
if((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))) || (((cljs.core.map_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))) || (((cljs.core.sequential_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))){
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Should not be blank";
}
} else {
return null;
}
}));
zenform.validators.email_regex = /.+?\@.+?\..+/;
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$email,(function (p__7954,v){
var map__7955 = p__7954;
var map__7955__$1 = (((((!((map__7955 == null))))?(((((map__7955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7955):map__7955);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7955__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches(zenform.validators.email_regex,v))){
return null;
} else {
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Should be valid email";
}
}
} else {
return null;
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pattern,(function (p__7957,v){
var map__7958 = p__7957;
var map__7958__$1 = (((((!((map__7958 == null))))?(((((map__7958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7958):map__7958);
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7958__$1,cljs.core.cst$kw$regex);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7958__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches(rx,v))){
return null;
} else {
var or__4131__auto__ = msg;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["Should match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rx)].join('');
}
}
} else {
return null;
}
}));
