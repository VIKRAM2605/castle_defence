import { castleSheet, ctx, scale } from "./main.js";
import { castle } from "./sprites.js";

export function drawCastle() {
    let sprite = castle["tower"];

    ctx.drawImage(
        castleSheet,
        sprite.x, sprite.y, sprite.w, sprite.h,
        10 * scale, 30 * scale, sprite.w * scale, sprite.h * scale
    );

    sprite = castle["room"];

    let x = 0;

    ctx.drawImage(
        castleSheet,
        sprite.x, sprite.y, sprite.w, sprite.h,
        x * scale, 60 * scale, sprite.w * scale, sprite.h * scale
    );

    x += sprite.w * scale;


    sprite = castle["castle"];

    ctx.drawImage(
        castleSheet,
        sprite.x, sprite.y, sprite.w, sprite.h,
        x - 5 * scale, 50 * scale, sprite.w * scale, sprite.h * scale
    );
}