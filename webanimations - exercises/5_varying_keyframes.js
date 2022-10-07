"use strict";

const stageGbcrObj = document.querySelector("#stage").getBoundingClientRect();
const ballGbcrObj = document.querySelector("#ball").getBoundingClientRect();

const centerX = (stageGbcrObj.width - ballGbcrObj.width) / 2;
const rightX = stageGbcrObj.width - ballGbcrObj.width;
const centerY = (stageGbcrObj.height - ballGbcrObj.height) / 2;
const bottomY = stageGbcrObj.height - ballGbcrObj.height;

console.log(centerX, centerY, rightX, bottomY);

const fourPointKeyFrames = [{ transform: `translate(${centerX}px,0vh)` }, { transform: `translate(${rightX}px, ${centerY}px)` }, { transform: `translate(${centerX}px, ${bottomY}px)` }, { transform: `translate(0vw,${centerY}px)` }];

fourPointKeyFrames.push(fourPointKeyFrames[0]);
const fourPointProperties = {
  duration: 3000,
  iterations: Infinity,
};

const fourPointAnimation = ball.animate(fourPointKeyFrames, fourPointProperties);
