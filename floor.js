import { ctx, dirtSheet, groundSheet, height, scale, tileSize, width } from "./main.js";
import { dirt } from "./sprites.js";

export function drawGround() {
    const tilesNeedX = Math.ceil(width / (scale * tileSize));
    const tilesNeedY = Math.ceil((height * 0.7) / (scale * tileSize));

    const groundSprite = dirt["ground"];
    const dirtSprite = dirt["dirt"];

    let y = scale * 80;

    for (let i = 0; i < tilesNeedY; i++) {
        let x = 0;
        for (let j = 0; j < tilesNeedX; j++) {
            if (i === 0) {
                ctx.drawImage(
                    groundSheet,
                    groundSprite.x, groundSprite.y, groundSprite.w, groundSprite.h,
                    x, y, tileSize * scale, tileSize * scale
                );
            }
            else {
                ctx.drawImage(
                    dirtSheet,
                    dirtSprite.x, dirtSprite.y, dirtSprite.w, dirtSprite.h,
                    x, y, tileSize * scale, tileSize * scale
                );
            }

            x += tileSize * scale;

        }
        y += tileSize * scale;
    }
}