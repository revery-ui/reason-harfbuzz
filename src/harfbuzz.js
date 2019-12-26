// Provides: rehb_new_face
function rehb_new_face(
  _fontName /*: string */,
) {
  return undefined;
}

// Provides: rehb_shape
// Requires: caml_to_js_string
function rehb_shape(_face /*: fk_face */, text /*: string */) {
  var str = caml_to_js_string(text);
  var ret = str.split("").map(function mapper(_char) {
      return [/* <jsoo_empty> */ 0, /* glyphId */ 0, /* cluster */ 0];
    });

  // Adding the leading `0` to make it a jsoo compatible array
  ret.unshift(0);
  return ret;
}
