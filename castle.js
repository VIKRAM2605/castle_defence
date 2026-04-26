import { castleSheet, ctx, flagSheet, scale, tileSize } from "./main.js";
import { castle, flag } from "./sprites.js";

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

    sprite = castle["grass"];

    ctx.drawImage(
        castleSheet,
        sprite.x, sprite.y, sprite.w, sprite.h,
        1 * scale, 58 * scale, sprite.w * scale, sprite.h * scale
    );


    sprite = castle["castle"];

    ctx.drawImage(
        castleSheet,
        sprite.x, sprite.y, sprite.w, sprite.h,
        x - 5 * scale, 50 * scale, sprite.w * scale, sprite.h * scale
    );
}


let currentFlag1Frame = 0;
let currentFlag2Frame = 6;
let flag1Timer = 0;
let flag2Timer = 0;
const maxFlagFrame = 13;
const flagFrameTimer = 0.1;

export function updateFlag(delta) {
    flag1Timer += delta;
    flag2Timer += delta;

    if(flag1Timer >= flagFrameTimer){
        flag1Timer = 0;
        currentFlag1Frame = (currentFlag1Frame + 1) % maxFlagFrame;
    }
    if(flag2Timer >= flagFrameTimer){
        flag2Timer = 0;
        currentFlag2Frame = (currentFlag2Frame + 1) % maxFlagFrame;
    }
}

export function drawFlag() {
    let sprite = flag["frames"][currentFlag1Frame];

    ctx.drawImage(
        flagSheet,
        (sprite.col - 1) * tileSize, (sprite.row - 1) * tileSize, tileSize, tileSize,
        32 * scale, 35 * scale, tileSize * scale, tileSize * scale
    );

    sprite = flag["frames"][currentFlag2Frame];

    ctx.drawImage(
        flagSheet,
        (sprite.col - 1) * tileSize, (sprite.row - 1) * tileSize, tileSize, tileSize,
        80 * scale, 35 * scale, tileSize * scale, tileSize * scale
    );
}