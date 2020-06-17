// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.redirect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zframes.window_location');
goog.require('zframes.routing');
goog.require('clojure.string');
zframes.redirect.window_open = (function zframes$redirect$window_open(url){
return window.open(url,"_blank").focus;
});
zframes.redirect.page_redirect = (function zframes$redirect$page_redirect(url){
return window.location.href = url;
});
zframes.redirect.redirect = (function zframes$redirect$redirect(url){
return window.location.hash = url;
});
zframes.redirect.redirect_with_refresh = (function zframes$redirect$redirect_with_refresh(url){
window.location.hash = url;

return location.reload();
});
var G__6767_6769 = cljs.core.cst$kw$zframes$redirect_SLASH_redirect;
var G__6768_6770 = ((function (G__6767_6769){
return (function (opts){
return zframes.redirect.redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return zframes.window_location.gen_query_string(params);
} else {
return null;
}
})()].join(''));
});})(G__6767_6769))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6767_6769,G__6768_6770) : re_frame.core.reg_fx.call(null,G__6767_6769,G__6768_6770));
var G__6771_6773 = cljs.core.cst$kw$zframes$redirect_SLASH_redirect_DASH_with_DASH_refresh;
var G__6772_6774 = ((function (G__6771_6773){
return (function (opts){
return zframes.redirect.redirect_with_refresh([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return zframes.window_location.gen_query_string(params);
} else {
return null;
}
})()].join(''));
});})(G__6771_6773))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6771_6773,G__6772_6774) : re_frame.core.reg_fx.call(null,G__6771_6773,G__6772_6774));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_redirect,(function (fx,p__6775){
var vec__6776 = p__6775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6776,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6776,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,opts], null);
}));
var G__6779_6797 = cljs.core.cst$kw$zframes$redirect_SLASH_page_DASH_redirect;
var G__6780_6798 = ((function (G__6779_6797){
return (function (opts){
if(cljs.core.truth_(cljs.core.cst$kw$_target.cljs$core$IFn$_invoke$arity$1(opts))){
return zframes.redirect.window_open(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return zframes.redirect.page_redirect([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(opts)),(function (){var temp__5720__auto__ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5720__auto__)){
var params = temp__5720__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,temp__5720__auto__,G__6779_6797){
return (function (p__6793){
var vec__6794 = p__6793;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6794,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');
});})(params,temp__5720__auto__,G__6779_6797))
,params)))].join('');
} else {
return null;
}
})()].join(''));
}
});})(G__6779_6797))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6779_6797,G__6780_6798) : re_frame.core.reg_fx.call(null,G__6779_6797,G__6780_6798));
var G__6799_6801 = cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_query_DASH_string;
var G__6800_6802 = ((function (G__6799_6801){
return (function (params){
var loc = window.location;
history.pushState(({}),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(params),[zframes.window_location.gen_query_string(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,cljs.core.cst$kw$title)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join(''));

zframes.routing.dispatch_context(null);

return zframes.routing.dispatch_routes(null);
});})(G__6799_6801))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6799_6801,G__6800_6802) : re_frame.core.reg_fx.call(null,G__6799_6801,G__6800_6802));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_merge_DASH_params,(function (p__6803,p__6804){
var map__6805 = p__6803;
var map__6805__$1 = (((((!((map__6805 == null))))?(((((map__6805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6805):map__6805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6805__$1,cljs.core.cst$kw$db);
var vec__6806 = p__6804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(1),null);
var pth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$fragment_DASH_path);
var nil_keys = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pth,map__6805,map__6805__$1,db,vec__6806,_,params){
return (function (acc,p__6810){
var vec__6811 = p__6810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6811,(1),null);
if((v == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(pth,map__6805,map__6805__$1,db,vec__6806,_,params))
,cljs.core.PersistentVector.EMPTY,params);
var old_params = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_params,cljs.core.cst$kw$params], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,pth,cljs.core.cst$kw$params,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_params,params], 0)),nil_keys)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_params,(function (p__6814,p__6815){
var map__6816 = p__6814;
var map__6816__$1 = (((((!((map__6816 == null))))?(((((map__6816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6816):map__6816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6816__$1,cljs.core.cst$kw$db);
var vec__6817 = p__6815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6817,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6817,(1),null);
var pth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$fragment_DASH_path);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$uri,pth,cljs.core.cst$kw$params,params], null)], null);
}));
