/**
 * Created by justinmccraw on 7/19/14.
 */
(function() {
  "use strict";

  var transition = "";

  /**
   * Finds the transitionend event to use for this browser
   * Slightly modified from webinista: http://stackoverflow.com/a/9090128/1472477
   */
  function checkTransitionSupport() {
    var transitions = {
      "transition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd",
      "OTransition": "otransitionend",
      "MozTransition": "transitionend"
    };
    var el = document.createElement("div");

    for (var i in transitions) {
      if (transitions.hasOwnProperty(i) && el.style[i] !== void 0) {
        transition = transitions[i];
        break;
      }
    }

    if (transition === "") {
      transition = "nosupport";
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
    checkTransitionSupport();

    // add event support for the transition ending
    if (transition === "nosupport") {
      document.body.addEventListener(transition, revealSignature, false);
    }
    else {
      setTimeout(function() {
        document.getElementsByTagName("main")[0].className = "signature";
      }, 1200);
    }
  }

  init();
})();