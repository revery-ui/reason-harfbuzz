type hb_face;

type hb_shape = {
  glyphId: int,
  cluster: int,
};

external hb_new_face: string => result(hb_face, string) = "rehb_new_face";
external hb_shape: (hb_face, string) => array(hb_shape) = "rehb_shape";
