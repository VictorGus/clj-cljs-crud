// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv((function (p1__6567_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__6567_SHARP_)));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});
route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"*");
});
route_map.core.get_params = (function route_map$core$get_params(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6568){
var vec__6569 = p__6568;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6569,(1),null);
return cljs.core.vector_QMARK_(k);
}),node);
} else {
return null;
}
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6572){
var vec__6573 = p__6572;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6573,(1),null);
return cljs.core.vector_QMARK_(k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
var and__4120__auto__ = cljs.core.vector_QMARK_(k);
if(and__4120__auto__){
var f = cljs.core.first(k);
return (((!((f instanceof cljs.core.Keyword)))) && (cljs.core.fn_QMARK_(f)));
} else {
return and__4120__auto__;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_(node)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6576){
var vec__6577 = p__6576;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6577,(1),null);
var temp__5718__auto__ = (function (){var fexpr__6580 = cljs.core.first(k);
return (fexpr__6580.cljs$core$IFn$_invoke$arity$1 ? fexpr__6580.cljs$core$IFn$_invoke$arity$1(x) : fexpr__6580.call(null,x));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6581){
var vec__6582 = p__6581;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6582,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6582,(1),null);
return route_map.core.fn_param_QMARK_(k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(acc,node,p__6585,params,parents,wgt){
var vec__6586 = p__6585;
var seq__6587 = cljs.core.seq(vec__6586);
var first__6588 = cljs.core.first(seq__6587);
var seq__6587__$1 = cljs.core.next(seq__6587);
var x = first__6588;
var rpth = seq__6587__$1;
var pth = vec__6586;
if(cljs.core.empty_QMARK_(pth)){
if(cljs.core.truth_(node)){
if(((cljs.core.map_QMARK_(node)) && (cljs.core.contains_QMARK_(node,cljs.core.cst$kw$_DOT_)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$params,params)),cljs.core.cst$kw$match,cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,parents,cljs.core.cst$kw$match,node,cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
}
} else {
return acc;
}
} else {
var node__$1 = ((cljs.core.var_QMARK_(node))?cljs.core.deref(node):node);
var pnode = (function (){var and__4120__auto__ = cljs.core.map_QMARK_(node__$1);
if(and__4120__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,cljs.core.cst$kw$params,params);
} else {
return and__4120__auto__;
}
})();
var acc__$1 = (function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node__$1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var branch = temp__5718__auto__;
var G__6589 = acc;
var G__6590 = branch;
var G__6591 = rpth;
var G__6592 = params;
var G__6593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6594 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6589,G__6590,G__6591,G__6592,G__6593,G__6594) : route_map.core._match.call(null,G__6589,G__6590,G__6591,G__6592,G__6593,G__6594));
} else {
return acc;
}
})();
var acc__$2 = (((x instanceof cljs.core.Keyword))?acc__$1:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (node__$1,pnode,acc__$1,vec__6586,seq__6587,first__6588,seq__6587__$1,x,rpth,pth){
return (function (acc__$2,p__6595){
var vec__6596 = p__6595;
var vec__6599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6596,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6599,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6596,(1),null);
if(cljs.core.fn_QMARK_(k)){
var temp__5718__auto__ = route_map.core.match_fn_params(node__$1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__6602 = temp__5718__auto__;
var fparams = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(0),null);
var branch__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(1),null);
var G__6605 = acc__$2;
var G__6606 = branch__$1;
var G__6607 = rpth;
var G__6608 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,fparams], 0));
var G__6609 = parents;
var G__6610 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6605,G__6606,G__6607,G__6608,G__6609,G__6610) : route_map.core._match.call(null,G__6605,G__6606,G__6607,G__6608,G__6609,G__6610));
} else {
return acc__$2;
}
} else {
if(route_map.core.is_glob_QMARK_(k)){
if((cljs.core.last(pth) instanceof cljs.core.Keyword)){
var G__6611 = acc__$2;
var G__6612 = branch;
var G__6613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pth)], null);
var G__6614 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(pth)));
var G__6615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6616 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6611,G__6612,G__6613,G__6614,G__6615,G__6616) : route_map.core._match.call(null,G__6611,G__6612,G__6613,G__6614,G__6615,G__6616));
} else {
var G__6617 = acc__$2;
var G__6618 = branch;
var G__6619 = cljs.core.PersistentVector.EMPTY;
var G__6620 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pth));
var G__6621 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6622 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6617,G__6618,G__6619,G__6620,G__6621,G__6622) : route_map.core._match.call(null,G__6617,G__6618,G__6619,G__6620,G__6621,G__6622));
}
} else {
if(cljs.core.truth_((function (){var temp__5720__auto__ = cljs.core.cst$kw$route_DASH_map_SLASH_enum.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
return cljs.core.set_QMARK_(opts);
} else {
return null;
}
})())){
var opts = cljs.core.cst$kw$route_DASH_map_SLASH_enum.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.contains_QMARK_(opts,x)){
var G__6623 = acc__$2;
var G__6624 = branch;
var G__6625 = rpth;
var G__6626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6628 = (wgt + (5));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6623,G__6624,G__6625,G__6626,G__6627,G__6628) : route_map.core._match.call(null,G__6623,G__6624,G__6625,G__6626,G__6627,G__6628));
} else {
return acc__$2;
}
} else {
if(cljs.core.truth_((function (){var temp__5720__auto__ = cljs.core.cst$kw$route_DASH_map_SLASH_regexp.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(temp__5720__auto__)){
var opts = temp__5720__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(opts),java.util.regex.Pattern);
} else {
return null;
}
})())){
var opts = cljs.core.cst$kw$route_DASH_map_SLASH_regexp.cljs$core$IFn$_invoke$arity$1(branch);
if(cljs.core.truth_(cljs.core.re_find(opts,x))){
var G__6629 = acc__$2;
var G__6630 = branch;
var G__6631 = rpth;
var G__6632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6634 = (wgt + (4));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6629,G__6630,G__6631,G__6632,G__6633,G__6634) : route_map.core._match.call(null,G__6629,G__6630,G__6631,G__6632,G__6633,G__6634));
} else {
return acc__$2;
}
} else {
var G__6635 = acc__$2;
var G__6636 = branch;
var G__6637 = rpth;
var G__6638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6639 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6640 = (wgt + (2));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6635,G__6636,G__6637,G__6638,G__6639,G__6640) : route_map.core._match.call(null,G__6635,G__6636,G__6637,G__6638,G__6639,G__6640));

}
}
}
}
});})(node__$1,pnode,acc__$1,vec__6586,seq__6587,first__6588,seq__6587__$1,x,rpth,pth))
,acc__$1,route_map.core.get_params(node__$1)));
return acc__$2;
}
});
/**
 * path [:get "/your/path"] or just "/your/path"
 */
route_map.core.match = (function route_map$core$match(path,routes){
var path__$1 = ((cljs.core.vector_QMARK_(path))?(function (){var vec__6641 = path;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6641,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6641,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_map.core.pathify(url),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(meth))));
})():route_map.core.pathify(path));
var result = route_map.core._match(cljs.core.PersistentVector.EMPTY,routes,path__$1,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
return cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,result));
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__6644){
var map__6645 = p__6644;
var map__6645__$1 = (((((!((map__6645 == null))))?(((((map__6645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6645):map__6645);
var req = map__6645__$1;
var meth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645__$1,cljs.core.cst$kw$request_DASH_method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645__$1,cljs.core.cst$kw$uri);
var temp__5718__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__6647 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$route_DASH_match,match);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__6647) : h.call(null,G__6647));
} else {
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(req) : h.call(null,req));
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6648_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__6648_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first(not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6649_SHARP_){
return cljs.core.first(p1__6649_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6650_SHARP_){
var vec__6651 = p1__6650_SHARP_;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6651,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6651,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first(route_map.core.get_param(routes));
var static_paths = route_map.core.get_static_paths(routes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (params,static_paths){
return (function (p1__6654_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__6654_SHARP_);
});})(params,static_paths))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$$name.cljs$core$IFn$_invoke$arity$1(routes))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(auto_name))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(params))))));
if(path_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_found){
return (function (p1__6655_SHARP_){
var vec__6656 = ((typeof p1__6655_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6655_SHARP_,params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,p1__6655_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",auto_name))?p1__6655_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),"-",p1__6655_SHARP_].join(''))], null):(((p1__6655_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__6655_SHARP_),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,p1__6655_SHARP_),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__6655_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6655_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params),cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6655_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6656,(0),null);
var next_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6656,(1),null);
var next_routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6656,(2),null);
var next_auto_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6656,(3),null);
var G__6659 = ((cljs.core.var_QMARK_(next_routes))?cljs.core.deref(next_routes):next_routes);
var G__6660 = name;
var G__6661 = next_auto_name;
var G__6662 = next_params;
var G__6663 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join('');
return (route_map.core.find_url.cljs$core$IFn$_invoke$arity$5 ? route_map.core.find_url.cljs$core$IFn$_invoke$arity$5(G__6659,G__6660,G__6661,G__6662,G__6663) : route_map.core.find_url.call(null,G__6659,G__6660,G__6661,G__6662,G__6663));
});})(path_found))
,route_map.core.get_ways(routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var G__6665 = arguments.length;
switch (G__6665) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.cljs$core$IFn$_invoke$arity$3(routes,name,cljs.core.PersistentVector.EMPTY);
});

route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url(routes,name,"",params,"");
});

route_map.core.url.cljs$lang$maxFixedArity = 3;

