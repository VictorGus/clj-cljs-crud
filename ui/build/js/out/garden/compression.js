// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('garden.compression');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
garden.compression.token_fn = (function garden$compression$token_fn(p__8917){
var vec__8918 = p__8917;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8918,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8918,(1),null);
return ((function (vec__8918,tag,re){
return (function (s){
var temp__5720__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var chunk = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$chunk,chunk,cljs.core.cst$kw$size,cljs.core.count(chunk)], null);
} else {
return null;
}
});
;})(vec__8918,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
garden.compression.tokenizer = (function garden$compression$tokenizer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8923 = arguments.length;
var i__4731__auto___8924 = (0);
while(true){
if((i__4731__auto___8924 < len__4730__auto___8923)){
args__4736__auto__.push((arguments[i__4731__auto___8924]));

var G__8925 = (i__4731__auto___8924 + (1));
i__4731__auto___8924 = G__8925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some(((function (fs){
return (function (p1__8921_SHARP_){
return (p1__8921_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8921_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__8921_SHARP_.call(null,s));
});})(fs))
,fs);
});
;})(fs))
});

garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.compression.tokenizer.cljs$lang$applyTo = (function (seq8922){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8922));
});

/**
 * Tokenizer used during stylesheet compression.
 */
garden.compression.stylesheet_tokenizer = garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_brace,/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_brace,/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r_DASH_paren,/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l_DASH_paren,/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comma,/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$colon,/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$semicolon,/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$space_PLUS_,/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$white_DASH_space_PLUS_,/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$any,/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
garden.compression.compress_stylesheet = (function garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5718__auto__ = (garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1 ? garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1(s1) : garden.compression.stylesheet_tokenizer.call(null,s1));
if(cljs.core.truth_(temp__5718__auto__)){
var map__8926 = temp__5718__auto__;
var map__8926__$1 = (((((!((map__8926 == null))))?(((((map__8926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8926):map__8926);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8926__$1,cljs.core.cst$kw$tag);
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8926__$1,cljs.core.cst$kw$chunk);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8926__$1,cljs.core.cst$kw$size);
var G__8930 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__8931 = [s2,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__8929 = tag;
var G__8929__$1 = (((G__8929 instanceof cljs.core.Keyword))?G__8929.fqn:null);
switch (G__8929__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__8930;
s2 = G__8931;
continue;
} else {
return s2;
}
break;
}
});
