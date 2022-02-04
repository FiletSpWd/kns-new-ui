import i_base from "./images/i_base.png";
import i from "./images/i.png";
import i1 from "./images/i1.png";
import i2 from "./images/i2.png";
import i3 from "./images/i3.png";
import i4 from "./images/i4.png";
import i5 from "./images/i5.png";
import i6 from "./images/i6.png";
import i7 from "./images/i7.png";
import i8 from "./images/i8.png";
import i9 from "./images/i9.png";
import e1 from "./images/e1.png";
import e2 from "./images/e2.png";

const SHAPE = {
  base: [i_base],
  eyes: [i],
  tails: [i1, i2, i3],
  hear: [i4, i5],
  brash: [i7, i6],
  stuff: [i9, i8],
};

const EMPTY_VARIANTS = [i7, i9];

const ELEMENTS_ON_BODY = {
  head: { elements: [e1, e2], name: "Морда" },
  hear: { elements: [e1], name: "Уши" },
  belly: { elements: [e1, e1], name: "Грудь" },
  main: { elements: [e2, e2], name: "Грива" },
  font_paw: { elements: [e1, e2, e1, e2], name: "Передние лапы", double: true },
  back_paw: { elements: [e1, e2, e1, e2], name: "Задние лапы", double: true },
  body: {
    elements: [e1, e2, e1, e2, e1, e2, e1, e2, e1, e2, e1, e2],
    name: "Тело",
  },
  under_body: { elements: [e2, e1, e2, e1, e2], name: "Живот" },
  tail: { elements: [e1, e2, e1, e2, e1, e2, e1, e2], name: "Хвост" },
};

export { SHAPE, EMPTY_VARIANTS, ELEMENTS_ON_BODY };
