export default function(obj, keymap) {
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
