(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  }
})(function (exports) {
  "use strict";

  exports["default"] = function (obj, keymap) {
    "use strict";
    var ret = {};
    for (var key in obj) {
      if (key in keymap) {
        ret[keymap[key]] = obj[key];
      } else {
        ret[key] = obj[key];
      }
    }
    return ret;
  };
});