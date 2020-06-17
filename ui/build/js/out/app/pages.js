// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.pages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
if((typeof app !== 'undefined') && (typeof app.pages !== 'undefined') && (typeof app.pages.pages !== 'undefined')){
} else {
app.pages.pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
var G__7908_7914 = cljs.core.cst$kw$pages_SLASH_get_DASH_in;
var G__7909_7915 = ((function (G__7908_7914){
return (function (db,p__7910){
var vec__7911 = p__7910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7911,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7911,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__7908_7914))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7908_7914,G__7909_7915) : re_frame.core.reg_sub.call(null,G__7908_7914,G__7909_7915));
var G__7916_7922 = cljs.core.cst$kw$pages_SLASH_data;
var G__7917_7923 = ((function (G__7916_7922){
return (function (db,p__7918){
var vec__7919 = p__7918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7919,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7919,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,pid);
});})(G__7916_7922))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7916_7922,G__7917_7923) : re_frame.core.reg_sub.call(null,G__7916_7922,G__7917_7923));
app.pages.reg_page = (function app$pages$reg_page(key,page){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.pages,cljs.core.assoc,key,page);
});
app.pages.subscribed_page = (function app$pages$subscribed_page(page_idx,view){
return (function (params){
var m = (function (){var G__7924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_idx], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__7924) : re_frame.core.subscribe.call(null,G__7924));
})();
return ((function (m){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(m),params], null);
});
;})(m))
});
});
/**
 * register subscribed page under keyword for routing
 */
app.pages.reg_subs_page = (function app$pages$reg_subs_page(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7932 = arguments.length;
var i__4731__auto___7933 = (0);
while(true){
if((i__4731__auto___7933 < len__4730__auto___7932)){
args__4736__auto__.push((arguments[i__4731__auto___7933]));

var G__7934 = (i__4731__auto___7933 + (1));
i__4731__auto___7933 = G__7934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return app.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

app.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,p__7928){
var vec__7929 = p__7928;
var layout_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7929,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.pages,cljs.core.assoc,key,app.pages.subscribed_page(key,f));
});

app.pages.reg_subs_page.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
app.pages.reg_subs_page.cljs$lang$applyTo = (function (seq7925){
var G__7926 = cljs.core.first(seq7925);
var seq7925__$1 = cljs.core.next(seq7925);
var G__7927 = cljs.core.first(seq7925__$1);
var seq7925__$2 = cljs.core.next(seq7925__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7926,G__7927,seq7925__$2);
});

var G__7935_7937 = cljs.core.cst$kw$config;
var G__7936_7938 = ((function (G__7935_7937){
return (function (db,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
});})(G__7935_7937))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__7935_7937,G__7936_7938) : re_frame.core.reg_sub.call(null,G__7935_7937,G__7936_7938));
