// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.patient.view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('app.pages');
goog.require('app.styles');
goog.require('zframes.redirect');
goog.require('app.patient.model');
goog.require('clojure.string');
app.patient.view.input_style = app.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"20px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$icon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"65px",cljs.core.cst$kw$width,"65px",cljs.core.cst$kw$margin_DASH_top,"10px",cljs.core.cst$kw$padding_DASH_right,"10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$icon$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"blue"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_record,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$text_DASH_decoration,"none",cljs.core.cst$kw$color,"black",cljs.core.cst$kw$padding,"8px 8px",cljs.core.cst$kw$margin_DASH_top,"12px",cljs.core.cst$kw$border_DASH_radius,".25rem",cljs.core.cst$kw$border,"1px solid rgba(51, 51, 51, 0.1)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_grow,"1",cljs.core.cst$kw$align_DASH_items,"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_address_DASH_value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"5px 5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"20px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$right_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$right_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_right_DASH_value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"5px 5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_record_COLON_hover,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#e6f2ff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$not_DASH_found,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"22px"], null)], null)], 0));
app.patient.view.item_view = (function app$patient$view$item_view(data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$patient_DASH_record,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/patient/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(data))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,(function (){var G__9497 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$gender], null));
switch (G__9497) {
case "male":
return "male.svg";

break;
case "female":
return "female.svg";

break;
default:
return "alien.svg";

}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$patient_DASH_info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b$patient_DASH_name,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$name], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted$pl_DASH_2,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$birthDate], null))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0423\u043B\u0438\u0446\u0430:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$patient_DASH_address_DASH_value,(function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$address,(0),cljs.core.cst$kw$line], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0413\u043E\u0440\u043E\u0434:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$patient_DASH_address_DASH_value,(function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$address,(0),cljs.core.cst$kw$city], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0420\u0430\u0439\u043E\u043D:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$patient_DASH_address_DASH_value,(function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$address,(0),cljs.core.cst$kw$state], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0421\u0442\u0440\u0430\u043D\u0430:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$patient_DASH_address_DASH_value,(function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$address,(0),cljs.core.cst$kw$country], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_flex$align_DASH_items_DASH_center$right_DASH_wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$right_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u041D\u043E\u043C\u0435\u0440 \u041E\u041C\u0421:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$patient_DASH_right_DASH_value,(function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resource,cljs.core.cst$kw$identifier], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null)], null)], null)], null);
});
app.pages.reg_subs_page(app.patient.model.index,(function (data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$wrapper$container,app.patient.view.input_style,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_flex$flex_DASH_row$w_DASH_100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flex_DASH_grow_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"\u041F\u043E\u0438\u0441\u043A...",cljs.core.cst$kw$on_DASH_change,(function (p1__9499_SHARP_){
var G__9500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_set_DASH_params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$q,p1__9499_SHARP_.target.value], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9500) : re_frame.core.dispatch.call(null,G__9500));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_outline_DASH_primary$btn_DASH_block$ml_DASH_2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__9501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,"/patient/create"], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9501) : re_frame.core.dispatch.call(null,G__9501));
})], null),"+ \u0421\u043E\u0437\u0434\u0430\u0442\u044C"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$patient_DASH_grid$w_DASH_100$ml_DASH_1,(function (){var iter__4523__auto__ = (function app$patient$view$iter__9502(s__9503){
return (new cljs.core.LazySeq(null,(function (){
var s__9503__$1 = s__9503;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9503__$1);
if(temp__5720__auto__){
var s__9503__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9503__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9503__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9505 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9504 = (0);
while(true){
if((i__9504 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9504);
cljs.core.chunk_append(b__9505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patient.view.item_view,item], null));

var G__9506 = (i__9504 + (1));
i__9504 = G__9506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9505),app$patient$view$iter__9502(cljs.core.chunk_rest(s__9503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9505),null);
}
} else {
var item = cljs.core.first(s__9503__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patient.view.item_view,item], null),app$patient$view$iter__9502(cljs.core.rest(s__9503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(data);
})()], null)], null);
}));
app.patient.view.card_style = app.styles.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_patient_DASH_card_DASH_wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"5px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_patient_DASH_card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_radius,"8px",cljs.core.cst$kw$padding_DASH_top,"15px",cljs.core.cst$kw$border,"1px solid rgba(51, 51, 51, 0.1)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_name,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$margin,"0px",cljs.core.cst$kw$font_DASH_weight,"900"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_label_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"23px",cljs.core.cst$kw$font_DASH_size,"15px"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$margin_DASH_bottom,"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_info_DASH_item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_radius,"8px",cljs.core.cst$kw$margin_DASH_right,"5px",cljs.core.cst$kw$border,"1px solid rgba(51, 51, 51, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$card_DASH_title,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$font_DASH_size,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$card_DASH_title_DASH_inner,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_weight,"600",cljs.core.cst$kw$margin_DASH_bottom,"0px",cljs.core.cst$kw$font_DASH_size,"16px"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$patient_DASH_title_DASH_wrapper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$delete_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"30px",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$cursor,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$edit_DASH_button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,(0),cljs.core.cst$kw$top,(0),cljs.core.cst$kw$cursor,"pointer"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$icon,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"65px",cljs.core.cst$kw$width,"65px",cljs.core.cst$kw$margin_DASH_top,"10px",cljs.core.cst$kw$padding_DASH_right,"10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$icon$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,"blue"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$info_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$info_DASH_header,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"22px",cljs.core.cst$kw$font_DASH_weight,"900",cljs.core.cst$kw$color,"white",cljs.core.cst$kw$background_DASH_color,"#0069d9"], null)], null)], 0));
app.patient.view.patient_card = (function app$patient$view$patient_card(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_patient_DASH_card_DASH_wrapper,app.patient.view.card_style,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_patient_DASH_card$col_DASH_md_DASH_6$offset_DASH_md_DASH_3,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$patient_DASH_title_DASH_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,(function (){var G__9507 = cljs.core.cst$kw$gender.cljs$core$IFn$_invoke$arity$1(data);
switch (G__9507) {
case "male":
return "male.svg";

break;
case "female":
return "female.svg";

break;
default:
return "alien.svg";

}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$patient_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"text-muted",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"0px"], null)], null),cljs.core.cst$kw$birthDate.cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$edit_DASH_button$mt_DASH_2$mr_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_edit,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#0069d9"], null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__9508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zframes$redirect_SLASH_redirect,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(window.location.href,/#/))),"/edit"].join('')], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9508) : re_frame.core.dispatch.call(null,G__9508));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$delete_DASH_button$mt_DASH_2$mr_DASH_2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fas$fa_DASH_trash_DASH_alt,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#0069d9"], null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__9509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$patient$model_SLASH_delete_DASH_patient], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__9509) : re_frame.core.dispatch.call(null,G__9509));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_header$info_DASH_header,"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0435"], null),(cljs.core.truth_(cljs.core.cst$kw$address.cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$card_DASH_title,"\u0410\u0434\u0440\u0435\u0441"], null),(function (){var iter__4523__auto__ = (function app$patient$view$patient_card_$_iter__9510(s__9511){
return (new cljs.core.LazySeq(null,(function (){
var s__9511__$1 = s__9511;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9511__$1);
if(temp__5720__auto__){
var s__9511__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9511__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9511__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9513 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9512 = (0);
while(true){
if((i__9512 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9512);
cljs.core.chunk_append(b__9513,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_flex$flex_DASH_wrap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0421\u0442\u0440\u0430\u043D\u0430: "], null),cljs.core.cst$kw$country.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0413\u043E\u0440\u043E\u0434: "], null),cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441: "], null),cljs.core.cst$kw$postalCode.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0420\u0430\u0439\u043E\u043D: "], null),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0423\u043B\u0438\u0446\u0430: "], null),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(item)], null)], null));

var G__9515 = (i__9512 + (1));
i__9512 = G__9515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9513),app$patient$view$patient_card_$_iter__9510(cljs.core.chunk_rest(s__9511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9513),null);
}
} else {
var item = cljs.core.first(s__9511__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_flex$flex_DASH_wrap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0421\u0442\u0440\u0430\u043D\u0430: "], null),cljs.core.cst$kw$country.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0413\u043E\u0440\u043E\u0434: "], null),cljs.core.cst$kw$city.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441: "], null),cljs.core.cst$kw$postalCode.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0420\u0430\u0439\u043E\u043D: "], null),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u0423\u043B\u0438\u0446\u0430: "], null),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(item)], null)], null),app$patient$view$patient_card_$_iter__9510(cljs.core.rest(s__9511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$address.cljs$core$IFn$_invoke$arity$1(data));
})()], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$card_DASH_title,"\u0418\u043D\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u044B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$info_DASH_item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text_DASH_muted,"\u041E\u041C\u0421: "], null),cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(data)], null)], null)], null)], null)], null);
});
app.pages.reg_subs_page(app.patient.model.show_index,(function (data,params){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$aria_DASH_label,"breadcrumb"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol$breadcrumb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$breadcrumb_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"\u041F\u0430\u0446\u0438\u0435\u043D\u0442\u044B"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$breadcrumb_DASH_item$active,cljs.core.cst$kw$uid.cljs$core$IFn$_invoke$arity$1(params)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.patient.view.patient_card,data], null)], null);
}));
