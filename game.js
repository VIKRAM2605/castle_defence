import { drawCastle, drawFlag, updateFlag } from "./castle.js";
import { drawClouds, drawSky, updateCloud } from "./dayNight.js";
import { ctx, dpr } from "./main.js";

let lastTime = 0;

export function gameLoop(currentTime) {
    let delta = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    if (delta > 0.1) delta = 0.1;

    drawSky();
    drawClouds();
    drawFlag();
    drawCastle();

    updateFlag(delta);
    updateCloud(delta);

    requestAnimationFrame(gameLoop);
}