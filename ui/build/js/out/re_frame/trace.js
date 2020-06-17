// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__5914){
var map__5915 = p__5914;
var map__5915__$1 = (((((!((map__5915 == null))))?(((((map__5915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5915):map__5915);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5915__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5915__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5915__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5915__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__5917_5941 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__5918_5942 = null;
var count__5919_5943 = (0);
var i__5920_5944 = (0);
while(true){
if((i__5920_5944 < count__5919_5943)){
var vec__5931_5945 = chunk__5918_5942.cljs$core$IIndexed$_nth$arity$2(null,i__5920_5944);
var k_5946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5931_5945,(0),null);
var cb_5947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5931_5945,(1),null);
try{var G__5935_5948 = cljs.core.deref(re_frame.trace.traces);
(cb_5947.cljs$core$IFn$_invoke$arity$1 ? cb_5947.cljs$core$IFn$_invoke$arity$1(G__5935_5948) : cb_5947.call(null,G__5935_5948));
}catch (e5934){var e_5949 = e5934;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5946,"while storing",cljs.core.deref(re_frame.trace.traces),e_5949], 0));
}

var G__5950 = seq__5917_5941;
var G__5951 = chunk__5918_5942;
var G__5952 = count__5919_5943;
var G__5953 = (i__5920_5944 + (1));
seq__5917_5941 = G__5950;
chunk__5918_5942 = G__5951;
count__5919_5943 = G__5952;
i__5920_5944 = G__5953;
continue;
} else {
var temp__5720__auto___5954 = cljs.core.seq(seq__5917_5941);
if(temp__5720__auto___5954){
var seq__5917_5955__$1 = temp__5720__auto___5954;
if(cljs.core.chunked_seq_QMARK_(seq__5917_5955__$1)){
var c__4550__auto___5956 = cljs.core.chunk_first(seq__5917_5955__$1);
var G__5957 = cljs.core.chunk_rest(seq__5917_5955__$1);
var G__5958 = c__4550__auto___5956;
var G__5959 = cljs.core.count(c__4550__auto___5956);
var G__5960 = (0);
seq__5917_5941 = G__5957;
chunk__5918_5942 = G__5958;
count__5919_5943 = G__5959;
i__5920_5944 = G__5960;
continue;
} else {
var vec__5936_5961 = cljs.core.first(seq__5917_5955__$1);
var k_5962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5936_5961,(0),null);
var cb_5963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5936_5961,(1),null);
try{var G__5940_5964 = cljs.core.deref(re_frame.trace.traces);
(cb_5963.cljs$core$IFn$_invoke$arity$1 ? cb_5963.cljs$core$IFn$_invoke$arity$1(G__5940_5964) : cb_5963.call(null,G__5940_5964));
}catch (e5939){var e_5965 = e5939;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5962,"while storing",cljs.core.deref(re_frame.trace.traces),e_5965], 0));
}

var G__5966 = cljs.core.next(seq__5917_5955__$1);
var G__5967 = null;
var G__5968 = (0);
var G__5969 = (0);
seq__5917_5941 = G__5966;
chunk__5918_5942 = G__5967;
count__5919_5943 = G__5968;
i__5920_5944 = G__5969;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
