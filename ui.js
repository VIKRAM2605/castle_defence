import { drawPercentage } from "./autoMoney.js";
import { drawHealth } from "./castleHealth.js";
import { hour } from "./dayNight.js";
import { ctx, guiSheet, scale } from "./main.js";
import { drawCoin } from "./money.js";
import { gui } from "./sprites.js";

export function drawUi() {
    drawHour();
    drawCoin();
    drawPercentage();
    drawHealth();
}

export function drawHour() {

    const sprite = gui["bigButton"];

    const btnX = 40 * scale;
    const btnY = 40 * scale;
    const btnW = 25 * scale;
    const btnH = 10 * scale;

    ctx.drawImage(
        guiSheet,
        sprite.x, sprite.y, sprite.w, sprite.h,
        btnX, btnY, btnW, btnH
    );

    const text = `${hour}:00`;
    ctx.font = `${Math.round(7 * scale)}px PixelFont`;

    const textX = btnX + btnW / 2;
    const textY = btnY + btnH / 2;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 1.2 * scale;
    ctx.strokeStyle = "black";
    ctx.strokeText(text, textX, textY);
    ctx.fillStyle = "white";
    ctx.fillText(text, textX, textY);

    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
}