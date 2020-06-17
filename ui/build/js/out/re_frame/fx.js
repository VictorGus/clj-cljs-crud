// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__6079 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__6080 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__6080;

try{try{var seq__6081 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6082 = null;
var count__6083 = (0);
var i__6084 = (0);
while(true){
if((i__6084 < count__6083)){
var vec__6091 = chunk__6082.cljs$core$IIndexed$_nth$arity$2(null,i__6084);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6091,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6091,(1),null);
var temp__5718__auto___6113 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6113)){
var effect_fn_6114 = temp__5718__auto___6113;
(effect_fn_6114.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6114.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6114.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6115 = seq__6081;
var G__6116 = chunk__6082;
var G__6117 = count__6083;
var G__6118 = (i__6084 + (1));
seq__6081 = G__6115;
chunk__6082 = G__6116;
count__6083 = G__6117;
i__6084 = G__6118;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6081);
if(temp__5720__auto__){
var seq__6081__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6081__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6081__$1);
var G__6119 = cljs.core.chunk_rest(seq__6081__$1);
var G__6120 = c__4550__auto__;
var G__6121 = cljs.core.count(c__4550__auto__);
var G__6122 = (0);
seq__6081 = G__6119;
chunk__6082 = G__6120;
count__6083 = G__6121;
i__6084 = G__6122;
continue;
} else {
var vec__6094 = cljs.core.first(seq__6081__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6094,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6094,(1),null);
var temp__5718__auto___6123 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6123)){
var effect_fn_6124 = temp__5718__auto___6123;
(effect_fn_6124.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6124.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6124.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6125 = cljs.core.next(seq__6081__$1);
var G__6126 = null;
var G__6127 = (0);
var G__6128 = (0);
seq__6081 = G__6125;
chunk__6082 = G__6126;
count__6083 = G__6127;
i__6084 = G__6128;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__5892__auto___6129 = re_frame.interop.now();
var duration__5893__auto___6130 = (end__5892__auto___6129 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__5893__auto___6130,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__5892__auto___6129);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__6079;
}} else {
var seq__6097 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6098 = null;
var count__6099 = (0);
var i__6100 = (0);
while(true){
if((i__6100 < count__6099)){
var vec__6107 = chunk__6098.cljs$core$IIndexed$_nth$arity$2(null,i__6100);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6107,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6107,(1),null);
var temp__5718__auto___6131 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6131)){
var effect_fn_6132 = temp__5718__auto___6131;
(effect_fn_6132.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6132.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6132.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6133 = seq__6097;
var G__6134 = chunk__6098;
var G__6135 = count__6099;
var G__6136 = (i__6100 + (1));
seq__6097 = G__6133;
chunk__6098 = G__6134;
count__6099 = G__6135;
i__6100 = G__6136;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6097);
if(temp__5720__auto__){
var seq__6097__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6097__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6097__$1);
var G__6137 = cljs.core.chunk_rest(seq__6097__$1);
var G__6138 = c__4550__auto__;
var G__6139 = cljs.core.count(c__4550__auto__);
var G__6140 = (0);
seq__6097 = G__6137;
chunk__6098 = G__6138;
count__6099 = G__6139;
i__6100 = G__6140;
continue;
} else {
var vec__6110 = cljs.core.first(seq__6097__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6110,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6110,(1),null);
var temp__5718__auto___6141 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6141)){
var effect_fn_6142 = temp__5718__auto___6141;
(effect_fn_6142.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6142.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6142.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6143 = cljs.core.next(seq__6097__$1);
var G__6144 = null;
var G__6145 = (0);
var G__6146 = (0);
seq__6097 = G__6143;
chunk__6098 = G__6144;
count__6099 = G__6145;
i__6100 = G__6146;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__6147 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6148 = null;
var count__6149 = (0);
var i__6150 = (0);
while(true){
if((i__6150 < count__6149)){
var map__6155 = chunk__6148.cljs$core$IIndexed$_nth$arity$2(null,i__6150);
var map__6155__$1 = (((((!((map__6155 == null))))?(((((map__6155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6155):map__6155);
var effect = map__6155__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6155__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6155__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6147,chunk__6148,count__6149,i__6150,map__6155,map__6155__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6147,chunk__6148,count__6149,i__6150,map__6155,map__6155__$1,effect,ms,dispatch))
,ms);
}


var G__6159 = seq__6147;
var G__6160 = chunk__6148;
var G__6161 = count__6149;
var G__6162 = (i__6150 + (1));
seq__6147 = G__6159;
chunk__6148 = G__6160;
count__6149 = G__6161;
i__6150 = G__6162;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6147);
if(temp__5720__auto__){
var seq__6147__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6147__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6147__$1);
var G__6163 = cljs.core.chunk_rest(seq__6147__$1);
var G__6164 = c__4550__auto__;
var G__6165 = cljs.core.count(c__4550__auto__);
var G__6166 = (0);
seq__6147 = G__6163;
chunk__6148 = G__6164;
count__6149 = G__6165;
i__6150 = G__6166;
continue;
} else {
var map__6157 = cljs.core.first(seq__6147__$1);
var map__6157__$1 = (((((!((map__6157 == null))))?(((((map__6157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6157):map__6157);
var effect = map__6157__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6157__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6157__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6147,chunk__6148,count__6149,i__6150,map__6157,map__6157__$1,effect,ms,dispatch,seq__6147__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6147,chunk__6148,count__6149,i__6150,map__6157,map__6157__$1,effect,ms,dispatch,seq__6147__$1,temp__5720__auto__))
,ms);
}


var G__6167 = cljs.core.next(seq__6147__$1);
var G__6168 = null;
var G__6169 = (0);
var G__6170 = (0);
seq__6147 = G__6167;
chunk__6148 = G__6168;
count__6149 = G__6169;
i__6150 = G__6170;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__6171 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6172 = null;
var count__6173 = (0);
var i__6174 = (0);
while(true){
if((i__6174 < count__6173)){
var event = chunk__6172.cljs$core$IIndexed$_nth$arity$2(null,i__6174);
re_frame.router.dispatch(event);


var G__6175 = seq__6171;
var G__6176 = chunk__6172;
var G__6177 = count__6173;
var G__6178 = (i__6174 + (1));
seq__6171 = G__6175;
chunk__6172 = G__6176;
count__6173 = G__6177;
i__6174 = G__6178;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6171);
if(temp__5720__auto__){
var seq__6171__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6171__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6171__$1);
var G__6179 = cljs.core.chunk_rest(seq__6171__$1);
var G__6180 = c__4550__auto__;
var G__6181 = cljs.core.count(c__4550__auto__);
var G__6182 = (0);
seq__6171 = G__6179;
chunk__6172 = G__6180;
count__6173 = G__6181;
i__6174 = G__6182;
continue;
} else {
var event = cljs.core.first(seq__6171__$1);
re_frame.router.dispatch(event);


var G__6183 = cljs.core.next(seq__6171__$1);
var G__6184 = null;
var G__6185 = (0);
var G__6186 = (0);
seq__6171 = G__6183;
chunk__6172 = G__6184;
count__6173 = G__6185;
i__6174 = G__6186;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__6187 = cljs.core.seq(value);
var chunk__6188 = null;
var count__6189 = (0);
var i__6190 = (0);
while(true){
if((i__6190 < count__6189)){
var event = chunk__6188.cljs$core$IIndexed$_nth$arity$2(null,i__6190);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6191 = seq__6187;
var G__6192 = chunk__6188;
var G__6193 = count__6189;
var G__6194 = (i__6190 + (1));
seq__6187 = G__6191;
chunk__6188 = G__6192;
count__6189 = G__6193;
i__6190 = G__6194;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6187);
if(temp__5720__auto__){
var seq__6187__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6187__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6187__$1);
var G__6195 = cljs.core.chunk_rest(seq__6187__$1);
var G__6196 = c__4550__auto__;
var G__6197 = cljs.core.count(c__4550__auto__);
var G__6198 = (0);
seq__6187 = G__6195;
chunk__6188 = G__6196;
count__6189 = G__6197;
i__6190 = G__6198;
continue;
} else {
var event = cljs.core.first(seq__6187__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6199 = cljs.core.next(seq__6187__$1);
var G__6200 = null;
var G__6201 = (0);
var G__6202 = (0);
seq__6187 = G__6199;
chunk__6188 = G__6200;
count__6189 = G__6201;
i__6190 = G__6202;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
