import { drawCastle, drawFlag, updateFlag } from "./castle.js";
import { drawClouds, drawSky, updateCloud, updateTime } from "./dayNight.js";
import { ctx, dpr } from "./main.js";
import { drawUi } from "./ui.js";

let lastTime = 0;

export function gameLoop(currentTime) {
    let delta = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    if (delta > 0.1) delta = 0.1;

    drawSky();
    drawClouds();
    drawFlag();
    drawCastle();
    drawUi();

    updateFlag(delta);
    updateCloud(delta);
    updateTime(delta);

    requestAnimationFrame(gameLoop);
}