import { coinSheet, ctx, scale } from "./main.js";
import { coin } from "./sprites.js";

let currentFrame = 0;
const maxFrame = coin["frames"].length;
let currentTimer = 0;
const maxFrameTimer = 0.05;

const tileSize = 8;

let currentAmount = 10;

const floatingText = [];

export function updateCoin(delta) {
    currentTimer += delta;
    if (currentTimer >= maxFrameTimer) {
        currentTimer = 0;
        currentFrame = (currentFrame + 1) % maxFrame;
    }

    for (let i = 0; i < floatingText.length; i++) {
        const ft = floatingText[i];
        ft.y -= 5 * scale * delta;
        ft.life -= delta;
        ft.alpha = Math.max(0, ft.life / 1.5);
        if (ft.life <= 0) {
            floatingText.splice(i, 1);
            i--;
        }
    }
}

export function drawCoin() {
    const sprite = coin["frames"][currentFrame];

    const coinX = 10 * scale;
    const coinY = 20 * scale;
    const coinW = tileSize * scale;
    const coinH = tileSize * scale;

    const xOffset = 2 * scale;

    ctx.drawImage(
        coinSheet,
        (sprite.col - 1) * tileSize, (sprite.row - 1) * tileSize, tileSize, tileSize,
        coinX, coinY, coinW, coinH
    );

    ctx.font = `${Math.round(7 * scale)}px PixelFont`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.strokeStyle = "black";
    ctx.strokeText(`${currentAmount}`, coinX + coinW + xOffset, coinY + coinH / 2);
    ctx.fillStyle = "white";
    ctx.fillText(`${currentAmount}`, coinX + coinW + xOffset, coinY + coinH / 2);
    ctx.textBaseline = "alphabetic";

    for (let i = 0; i < floatingText.length; i++) {
        const ft = floatingText[i];
        const symbol = ft.type === "credit" ? "+" : "-";
        const color = ft.type === "credit" ? "lime" : "red";

        ctx.globalAlpha = ft.alpha;
        ctx.font = `${5 * scale}px PixelFont`;
        ctx.textAlign = "left";
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.8 * scale;
        ctx.strokeText(`${symbol}${ft.amount}`, ft.x, ft.y);
        ctx.fillStyle = "black";
        ctx.fillText(`${symbol}${ft.amount}`, ft.x, ft.y);
        ctx.globalAlpha = 1;
    }

}

export function creditMoney(amount) {
    currentAmount += amount;
    animateMoneyInOut("credit", amount);
}

export function animateMoneyInOut(type, amount) {
    floatingText.push({
        type: type,
        amount: amount,
        x: 20 * scale,
        y: 30 * scale,
        alpha: 1,
        life: 1.5
    });
}

