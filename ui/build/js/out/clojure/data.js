// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__6210){
var vec__6211 = p__6210;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6211,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__6214 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6214,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6214,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6214,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__6218 = arguments.length;
switch (G__6218) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__6220_6244 = clojure.data.equality_partition;
var G__6221_6245 = "null";
var G__6222_6246 = ((function (G__6220_6244,G__6221_6245){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6220_6244,G__6221_6245))
;
goog.object.set(G__6220_6244,G__6221_6245,G__6222_6246);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__6223_6247 = clojure.data.equality_partition;
var G__6224_6248 = "string";
var G__6225_6249 = ((function (G__6223_6247,G__6224_6248){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6223_6247,G__6224_6248))
;
goog.object.set(G__6223_6247,G__6224_6248,G__6225_6249);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__6226_6250 = clojure.data.equality_partition;
var G__6227_6251 = "number";
var G__6228_6252 = ((function (G__6226_6250,G__6227_6251){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6226_6250,G__6227_6251))
;
goog.object.set(G__6226_6250,G__6227_6251,G__6228_6252);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__6229_6253 = clojure.data.equality_partition;
var G__6230_6254 = "array";
var G__6231_6255 = ((function (G__6229_6253,G__6230_6254){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__6229_6253,G__6230_6254))
;
goog.object.set(G__6229_6253,G__6230_6254,G__6231_6255);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__6232_6256 = clojure.data.equality_partition;
var G__6233_6257 = "function";
var G__6234_6258 = ((function (G__6232_6256,G__6233_6257){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6232_6256,G__6233_6257))
;
goog.object.set(G__6232_6256,G__6233_6257,G__6234_6258);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__6235_6259 = clojure.data.equality_partition;
var G__6236_6260 = "boolean";
var G__6237_6261 = ((function (G__6235_6259,G__6236_6260){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6235_6259,G__6236_6260))
;
goog.object.set(G__6235_6259,G__6236_6260,G__6237_6261);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__6238_6262 = clojure.data.equality_partition;
var G__6239_6263 = "_";
var G__6240_6264 = ((function (G__6238_6262,G__6239_6263){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__6238_6262,G__6239_6263))
;
goog.object.set(G__6238_6262,G__6239_6263,G__6240_6264);
goog.object.set(clojure.data.Diff,"null",true);

var G__6265_6289 = clojure.data.diff_similar;
var G__6266_6290 = "null";
var G__6267_6291 = ((function (G__6265_6289,G__6266_6290){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6265_6289,G__6266_6290))
;
goog.object.set(G__6265_6289,G__6266_6290,G__6267_6291);

goog.object.set(clojure.data.Diff,"string",true);

var G__6268_6292 = clojure.data.diff_similar;
var G__6269_6293 = "string";
var G__6270_6294 = ((function (G__6268_6292,G__6269_6293){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6268_6292,G__6269_6293))
;
goog.object.set(G__6268_6292,G__6269_6293,G__6270_6294);

goog.object.set(clojure.data.Diff,"number",true);

var G__6271_6295 = clojure.data.diff_similar;
var G__6272_6296 = "number";
var G__6273_6297 = ((function (G__6271_6295,G__6272_6296){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6271_6295,G__6272_6296))
;
goog.object.set(G__6271_6295,G__6272_6296,G__6273_6297);

goog.object.set(clojure.data.Diff,"array",true);

var G__6274_6298 = clojure.data.diff_similar;
var G__6275_6299 = "array";
var G__6276_6300 = ((function (G__6274_6298,G__6275_6299){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__6274_6298,G__6275_6299))
;
goog.object.set(G__6274_6298,G__6275_6299,G__6276_6300);

goog.object.set(clojure.data.Diff,"function",true);

var G__6277_6301 = clojure.data.diff_similar;
var G__6278_6302 = "function";
var G__6279_6303 = ((function (G__6277_6301,G__6278_6302){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6277_6301,G__6278_6302))
;
goog.object.set(G__6277_6301,G__6278_6302,G__6279_6303);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__6280_6304 = clojure.data.diff_similar;
var G__6281_6305 = "boolean";
var G__6282_6306 = ((function (G__6280_6304,G__6281_6305){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6280_6304,G__6281_6305))
;
goog.object.set(G__6280_6304,G__6281_6305,G__6282_6306);

goog.object.set(clojure.data.Diff,"_",true);

var G__6283_6307 = clojure.data.diff_similar;
var G__6284_6308 = "_";
var G__6285_6309 = ((function (G__6283_6307,G__6284_6308){
return (function (a,b){
var fexpr__6287 = (function (){var G__6288 = clojure.data.equality_partition(a);
var G__6288__$1 = (((G__6288 instanceof cljs.core.Keyword))?G__6288.fqn:null);
switch (G__6288__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6288__$1)].join('')));

}
})();
return (fexpr__6287.cljs$core$IFn$_invoke$arity$2 ? fexpr__6287.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__6287.call(null,a,b));
});})(G__6283_6307,G__6284_6308))
;
goog.object.set(G__6283_6307,G__6284_6308,G__6285_6309);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
