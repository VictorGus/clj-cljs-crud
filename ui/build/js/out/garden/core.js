// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9482 = arguments.length;
var i__4731__auto___9483 = (0);
while(true){
if((i__4731__auto___9483 < len__4730__auto___9482)){
args__4736__auto__.push((arguments[i__4731__auto___9483]));

var G__9484 = (i__4731__auto___9483 + (1));
i__4731__auto___9483 = G__9484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.css.cljs$lang$applyTo = (function (seq9481){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9481));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9486 = arguments.length;
var i__4731__auto___9487 = (0);
while(true){
if((i__4731__auto___9487 < len__4730__auto___9486)){
args__4736__auto__.push((arguments[i__4731__auto___9487]));

var G__9488 = (i__4731__auto___9487 + (1));
i__4731__auto___9487 = G__9488;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.style.cljs$lang$applyTo = (function (seq9485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9485));
});

