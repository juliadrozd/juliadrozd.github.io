!function i(o,r,l){function c(a,e){if(!r[a]){if(!o[a]){var t="function"==typeof require&&require;if(!e&&t)return t(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var n=r[a]={exports:{}};o[a][0].call(n.exports,function(e){var t=o[a][1][e];return c(t||e)},n,n.exports,i,o,r,l)}return r[a].exports}for(var s="function"==typeof require&&require,e=0;e<l.length;e++)c(l[e]);return c}({1:[function(e,t,a){"use strict";$(document).ready(function(){var e,t,a;function n(a,e,t,n){if(a){var i=$("#clear-button");i.is(":visible")||(i.show(),i.on("click",function(){$("#search-term").val(""),$(".highlighted").removeClass("highlighted"),i.hide()}));e=e||"body";var o=new RegExp("("+a+")","gi"),r=0,l={doHighlight:function(a,n){if(3===a.nodeType){if(a.nodeValue.match(o)){r++;var e=document.createElement("span");e.innerHTML=a.nodeValue.replace(o,"<span class='"+t+"'>$1</span>"),a.parentNode.replaceChild(e,a)}}else 1===a.nodeType&&a.childNodes&&!/(style|script)/i.test(a.tagName)&&$.each(a.childNodes,function(e,t){l.doHighlight(a.childNodes[e],n)})}};return n&&$("."+t).each(function(e,t){var a=$(this).parent();$(this).contents().unwrap(),a.get(0).normalize()}),$.each($(e).children(),function(e,t){l.doHighlight(this,a)}),r}return!1}function i(e){return/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}$('.nav a[href^="#"]').on("click",function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top;$("body, html").animate({scrollTop:a},700)}),$(function(){var t=$(".back-to-top");t.on("click",function(){$("html, body").animate({scrollTop:0},500)}),$(window).on("scroll",function(){var e=$(this);e.height()<e.scrollTop()?t.is(":visible")||t.show():t.hide()})}),e=$("#menu-btn"),t=$("nav"),a=$(".overlay"),e.on("click",function(){t.addClass("nav--active"),a.addClass("overlay--active"),$("body").addClass("body-fixed"),$(this).attr("disabled",!0)}),a.on("click",function(){t.removeClass("nav--active"),a.removeClass("overlay--active"),$("body").removeClass("body-fixed"),e.removeAttr("disabled")}),$(function(){var n=$(".projects__btn-list [data-category]"),i=$(".projects__content [data-filter]");n.on("click",function(e){e.preventDefault();var t=$(this);n.removeClass("active"),n.removeClass("projects__btn--active"),t.addClass("active"),t.addClass("projects__btn--active");var a=t.attr("data-category");"all"==a?i.removeClass("is-animated").fadeOut().promise().done(function(){i.addClass("is-animated").fadeIn()}):i.removeClass("is-animated").fadeOut().promise().done(function(){i.filter('[data-filter = "'+a+'"]').addClass("is-animated").fadeIn()})})}),$(document).ready(function(){$("#search-button").on("click",function(e){e.preventDefault(),n($("#search-term").val(),"body","highlighted",!0)||alert("No results found")}),$(".nav__search--wrap").on("submit",function(e){e.preventDefault(),n($("#search-term").val(),"body","highlighted",!0)||alert("No results found")})}),$(function(){$(".hero__gallery--next--btn").on("click",function(){$(".hero__gallery--prev--btn").fadeIn(300),$(".hero__gallery--track .hero__gallery--img").first().appendTo($(".hero__gallery--track"))}),$(".hero__gallery--prev--btn").on("click",function(){$(".hero__gallery--track .hero__gallery--img").last().prependTo($(".hero__gallery--track"))})}),$(function(){$("#sendbtn").on("click",function(e){e.preventDefault();var t=$("#email").val();i(t)||$("#email").attr("placeholder","Ops! This email is invalid..."),i(t)&&(setTimeout(function(){$("#email").val("Processing...")},1e3),setTimeout(function(){$("#inviteform").submit(function(){$.ajax({type:"POST",url:"save.php",data:"email="+$("#email").val(),success:function(){$("#email").val("Thank you! We will message you")}})})},1100))})})})},{}]},{},[1]);