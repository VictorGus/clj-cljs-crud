// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.cookies');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.cookies');
goog.require('re_frame.core');
goog.require('cljs.reader');
/**
 * Returns the cookie after parsing it with cljs.reader/read-string.
 */
zframes.cookies.get_cookie = (function zframes$cookies$get_cookie(k){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = goog.net.cookies.get(cljs.core.name(k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "nil";
}
})());
});
/**
 * Stores the cookie value using pr-str.
 */
zframes.cookies.set_cookie = (function zframes$cookies$set_cookie(k,v){
return goog.net.cookies.set(cljs.core.name(k),cljs.core.clj__GT_js(v));
});
zframes.cookies.remove_BANG_ = (function zframes$cookies$remove_BANG_(k){
return goog.net.cookies.remove(cljs.core.name(k));
});
zframes.cookies.watch_expires = (function zframes$cookies$watch_expires(k){
return null;
});
var G__9603_9605 = cljs.core.cst$kw$zframes$cookies_SLASH_get;
var G__9604_9606 = ((function (G__9603_9605){
return (function (coeffects,key){
return cljs.core.assoc_in(coeffects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cookie,key], null),zframes.cookies.get_cookie(key));
});})(G__9603_9605))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__9603_9605,G__9604_9606) : re_frame.core.reg_cofx.call(null,G__9603_9605,G__9604_9606));
var G__9607_9612 = cljs.core.cst$kw$zframes$cookies_SLASH_set;
var G__9608_9613 = ((function (G__9607_9612){
return (function (p__9609){
var map__9610 = p__9609;
var map__9610__$1 = (((((!((map__9610 == null))))?(((((map__9610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9610):map__9610);
var opts = map__9610__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9610__$1,cljs.core.cst$kw$key);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9610__$1,cljs.core.cst$kw$value);
return zframes.cookies.set_cookie(k,v);
});})(G__9607_9612))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__9607_9612,G__9608_9613) : re_frame.core.reg_fx.call(null,G__9607_9612,G__9608_9613));
var G__9614_9619 = cljs.core.cst$kw$cookies_SLASH_set;
var G__9615_9620 = ((function (G__9614_9619){
return (function (p__9616){
var map__9617 = p__9616;
var map__9617__$1 = (((((!((map__9617 == null))))?(((((map__9617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9617):map__9617);
var opts = map__9617__$1;
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9617__$1,cljs.core.cst$kw$key);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9617__$1,cljs.core.cst$kw$value);
return zframes.cookies.set_cookie(k,v);
});})(G__9614_9619))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__9614_9619,G__9615_9620) : re_frame.core.reg_fx.call(null,G__9614_9619,G__9615_9620));
var G__9621_9623 = cljs.core.cst$kw$zframes$cookies_SLASH_remove;
var G__9622_9624 = ((function (G__9621_9623){
return (function (k){
return goog.net.cookies.remove(cljs.core.name(k));
});})(G__9621_9623))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__9621_9623,G__9622_9624) : re_frame.core.reg_fx.call(null,G__9621_9623,G__9622_9624));
