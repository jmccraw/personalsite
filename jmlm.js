/**
 * Created by justinmccraw on 7/19/14.
 */
(function() {
  "use strict";

  var animation = "";

  /**
   * Finds the animationend event to use for this browser
   * Slightly modified from webinista: http://stackoverflow.com/a/9090128/1472477
   */
  function checkAnimationSupport() {
    var animations = {
      "WebkitAnimation": "webkitAnimationEnd",
      "OAnimation": "oanimationend",
      "animation": "animationend",
      "MozAnimation": "mozAnimationEnd"
    };
    var el = document.createElement("div");

    for (var a in animations) {
      if (animations.hasOwnProperty(a) && el.style[a] !== void 0) {
        animation = animations[a];
        break;
      }
    }

    if (animation === "") {
      animation = "nosupport";
    }
  }

  /**
   * Reveal the signature after the flashing stops
   */
  function revealSignature() {
    document.getElementsByTagName("main")[0].className = "signature";
  }

  /**
   * Initialize the JavaScript that needs it
   */
  function init() {
    checkAnimationSupport();

    // add event support for the transition ending
    if (animation !== "nosupport") {
      document.body.addEventListener(animation, revealSignature, false);
    }
    else {
      setTimeout(function() {
        document.getElementsByTagName("main")[0].className = "signature";
      }, 1200);
    }
  }

  init();
})();