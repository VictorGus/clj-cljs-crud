// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zenform.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.validators');
goog.require('clojure.string');
goog.require('re_frame.core');
zenform.model._STAR_form = (function zenform$model$_STAR_form(p__7962,path,val){
var map__7963 = p__7962;
var map__7963__$1 = (((((!((map__7963 == null))))?(((((map__7963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7963):map__7963);
var sch = map__7963__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7963__$1,cljs.core.cst$kw$type);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7963__$1,cljs.core.cst$kw$default);
var v = (((!((val == null))))?val:((cljs.core.fn_QMARK_(default$))?(default$.cljs$core$IFn$_invoke$arity$0 ? default$.cljs$core$IFn$_invoke$arity$0() : default$.call(null)):default$
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sch,cljs.core.cst$kw$fields),cljs.core.cst$kw$value,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (v,map__7963,map__7963__$1,sch,type,default$){
return (function (acc,p__7965){
var vec__7966 = p__7965;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(0),null);
var _STAR_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(1),null);
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__7969 = _STAR_sch;
var G__7970 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__7971 = v__$1;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__7969,G__7970,G__7971) : zenform.model._STAR_form.call(null,G__7969,G__7970,G__7971));
})());
});})(v,map__7963,map__7963__$1,sch,type,default$))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(sch)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sch,cljs.core.cst$kw$value,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (v,map__7963,map__7963__$1,sch,type,default$){
return (function (i,_STAR_val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__7972 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(sch),cljs.core.cst$kw$value);
var G__7973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__7974 = _STAR_val;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__7972,G__7973,G__7974) : zenform.model._STAR_form.call(null,G__7972,G__7973,G__7974));
})()], null);
});})(v,map__7963,map__7963__$1,sch,type,default$))
),v));
} else {
if(cljs.core.truth_(type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sch,cljs.core.cst$kw$value,v);
} else {
return v;

}
}
}
});
/**
 * create form model from schema and defaults
 */
zenform.model.form = (function zenform$model$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7981 = arguments.length;
var i__4731__auto___7982 = (0);
while(true){
if((i__4731__auto___7982 < len__4730__auto___7981)){
args__4736__auto__.push((arguments[i__4731__auto___7982]));

var G__7983 = (i__4731__auto___7982 + (1));
i__4731__auto___7982 = G__7983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zenform.model.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zenform.model.form.cljs$core$IFn$_invoke$arity$variadic = (function (schema,p__7977){
var vec__7978 = p__7977;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(0),null);
return zenform.model._STAR_form(schema,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

zenform.model.form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model.form.cljs$lang$applyTo = (function (seq7975){
var G__7976 = cljs.core.first(seq7975);
var seq7975__$1 = cljs.core.next(seq7975);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7976,seq7975__$1);
});

zenform.model.get_node_path = (function zenform$model$get_node_path(pth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}),cljs.core.PersistentVector.EMPTY,pth);
});
zenform.model.get_value_path = (function zenform$model$get_value_path(pth){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(zenform.model.get_node_path(pth),cljs.core.cst$kw$value);
});
zenform.model._STAR_get_value = (function zenform$model$_STAR_get_value(form){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form));
} else {
return and__4120__auto__;
}
})())){
var res = cljs.core.filterv((function (p1__7984_SHARP_){
return (!((p1__7984_SHARP_ == null)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zenform.model._STAR_get_value,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form)))));
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form))))){
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__7985){
var vec__7986 = p__7985;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7986,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7986,(1),null);
var v = (zenform.model._STAR_get_value.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR_get_value.cljs$core$IFn$_invoke$arity$1(node) : zenform.model._STAR_get_value.call(null,node));
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form);

}
}
});
/**
 * Get value for specific path; if path not passed returns form value
 */
zenform.model.get_value = (function zenform$model$get_value(var_args){
var G__7990 = arguments.length;
switch (G__7990) {
case 2:
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$2 = (function (form,path){
return zenform.model._STAR_get_value(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path)));
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$1 = (function (form){
return zenform.model._STAR_get_value(form);
});

zenform.model.get_value.cljs$lang$maxFixedArity = 2;

zenform.model.validate_node = (function zenform$model$validate_node(node,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (errs,p__7992){
var vec__7993 = p__7992;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7993,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7993,(1),null);
var temp__5718__auto__ = (function (){var G__7996 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,k,cljs.core.cst$kw$node,node], null),cfg], 0));
var G__7997 = v;
return (zenform.validators.validate.cljs$core$IFn$_invoke$arity$2 ? zenform.validators.validate.cljs$core$IFn$_invoke$arity$2(G__7996,G__7997) : zenform.validators.validate.call(null,G__7996,G__7997));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var msg = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errs,k,msg);
} else {
return errs;
}
}),null,cljs.core.cst$kw$validators.cljs$core$IFn$_invoke$arity$1(node));
});
zenform.model.fire_on_change = (function zenform$model$fire_on_change(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8018 = arguments.length;
var i__4731__auto___8019 = (0);
while(true){
if((i__4731__auto___8019 < len__4730__auto___8018)){
args__4736__auto__.push((arguments[i__4731__auto___8019]));

var G__8020 = (i__4731__auto___8019 + (1));
i__4731__auto___8019 = G__8020;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,form,p__8002){
var vec__8003 = p__8002;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8003,(0),null);
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,(function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
var temp__5720__auto___8021__$1 = cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5720__auto___8021__$1)){
var change_8022 = temp__5720__auto___8021__$1;
var ppth_8023 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (change_8022,temp__5720__auto___8021__$1,node,temp__5720__auto__,vec__8003,path){
return (function (p1__7998_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,p1__7998_SHARP_);
});})(change_8022,temp__5720__auto___8021__$1,node,temp__5720__auto__,vec__8003,path))
,path));
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (ppth_8023,change_8022,temp__5720__auto___8021__$1,node,temp__5720__auto__,vec__8003,path){
return (function zenform$model$iter__8006(s__8007){
return (new cljs.core.LazySeq(null,((function (ppth_8023,change_8022,temp__5720__auto___8021__$1,node,temp__5720__auto__,vec__8003,path){
return (function (){
var s__8007__$1 = s__8007;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__8007__$1);
if(temp__5720__auto____$2){
var s__8007__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__8007__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8007__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8009 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8008 = (0);
while(true){
if((i__8008 < size__4522__auto__)){
var vec__8010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8008);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8010,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8010,(1),null);
cljs.core.chunk_append(b__8009,(function (){var G__8013 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node),form_path,ppth_8023,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8013) : re_frame.core.dispatch.call(null,G__8013));
})());

var G__8024 = (i__8008 + (1));
i__8008 = G__8024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8009),zenform$model$iter__8006(cljs.core.chunk_rest(s__8007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8009),null);
}
} else {
var vec__8014 = cljs.core.first(s__8007__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8014,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8014,(1),null);
return cljs.core.cons((function (){var G__8017 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node),form_path,ppth_8023,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8017) : re_frame.core.dispatch.call(null,G__8017));
})(),zenform$model$iter__8006(cljs.core.rest(s__8007__$2)));
}
} else {
return null;
}
break;
}
});})(ppth_8023,change_8022,temp__5720__auto___8021__$1,node,temp__5720__auto__,vec__8003,path))
,null,null));
});})(ppth_8023,change_8022,temp__5720__auto___8021__$1,node,temp__5720__auto__,vec__8003,path))
;
return iter__4523__auto__(change_8022);
})());
} else {
}

if(cljs.core.map_QMARK_(node)){
return cljs.core.reduce_kv(((function (node,temp__5720__auto__,vec__8003,path){
return (function (path__$1,k,v){
zenform.model.fire_on_change.cljs$core$IFn$_invoke$arity$variadic(form_path,form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,k)], 0));

return path__$1;
});})(node,temp__5720__auto__,vec__8003,path))
,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.cst$kw$value):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)))))?cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node):null));
} else {
return null;
}
} else {
return null;
}
});

zenform.model.fire_on_change.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.model.fire_on_change.cljs$lang$applyTo = (function (seq7999){
var G__8000 = cljs.core.first(seq7999);
var seq7999__$1 = cljs.core.next(seq7999);
var G__8001 = cljs.core.first(seq7999__$1);
var seq7999__$2 = cljs.core.next(seq7999__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8000,G__8001,seq7999__$2);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_fire_DASH_on_DASH_change,(function (p__8025,p__8026){
var map__8027 = p__8025;
var map__8027__$1 = (((((!((map__8027 == null))))?(((((map__8027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8027):map__8027);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8027__$1,cljs.core.cst$kw$db);
var vec__8028 = p__8026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(1),null);
zenform.model.fire_on_change(form_path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path));

return cljs.core.PersistentArrayMap.EMPTY;
}));
zenform.model._STAR_on_value_set = (function zenform$model$_STAR_on_value_set(node,form_path,path){
var v = zenform.model._STAR_get_value(node);
var errs = zenform.model.validate_node(node,v);
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (v,errs){
return (function zenform$model$_STAR_on_value_set_$_iter__8032(s__8033){
return (new cljs.core.LazySeq(null,((function (v,errs){
return (function (){
var s__8033__$1 = s__8033;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8033__$1);
if(temp__5720__auto__){
var s__8033__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8033__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__8033__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__8035 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__8034 = (0);
while(true){
if((i__8034 < size__4522__auto__)){
var vec__8036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__8034);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8036,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8036,(1),null);
cljs.core.chunk_append(b__8035,(function (){var G__8039 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,form_path,path,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8039) : re_frame.core.dispatch.call(null,G__8039));
})());

var G__8045 = (i__8034 + (1));
i__8034 = G__8045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8035),zenform$model$_STAR_on_value_set_$_iter__8032(cljs.core.chunk_rest(s__8033__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8035),null);
}
} else {
var vec__8040 = cljs.core.first(s__8033__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8040,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8040,(1),null);
return cljs.core.cons((function (){var G__8043 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,form_path,path,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__8043) : re_frame.core.dispatch.call(null,G__8043));
})(),zenform$model$_STAR_on_value_set_$_iter__8032(cljs.core.rest(s__8033__$2)));
}
} else {
return null;
}
break;
}
});})(v,errs))
,null,null));
});})(v,errs))
;
return iter__4523__auto__(cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$1(node));
})());

var G__8044 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8044,cljs.core.cst$kw$errors,errs);
} else {
return G__8044;
}
});
zenform.model._STAR_on_value_set_loop = (function zenform$model$_STAR_on_value_set_loop(form,form_path,path){
var form__$1 = form;
var path__$1 = path;
while(true){
if((path__$1 == null)){
return zenform.model._STAR_on_value_set(form__$1,form_path,path__$1);
} else {
var G__8047 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form__$1,zenform.model.get_node_path(path__$1),((function (form__$1,path__$1){
return (function (p1__8046_SHARP_){
return zenform.model._STAR_on_value_set(p1__8046_SHARP_,form_path,path__$1);
});})(form__$1,path__$1))
);
var G__8048 = cljs.core.butlast(path__$1);
form__$1 = G__8047;
path__$1 = G__8048;
continue;
}
break;
}
});
zenform.model._STAR_set_value = (function zenform$model$_STAR_set_value(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8058 = arguments.length;
var i__4731__auto___8059 = (0);
while(true){
if((i__4731__auto___8059 < len__4730__auto___8058)){
args__4736__auto__.push((arguments[i__4731__auto___8059]));

var G__8060 = (i__4731__auto___8059 + (1));
i__4731__auto___8059 = G__8060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,form_path,path,value,p__8054){
var vec__8055 = p__8054;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8055,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_(value))))?null:value);
var form__$1 = cljs.core.assoc_in(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$collection))?zenform.model.get_node_path(path):zenform.model.get_value_path(path)),value__$1);
return form__$1;
});

zenform.model._STAR_set_value.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
zenform.model._STAR_set_value.cljs$lang$applyTo = (function (seq8049){
var G__8050 = cljs.core.first(seq8049);
var seq8049__$1 = cljs.core.next(seq8049);
var G__8051 = cljs.core.first(seq8049__$1);
var seq8049__$2 = cljs.core.next(seq8049__$1);
var G__8052 = cljs.core.first(seq8049__$2);
var seq8049__$3 = cljs.core.next(seq8049__$2);
var G__8053 = cljs.core.first(seq8049__$3);
var seq8049__$4 = cljs.core.next(seq8049__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8050,G__8051,G__8052,G__8053,seq8049__$4);
});

/**
 * Put value for specific path; run validations
 */
zenform.model.set_value = (function zenform$model$set_value(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8070 = arguments.length;
var i__4731__auto___8071 = (0);
while(true){
if((i__4731__auto___8071 < len__4730__auto___8070)){
args__4736__auto__.push((arguments[i__4731__auto___8071]));

var G__8072 = (i__4731__auto___8071 + (1));
i__4731__auto___8071 = G__8072;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,form_path,path,value,p__8066){
var vec__8067 = p__8066;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8067,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_(value))))?null:value);
var form__$1 = cljs.core.assoc_in(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$collection))?zenform.model.get_node_path(path):zenform.model.get_value_path(path)),value__$1);
return zenform.model._STAR_on_value_set_loop(zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic(form__$1,form_path,path,value__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0)),form_path,path);
});

zenform.model.set_value.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
zenform.model.set_value.cljs$lang$applyTo = (function (seq8061){
var G__8062 = cljs.core.first(seq8061);
var seq8061__$1 = cljs.core.next(seq8061);
var G__8063 = cljs.core.first(seq8061__$1);
var seq8061__$2 = cljs.core.next(seq8061__$1);
var G__8064 = cljs.core.first(seq8061__$2);
var seq8061__$3 = cljs.core.next(seq8061__$2);
var G__8065 = cljs.core.first(seq8061__$3);
var seq8061__$4 = cljs.core.next(seq8061__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8062,G__8063,G__8064,G__8065,seq8061__$4);
});

/**
 * Return raw form value
 */
zenform.model.raw_value = (function zenform$model$raw_value(v){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),v);
});
zenform.model.aggregate_errors = (function zenform$model$aggregate_errors(form_value,p__8073,node_index){
var map__8074 = p__8073;
var map__8074__$1 = (((((!((map__8074 == null))))?(((((map__8074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8074):map__8074);
var node = map__8074__$1;
var node_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,cljs.core.cst$kw$value);

return cljs.core.reduce_kv(((function (map__8074,map__8074__$1,node,node_value){
return (function (acc,idx,child_node){
var node_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_index,idx);
var errors = (zenform.model.eval_errors.cljs$core$IFn$_invoke$arity$3 ? zenform.model.eval_errors.cljs$core$IFn$_invoke$arity$3(form_value,child_node,node_path) : zenform.model.eval_errors.call(null,form_value,child_node,node_path));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,errors], 0));
});})(map__8074,map__8074__$1,node,node_value))
,cljs.core.PersistentArrayMap.EMPTY,node_value);
});
zenform.model.eval_errors = (function zenform$model$eval_errors(form_value,p__8076,node_index){
var map__8077 = p__8076;
var map__8077__$1 = (((((!((map__8077 == null))))?(((((map__8077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8077):map__8077);
var node = map__8077__$1;
var node_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8077__$1,cljs.core.cst$kw$type);

var child_errors = (cljs.core.truth_((function (){var fexpr__8079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,null,cljs.core.cst$kw$collection,null], null), null);
return (fexpr__8079.cljs$core$IFn$_invoke$arity$1 ? fexpr__8079.cljs$core$IFn$_invoke$arity$1(node_type) : fexpr__8079.call(null,node_type));
})())?zenform.model.aggregate_errors(form_value,node,node_index):null);
var node_errors = zenform.model.validate_node(node,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form_value,node_index));
var G__8080 = child_errors;
if(cljs.core.truth_(node_errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8080,node_index,node_errors);
} else {
return G__8080;
}
});
zenform.model.eval_form_node = (function zenform$model$eval_form_node(p__8081){
var map__8082 = p__8081;
var map__8082__$1 = (((((!((map__8082 == null))))?(((((map__8082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8082):map__8082);
var node = map__8082__$1;
var node_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8082__$1,cljs.core.cst$kw$value);
return cljs.core.reduce_kv(((function (map__8082,map__8082__$1,node,node_value){
return (function (acc,field,child_node){
var evalled_node = (zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1(child_node) : zenform.model._STAR__STAR_eval_form.call(null,child_node));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,field,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(evalled_node));
});})(map__8082,map__8082__$1,node,node_value))
,cljs.core.PersistentArrayMap.EMPTY,node_value);
});
zenform.model.eval_collection_node = (function zenform$model$eval_collection_node(p__8084){
var map__8085 = p__8084;
var map__8085__$1 = (((((!((map__8085 == null))))?(((((map__8085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8085):map__8085);
var node = map__8085__$1;
var node_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8085__$1,cljs.core.cst$kw$value);
return cljs.core.reduce_kv(((function (map__8085,map__8085__$1,node,node_value){
return (function (acc,index,child_node){
var evalled_node = (zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR__STAR_eval_form.cljs$core$IFn$_invoke$arity$1(child_node) : zenform.model._STAR__STAR_eval_form.call(null,child_node));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(evalled_node));
});})(map__8085,map__8085__$1,node,node_value))
,cljs.core.PersistentVector.EMPTY,node_value);
});
zenform.model.eval_node = (function zenform$model$eval_node(p__8087){
var map__8088 = p__8087;
var map__8088__$1 = (((((!((map__8088 == null))))?(((((map__8088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8088):map__8088);
var node = map__8088__$1;
var node_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8088__$1,cljs.core.cst$kw$type);
var G__8090 = node_type;
var G__8090__$1 = (((G__8090 instanceof cljs.core.Keyword))?G__8090.fqn:null);
switch (G__8090__$1) {
case "form":
return zenform.model.eval_form_node(node);

break;
case "collection":
return zenform.model.eval_collection_node(node);

break;
default:
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);

}
});
zenform.model.inject_errors = (function zenform$model$inject_errors(errors,form){
return cljs.core.reduce_kv((function (acc,path,errs){
var node_path = zenform.model.get_node_path(path);
return cljs.core.assoc_in(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$errors),errs);
}),form,errors);
});
zenform.model._STAR__STAR_eval_form = (function zenform$model$_STAR__STAR_eval_form(form){

var value = zenform.model.eval_node(form);
var errors = zenform.model.eval_errors(value,form,cljs.core.PersistentVector.EMPTY);
var form__$1 = zenform.model.inject_errors(errors,form);
var G__8092 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$form,form__$1], null);
if(cljs.core.truth_(errors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8092,cljs.core.cst$kw$errors,errors);
} else {
return G__8092;
}
});
zenform.model._STAR_eval_form = (function zenform$model$_STAR_eval_form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8118 = arguments.length;
var i__4731__auto___8119 = (0);
while(true){
if((i__4731__auto___8119 < len__4730__auto___8118)){
args__4736__auto__.push((arguments[i__4731__auto___8119]));

var G__8120 = (i__4731__auto___8119 + (1));
i__4731__auto___8119 = G__8120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic = (function (p__8095,p__8096){
var map__8097 = p__8095;
var map__8097__$1 = (((((!((map__8097 == null))))?(((((map__8097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8097):map__8097);
var node = map__8097__$1;
var tp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8097__$1,cljs.core.cst$kw$type);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8097__$1,cljs.core.cst$kw$value);
var vec__8098 = p__8096;
var pth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8098,(0),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$collection)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$form)))){
var map__8102 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__8097,map__8097__$1,node,tp,v,vec__8098,pth){
return (function (res,p__8103){
var vec__8104 = p__8103;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8104,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8104,(1),null);
var pth__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = pth;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),idx);
var map__8107 = zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$variadic(n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pth__$1], 0));
var map__8107__$1 = (((((!((map__8107 == null))))?(((((map__8107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8107):map__8107);
var eval_res = map__8107__$1;
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8107__$1,cljs.core.cst$kw$value);
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8107__$1,cljs.core.cst$kw$errors);
var ch_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8107__$1,cljs.core.cst$kw$form);
var res__$1 = ((cljs.core.empty_QMARK_(err))?res:cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$errors,((function (pth__$1,map__8107,map__8107__$1,eval_res,v__$1,err,ch_node,vec__8104,idx,n,map__8097,map__8097__$1,node,tp,v,vec__8098,pth){
return (function (es){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pth__$1,map__8107,map__8107__$1,eval_res,v__$1,err,ch_node,vec__8104,idx,n,map__8097,map__8097__$1,node,tp,v,vec__8098,pth){
return (function (es__$1,p__8109){
var vec__8110 = p__8109;
var err_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8110,(0),null);
var err_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8110,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(es__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),err_k),err_v);
});})(pth__$1,map__8107,map__8107__$1,eval_res,v__$1,err,ch_node,vec__8104,idx,n,map__8097,map__8097__$1,node,tp,v,vec__8098,pth))
,es,err);
});})(pth__$1,map__8107,map__8107__$1,eval_res,v__$1,err,ch_node,vec__8104,idx,n,map__8097,map__8097__$1,node,tp,v,vec__8098,pth))
));
var res__$2 = cljs.core.assoc_in(res__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$value,idx], null),ch_node);
var G__8113 = res__$2;
var G__8113__$1 = (((((!((v__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$collection))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__8113,cljs.core.cst$kw$value,cljs.core.conj,v__$1):G__8113);
if((((!((v__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$form)))){
return cljs.core.assoc_in(G__8113__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,idx], null),v__$1);
} else {
return G__8113__$1;
}
});})(map__8097,map__8097__$1,node,tp,v,vec__8098,pth))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$form))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$form,node], null),v);
var map__8102__$1 = (((((!((map__8102 == null))))?(((((map__8102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8102):map__8102);
var res = map__8102__$1;
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8102__$1,cljs.core.cst$kw$value);
var errs = zenform.model.validate_node(node,v__$1);
var G__8115 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,((function (map__8102,map__8102__$1,res,v__$1,errs,map__8097,map__8097__$1,node,tp,v,vec__8098,pth){
return (function (x){
if(cljs.core.empty_QMARK_(x)){
return null;
} else {
return x;
}
});})(map__8102,map__8102__$1,res,v__$1,errs,map__8097,map__8097__$1,node,tp,v,vec__8098,pth))
);
var G__8115__$1 = (cljs.core.truth_(errs)?cljs.core.assoc_in(G__8115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),errs):G__8115);
if(cljs.core.truth_(errs)){
return cljs.core.assoc_in(G__8115__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$errors], null),errs);
} else {
return G__8115__$1;
}
} else {
var errs = zenform.model.validate_node(node,v);
var node__$1 = (function (){var G__8116 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$touched,true);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8116,cljs.core.cst$kw$errors,errs);
} else {
return G__8116;
}
})();
var G__8117 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$form,node__$1], null);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8117,cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,errs]));
} else {
return G__8117;
}
}
});

zenform.model._STAR_eval_form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model._STAR_eval_form.cljs$lang$applyTo = (function (seq8093){
var G__8094 = cljs.core.first(seq8093);
var seq8093__$1 = cljs.core.next(seq8093);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8094,seq8093__$1);
});

zenform.model.eval_form = (function zenform$model$eval_form(form){
return zenform.model._STAR_eval_form(form);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_init,(function (db,p__8121){
var vec__8122 = p__8121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8122,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8122,(1),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8122,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8122,(3),null);
return cljs.core.assoc_in(db,form_path,zenform.model.form.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_set_DASH_value,(function (db,p__8125){
var vec__8126 = p__8125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8126,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8126,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8126,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8126,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__8126,_,form_path,path,v){
return (function (form){
return zenform.model.set_value(form,form_path,path,v);
});})(vec__8126,_,form_path,path,v))
);
}));
var G__8129_8135 = cljs.core.cst$kw$zf_SLASH_collection_DASH_indexes;
var G__8130_8136 = ((function (G__8129_8135){
return (function (db,p__8131){
var vec__8132 = p__8131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8132,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8132,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8132,(2),null);
return cljs.core.keys(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path),zenform.model.get_node_path(path))));
});})(G__8129_8135))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8129_8135,G__8130_8136) : re_frame.core.reg_sub.call(null,G__8129_8135,G__8130_8136));
var G__8137_8143 = cljs.core.cst$kw$zf_SLASH_node;
var G__8138_8144 = ((function (G__8137_8143){
return (function (db,p__8139){
var vec__8140 = p__8139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8140,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8140,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8140,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path),zenform.model.get_node_path(path));
});})(G__8137_8143))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8137_8143,G__8138_8144) : re_frame.core.reg_sub.call(null,G__8137_8143,G__8138_8144));
var G__8145_8151 = cljs.core.cst$kw$zf_SLASH_form;
var G__8146_8152 = ((function (G__8145_8151){
return (function (db,p__8147){
var vec__8148 = p__8147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8148,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8148,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path);
});})(G__8145_8151))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8145_8151,G__8146_8152) : re_frame.core.reg_sub.call(null,G__8145_8151,G__8146_8152));
var G__8153_8159 = cljs.core.cst$kw$zf_SLASH_get_DASH_value;
var G__8154_8160 = ((function (G__8153_8159){
return (function (db,p__8155){
var vec__8156 = p__8155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8156,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8156,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8156,(2),null);
var form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path);
if(cljs.core.truth_(path)){
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$2(form,path);
} else {
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$1(form);
}
});})(G__8153_8159))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__8153_8159,G__8154_8160) : re_frame.core.reg_sub.call(null,G__8153_8159,G__8154_8160));
zenform.model.add_collection_item = (function zenform$model$add_collection_item(form,form_path,path,v){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))){
var coll = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);
var idx = ((cljs.core.empty_QMARK_(coll))?(0):(cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.key,coll)) + (1)));
var sch = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(node);
var v__$1 = zenform.model._STAR_form(sch,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return zenform.model._STAR_on_value_set_loop(zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic(form,form_path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),v__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)], 0)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path)),path);
} else {
return form;
}
});
zenform.model.remove_collection_item = (function zenform$model$remove_collection_item(form,path,idx){
var node_path = zenform.model.get_node_path(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$type)))){
return zenform.model._STAR_on_value_set_loop(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$value),cljs.core.dissoc,idx),node_path,path);
} else {
return form;
}
});
zenform.model.set_collection = (function zenform$model$set_collection(form,path,v){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))){
return zenform.model.set_value(form,path,zenform.model._STAR_form(node,cljs.core.PersistentVector.EMPTY,(function (){var or__4131__auto__ = v;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node));
} else {
return form;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_add_DASH_collection_DASH_item,(function (db,p__8161){
var vec__8162 = p__8161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8162,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8162,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8162,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8162,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__8162,_,form_path,path,v){
return (function (form){
return zenform.model.add_collection_item(form,form_path,path,v);
});})(vec__8162,_,form_path,path,v))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,(function (db,p__8165){
var vec__8166 = p__8165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8166,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8166,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8166,(2),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8166,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__8166,_,form_path,path,idx){
return (function (form){
return zenform.model.remove_collection_item(form,path,idx);
});})(vec__8166,_,form_path,path,idx))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_set_DASH_collection,(function (db,p__8169){
var vec__8170 = p__8169;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8170,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8170,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8170,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8170,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__8170,_,form_path,path,v){
return (function (form){
return zenform.model.set_collection(form,path,v);
});})(vec__8170,_,form_path,path,v))
);
}));
var G__8173_8181 = cljs.core.cst$kw$zf_SLASH_collection;
var G__8174_8182 = ((function (G__8173_8181){
return (function (p__8176,_){
var vec__8177 = p__8176;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8177,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8177,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8177,(2),null);
var G__8180 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__8180) : re_frame.core.subscribe.call(null,G__8180));
});})(G__8173_8181))
;
var G__8175_8183 = ((function (G__8173_8181,G__8174_8182){
return (function (node,_){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);
});})(G__8173_8181,G__8174_8182))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__8173_8181,G__8174_8182,G__8175_8183) : re_frame.core.reg_sub.call(null,G__8173_8181,G__8174_8182,G__8175_8183));
zenform.model.get_full_path = (function zenform$model$get_full_path(form_path,path){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_update_DASH_node_DASH_schema,(function (p__8185,p__8186){
var map__8187 = p__8185;
var map__8187__$1 = (((((!((map__8187 == null))))?(((((map__8187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8187):map__8187);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8187__$1,cljs.core.cst$kw$db);
var vec__8188 = p__8186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8188,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8188,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8188,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8188,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,zenform.model.get_full_path(form_path,path),((function (map__8187,map__8187__$1,db,vec__8188,_,form_path,path,value){
return (function (p1__8184_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__8184_SHARP_,value], 0));
});})(map__8187,map__8187__$1,db,vec__8188,_,form_path,path,value))
)], null);
}));
