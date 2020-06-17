// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.layout');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('app.styles');
goog.require('zframes.flash');
app.layout.layout_style = app.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_layout,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$flashes,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"20px",cljs.core.cst$kw$right,"20px",cljs.core.cst$kw$max_DASH_width,"500px",cljs.core.cst$kw$z_DASH_index,(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"20px"], null)], null)], null)], 0));
app.layout.layout = (function app$layout$layout(page){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$h_DASH_100,app.layout.layout_style,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zframes.flash.flashes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,page], null)], null);
});
