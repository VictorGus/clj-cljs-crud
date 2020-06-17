// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7013 = arguments.length;
var i__4731__auto___7014 = (0);
while(true){
if((i__4731__auto___7014 < len__4730__auto___7013)){
args__4736__auto__.push((arguments[i__4731__auto___7014]));

var G__7015 = (i__4731__auto___7014 + (1));
i__4731__auto___7014 = G__7015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.format.cljs$lang$applyTo = (function (seq7011){
var G__7012 = cljs.core.first(seq7011);
var seq7011__$1 = cljs.core.next(seq7011);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7012,seq7011__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

var G__7016_7022 = garden.util.to_str;
var G__7017_7023 = "_";
var G__7018_7024 = ((function (G__7016_7022,G__7017_7023){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__7016_7022,G__7017_7023))
;
goog.object.set(G__7016_7022,G__7017_7023,G__7018_7024);

goog.object.set(garden.util.ToString,"null",true);

var G__7019_7025 = garden.util.to_str;
var G__7020_7026 = "null";
var G__7021_7027 = ((function (G__7019_7025,G__7020_7026){
return (function (this$){
return "";
});})(G__7019_7025,G__7020_7026))
;
goog.object.set(G__7019_7025,G__7020_7026,G__7021_7027);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7029 = arguments.length;
var i__4731__auto___7030 = (0);
while(true){
if((i__4731__auto___7030 < len__4730__auto___7029)){
args__4736__auto__.push((arguments[i__4731__auto___7030]));

var G__7031 = (i__4731__auto___7030 + (1));
i__4731__auto___7030 = G__7031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.as_str.cljs$lang$applyTo = (function (seq7028){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7028));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7038 = arguments.length;
var i__4731__auto___7039 = (0);
while(true){
if((i__4731__auto___7039 < len__4730__auto___7038)){
args__4736__auto__.push((arguments[i__4731__auto___7039]));

var G__7040 = (i__4731__auto___7039 + (1));
i__4731__auto___7039 = G__7040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__7034){
var vec__7035 = p__7034;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7035,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.string__GT_int.cljs$lang$applyTo = (function (seq7032){
var G__7033 = cljs.core.first(seq7032);
var seq7032__$1 = cljs.core.next(seq7032);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7033,seq7032__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7047 = arguments.length;
var i__4731__auto___7048 = (0);
while(true){
if((i__4731__auto___7048 < len__4730__auto___7047)){
args__4736__auto__.push((arguments[i__4731__auto___7048]));

var G__7049 = (i__4731__auto___7048 + (1));
i__4731__auto___7048 = G__7049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__7043){
var vec__7044 = p__7043;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7044,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.int__GT_string.cljs$lang$applyTo = (function (seq7041){
var G__7042 = cljs.core.first(seq7041);
var seq7041__$1 = cljs.core.next(seq7041);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7042,seq7041__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function garden$util$comma_join_$_iter__7050(s__7051){
return (new cljs.core.LazySeq(null,(function (){
var s__7051__$1 = s__7051;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__7051__$1);
if(temp__5720__auto__){
var s__7051__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7051__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__7051__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__7053 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__7052 = (0);
while(true){
if((i__7052 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__7052);
cljs.core.chunk_append(b__7053,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__7054 = (i__7052 + (1));
i__7052 = G__7054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7053),garden$util$comma_join_$_iter__7050(cljs.core.chunk_rest(s__7051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7053),null);
}
} else {
var x = cljs.core.first(s__7051__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__7050(cljs.core.rest(s__7051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media)));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes)));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import)));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__7055 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7055,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7055,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7061 = arguments.length;
var i__4731__auto___7062 = (0);
while(true){
if((i__4731__auto___7062 < len__4730__auto___7061)){
args__4736__auto__.push((arguments[i__4731__auto___7062]));

var G__7063 = (i__4731__auto___7062 + (1));
i__4731__auto___7062 = G__7063;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
garden.util.average.cljs$lang$applyTo = (function (seq7058){
var G__7059 = cljs.core.first(seq7058);
var seq7058__$1 = cljs.core.next(seq7058);
var G__7060 = cljs.core.first(seq7058__$1);
var seq7058__$2 = cljs.core.next(seq7058__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7059,G__7060,seq7058__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___7065 = arguments.length;
var i__4731__auto___7066 = (0);
while(true){
if((i__4731__auto___7066 < len__4730__auto___7065)){
args__4736__auto__.push((arguments[i__4731__auto___7066]));

var G__7067 = (i__4731__auto___7066 + (1));
i__4731__auto___7066 = G__7067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5718__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5718__auto__){
var rst = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__7068 = (i - (1));
var G__7069 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__7068;
v_seqs__$2 = G__7069;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.cartesian_product.cljs$lang$applyTo = (function (seq7064){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7064));
});

