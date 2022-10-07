"use strict";

const ball = document.querySelector("#ball");

const fourPointKeyFrames = [{ transform: "translate(42vw,0vh)" }, { transform: "translate(85vw,20vw)" }, { transform: "translate(42vw,41vw)" }, { transform: "translate(0vw,20vw)" }];

fourPointKeyFrames.push(fourPointKeyFrames[0]);
const fourPointProperties = {
  duration: 3000,
  iterations: Infinity,
};

const fourPointAnimation = ball.animate(fourPointKeyFrames, fourPointProperties);
