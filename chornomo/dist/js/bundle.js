!function t(a,i,l){function c(o,r){if(!i[o]){if(!a[o]){var e="function"==typeof require&&require;if(!r&&e)return e(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var n=i[o]={exports:{}};a[o][0].call(n.exports,function(r){var e=a[o][1][r];return c(e||r)},n,n.exports,t,a,i,l)}return i[o].exports}for(var s="function"==typeof require&&require,r=0;r<l.length;r++)c(l[r]);return c}({1:[function(r,e,o){"use strict";$(document).ready(function(){var r,e,o;$('.nav a[href^="#"]').on("click",function(r){r.preventDefault(),$("#main--nav").removeClass("show--main-nav");var e=$(this).attr("href"),o=$(e).offset().top;$("body, html").animate({scrollTop:o},700)}),$(function(){var e=$(".back-to-top");e.on("click",function(){$("html, body").animate({scrollTop:0},500)}),$(window).on("scroll",function(){var r=$(this);r.height()<r.scrollTop()?e.is(":visible")||e.show():e.hide()})}),r=$("#nav--btn"),e=$("#main--nav"),o=$(".overlay"),r.on("click",function(){e.addClass("show--main-nav"),o.addClass("overlay--active"),$("body").addClass("body-fixed"),$(this).attr("disabled",!0)}),o.on("click",function(){e.removeClass("show--main-nav"),o.removeClass("overlay--active"),$("body").removeClass("body-fixed"),r.removeAttr("disabled")}),$(function(){setInterval(function(r){$(".hero__gallery--track .hero__gallery--img").first().appendTo($(".hero__gallery--track"))},5e3),$(".hero__gallery--next--btn").on("click",function(){$(".hero__gallery--track .hero__gallery--img").first().appendTo($(".hero__gallery--track"))}),$(".hero__gallery--prev--btn").on("click",function(){$(".hero__gallery--track .hero__gallery--img").last().prependTo($(".hero__gallery--track"))})})})},{}]},{},[1]);