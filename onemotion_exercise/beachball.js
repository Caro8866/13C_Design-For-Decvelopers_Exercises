"use strict";
import { timeline, animate } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { translateX: 400, rotate: 200 }, { duration: 2 }],
  [".ball", { scale: 0 }, { duration: 0.5 }, { at: 1.8 }],
];

timeline(sequence);
