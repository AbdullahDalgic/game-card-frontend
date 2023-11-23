"use strict"; // Start of use strict

// instance of fuction while Document ready event
jQuery(document).on("ready", function () {
  (function ($) {
    //thmVideoPopup();

    var dot = document.querySelectorAll(".column .dot");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css("left", `${$(dot[i]).data("size")}%`);
    }
    var dot = document.querySelectorAll(".column .dot-shadow");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css("width", `calc(${$(dot[i]).data("size")}% + 8px)`);
    }

    var dot = document.querySelectorAll(".area-3 .left .boxs > .box");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css("height", `${$(dot[i]).data("size")}px`);
    }

    var dot = document.querySelectorAll(".area-3 .right .boxs > .box");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css("width", `${$(dot[i]).data("size")}px`);
    }

    var dot = document.querySelectorAll(".area-3 .right  .size-width");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css("width", `${$(dot[i]).data("width")}px`);
    }
    var dot = document.querySelectorAll(".area-3 .right .size-left");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css("left", `${$(dot[i]).data("left")}px`);
    }
    var dot = document.querySelectorAll(".calc-left");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css(
        "left",
        `${$(dot[i]).data("left") + $(dot[i]).data("calc")}px`
      );
    }
    var dot = document.querySelectorAll(".calc-width");
    for (var i = 0; i < dot.length; i++) {
      $(dot[i]).css(
        "width",
        `${$(dot[i]).data("width") + $(dot[i]).data("calc")}px`
      );
    }
  })(jQuery);
});
