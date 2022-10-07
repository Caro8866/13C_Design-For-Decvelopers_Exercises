"use strict";
import { animate } from "https://cdn.skypack.dev/motion";

animate(".ball", { translateX: 380 }, { duration: 2 });
animate(".ball", { rotate: 200 }, { duration: 2 });
animate(".ball", { scale: 0 }, { duration: 0.5, delay: 1.8 });
