"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".box", { translateY: 600 }, { duration: 2, delay: stagger(0.2) });
