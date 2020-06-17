// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.routes.routes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$app$patient$model_SLASH_index,"patient",cljs.core.PersistentArrayMap.createAsIfByAssoc(["create",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$app$patient$crud$model_SLASH_create], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uid], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$app$patient$model_SLASH_show,"edit",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$app$patient$crud$model_SLASH_edit], null)], null)])], null);
app.routes.route_index_STAR_ = (function app$routes$route_index_STAR_(route,pth){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(route))],[cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(route,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$breadcrumb], null)),cljs.core.cst$kw$pth,pth)]),cljs.core.reduce_kv((function (acc,k,v){
if(((typeof k === 'string') || (cljs.core.vector_QMARK_(k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(function (){var G__9597 = v;
var G__9598 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pth,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,"/"], null));
return (app.routes.route_index_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.routes.route_index_STAR_.cljs$core$IFn$_invoke$arity$2(G__9597,G__9598) : app.routes.route_index_STAR_.call(null,G__9597,G__9598));
})()], 0));
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,route)], 0));
});
app.routes.route_index = app.routes.route_index_STAR_(app.routes.routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null));
