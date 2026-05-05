import { updatePercentage } from "./autoMoney.js";
import { drawCastle, drawFlag, updateFlag } from "./castle.js";
import { drawClouds, drawSky, updateCloud, updateTime } from "./dayNight.js";
import { drawGround } from "./floor.js";
import { ctx, dpr } from "./main.js";
import { drawCoin, updateCoin } from "./money.js";
import { drawUi } from "./ui.js";

let lastTime = 0;

let isTutorial = true;

export function toggleTutorial(){
    isTutorial = !isTutorial;
}

export function gameLoop(currentTime) {
    let delta = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    if (delta > 0.1) delta = 0.1;

    drawSky();
    drawGround();
    drawClouds();
    drawFlag();
    drawCastle();
    drawUi();

    updateFlag(delta);
    updateCloud(delta);
    updateCoin(delta);

    // if (isTutorial) {

    //     requestAnimationFrame(gameLoop);
    //     return;
    // }

    updateTime(delta);
    updatePercentage(delta);

    requestAnimationFrame(gameLoop);
}