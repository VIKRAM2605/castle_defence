import { ctx, scale } from "./main.js";

let currentHealth = 100;
const maxHealth = 100;

export function drawHealth() {

    const boxX = 50 * scale;
    const boxY = 10 * scale;
    const boxW = 35 * scale;
    const boxH = 5 * scale;
    const radius = 1 * scale;

    ctx.fillStyle = "rgba(15, 15, 15, 0.4)";
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, radius);
    ctx.fill();

    const fillW = (currentHealth / maxHealth) * boxW;

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, fillW, boxH, radius);
    ctx.fill();
}