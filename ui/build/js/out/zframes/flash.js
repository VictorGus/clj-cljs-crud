// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zframes.flash');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.styles');
goog.require('re_frame.core');
zframes.flash.gen_uuid = (function zframes$flash$gen_uuid(){
return cljs.core.random_uuid();
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$flash_SLASH_flash,(function (db,p__9520){
var vec__9521 = p__9520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,(0),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,(1),null);
var data_or_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,(2),null);
var maybe_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,(3),null);
var map__9524 = (function (){var or__4131__auto__ = maybe_params;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return data_or_params;
}
})();
var map__9524__$1 = (((((!((map__9524 == null))))?(((((map__9524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9524):map__9524);
var opts = map__9524__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9524__$1,cljs.core.cst$kw$id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(zframes.flash.gen_uuid())));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9524__$1,cljs.core.cst$kw$msg);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9524__$1,cljs.core.cst$kw$time,(8000));
setTimeout(((function (map__9524,map__9524__$1,opts,id,msg,time,vec__9521,_,status,data_or_params,maybe_params){
return (function (){
var G__9526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$flash_SLASH_remove_DASH_flash,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9526) : re_frame.core.dispatch.call(null,G__9526));
});})(map__9524,map__9524__$1,opts,id,msg,time,vec__9521,_,status,data_or_params,maybe_params))
,time);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash,id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$st,status,cljs.core.cst$kw$msg,msg], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$flash_SLASH_add_DASH_flash,(function (db,p__9527){
var vec__9528 = p__9527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9528,(0),null);
var map__9531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9528,(1),null);
var map__9531__$1 = (((((!((map__9531 == null))))?(((((map__9531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9531):map__9531);
var opts = map__9531__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9531__$1,cljs.core.cst$kw$status);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9531__$1,cljs.core.cst$kw$id);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9531__$1,cljs.core.cst$kw$msg);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flash,id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$st,status,cljs.core.cst$kw$msg,msg], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zframes$flash_SLASH_remove_DASH_flash,(function (db,p__9533){
var vec__9534 = p__9533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9534,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9534,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,cljs.core.cst$kw$flash,cljs.core.dissoc,id);
}));
var G__9537_9544 = cljs.core.cst$kw$flash_SLASH_flash;
var G__9538_9545 = ((function (G__9537_9544){
return (function (p__9539){
var vec__9540 = p__9539;
var seq__9541 = cljs.core.seq(vec__9540);
var first__9542 = cljs.core.first(seq__9541);
var seq__9541__$1 = cljs.core.next(seq__9541);
var status = first__9542;
var args = seq__9541__$1;
var G__9543 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.cst$kw$zframes$flash_SLASH_flash,status,args);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9543) : re_frame.core.dispatch.call(null,G__9543));
});})(G__9537_9544))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__9537_9544,G__9538_9545) : re_frame.core.reg_fx.call(null,G__9537_9544,G__9538_9545));
var seq__9546_9566 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$success,cljs.core.cst$kw$danger,cljs.core.cst$kw$warning,cljs.core.cst$kw$primary,cljs.core.cst$kw$light,cljs.core.cst$kw$dark,cljs.core.cst$kw$secondary,cljs.core.cst$kw$info], null));
var chunk__9547_9567 = null;
var count__9548_9568 = (0);
var i__9549_9569 = (0);
while(true){
if((i__9549_9569 < count__9548_9568)){
var type_9570 = chunk__9547_9567.cljs$core$IIndexed$_nth$arity$2(null,i__9549_9569);
var ev_9571 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("flash",cljs.core.name(type_9570));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ev_9571,((function (seq__9546_9566,chunk__9547_9567,count__9548_9568,i__9549_9569,ev_9571,type_9570){
return (function (_,p__9558){
var vec__9559 = p__9558;
var seq__9560 = cljs.core.seq(vec__9559);
var first__9561 = cljs.core.first(seq__9560);
var seq__9560__$1 = cljs.core.next(seq__9560);
var ___$1 = first__9561;
var args = seq__9560__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flash_SLASH_flash,cljs.core.vec(cljs.core.cons(type_9570,args))], null);
});})(seq__9546_9566,chunk__9547_9567,count__9548_9568,i__9549_9569,ev_9571,type_9570))
);


var G__9572 = seq__9546_9566;
var G__9573 = chunk__9547_9567;
var G__9574 = count__9548_9568;
var G__9575 = (i__9549_9569 + (1));
seq__9546_9566 = G__9572;
chunk__9547_9567 = G__9573;
count__9548_9568 = G__9574;
i__9549_9569 = G__9575;
continue;
} else {
var temp__5720__auto___9576 = cljs.core.seq(seq__9546_9566);
if(temp__5720__auto___9576){
var seq__9546_9577__$1 = temp__5720__auto___9576;
if(cljs.core.chunked_seq_QMARK_(seq__9546_9577__$1)){
var c__4550__auto___9578 = cljs.core.chunk_first(seq__9546_9577__$1);
var G__9579 = cljs.core.chunk_rest(seq__9546_9577__$1);
var G__9580 = c__4550__auto___9578;
var G__9581 = cljs.core.count(c__4550__auto___9578);
var G__9582 = (0);
seq__9546_9566 = G__9579;
chunk__9547_9567 = G__9580;
count__9548_9568 = G__9581;
i__9549_9569 = G__9582;
continue;
} else {
var type_9583 = cljs.core.first(seq__9546_9577__$1);
var ev_9584 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("flash",cljs.core.name(type_9583));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ev_9584,((function (seq__9546_9566,chunk__9547_9567,count__9548_9568,i__9549_9569,ev_9584,type_9583,seq__9546_9577__$1,temp__5720__auto___9576){
return (function (_,p__9562){
var vec__9563 = p__9562;
var seq__9564 = cljs.core.seq(vec__9563);
var first__9565 = cljs.core.first(seq__9564);
var seq__9564__$1 = cljs.core.next(seq__9564);
var ___$1 = first__9565;
var args = seq__9564__$1;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flash_SLASH_flash,cljs.core.vec(cljs.core.cons(type_9583,args))], null);
});})(seq__9546_9566,chunk__9547_9567,count__9548_9568,i__9549_9569,ev_9584,type_9583,seq__9546_9577__$1,temp__5720__auto___9576))
);


var G__9585 = cljs.core.next(seq__9546_9577__$1);
var G__9586 = null;
var G__9587 = (0);
var G__9588 = (0);
seq__9546_9566 = G__9585;
chunk__9547_9567 = G__9586;
count__9548_9568 = G__9587;
i__9549_9569 = G__9588;
continue;
}
} else {
}
}
break;
}
var G__9589_9591 = cljs.core.cst$kw$zframes$flash_SLASH_flashes;
var G__9590_9592 = ((function (G__9589_9591){
return (function (db,_){
return cljs.core.cst$kw$flash.cljs$core$IFn$_invoke$arity$1(db);
});})(G__9589_9591))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__9589_9591,G__9590_9592) : re_frame.core.reg_sub.call(null,G__9589_9591,G__9590_9592));
zframes.flash.flash_msg = (function zframes$flash$flash_msg(id,f){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$alert$alert_DASH_dismissible,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["alert-",cljs.core.name(cljs.core.cst$kw$st.cljs$core$IFn$_invoke$arity$1(f))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$close,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__9593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$flash_SLASH_remove_DASH_flash,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9593) : re_frame.core.dispatch.call(null,G__9593));
})], null),"\u00D7"], null),cljs.core.cst$kw$msg.cljs$core$IFn$_invoke$arity$1(f)], null);
});
zframes.flash.styles = app.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flashes,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"20px",cljs.core.cst$kw$right,"20px",cljs.core.cst$kw$max_DASH_width,"500px",cljs.core.cst$kw$z_DASH_index,(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"20px"], null)], null)], null)], 0));
zframes.flash.flashes = (function zframes$flash$flashes(){
var flashes = (function (){var G__9594 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$flash_SLASH_flashes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__9594) : re_frame.core.subscribe.call(null,G__9594));
})();
return ((function (flashes){
return (function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flashes], null),cljs.core.reduce_kv(((function (flashes){
return (function (acc,k,f){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,zframes.flash.flash_msg(k,f));
});})(flashes))
,cljs.core.PersistentVector.EMPTY,cljs.core.deref(flashes)));
});
;})(flashes))
});
