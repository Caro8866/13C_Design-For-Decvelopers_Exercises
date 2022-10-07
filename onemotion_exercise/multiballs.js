"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".ball", { translateY: -200 }, { duration: 2, delay: stagger(0.2), repeat: Infinity, direction: "alternate" });
