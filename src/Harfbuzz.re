type hb_face;

type hb_shape = {
  glyphId: int,
  cluster: int,
};

type hb_shape_result = array(hb_shape);

external hb_new_face: string => result(hb_face, string) = "rehb_new_face";
external hb_shape: (hb_face, string) => hb_shape_result = "rehb_shape";
