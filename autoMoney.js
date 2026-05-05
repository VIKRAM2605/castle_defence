import { ctx, scale } from "./main.js";
import { creditMoney } from "./money.js";

let currentPercentage = 0;
const maxPercentage = 100;

let currentTimer = 0;
const maxTimer = 0.1;

export function updatePercentage(delta) {
    currentTimer += delta;
    if (currentTimer >= maxTimer) {
        currentTimer = 0;
        currentPercentage += 1;
        if (currentPercentage >= maxPercentage) {
            currentPercentage = 0;
            creditMoney(1);
        }
    }
}

export function drawPercentage() {

    const boxW = 30 * scale;
    const boxH = 9 * scale;
    const boxX = 10 * scale;
    const boxY = 10 * scale;
    const radius = 1 * scale;

    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, radius);
    ctx.fill();

    const fillW = (currentPercentage / maxPercentage) * boxW;
    ctx.fillStyle = "rgba(255, 251, 251, 0.4)";
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, fillW, boxH, radius);
    ctx.fill();

    ctx.font = `${Math.round(7 * scale)}px PixelFont`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.8 * scale;
    ctx.strokeText(`${currentPercentage}%`, boxX + boxW / 2, boxY + boxH / 2);
    ctx.fillStyle = "black";
    ctx.fillText(`${currentPercentage}%`, boxX + boxW / 2, boxY + boxH / 2);

    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

}