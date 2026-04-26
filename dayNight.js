import { ctx, daySheet, height, nightSheet, scale, width } from "./main.js";

let time = "day";

export function drawSky() {
    let sheet;
    let imageWidth, imageHeight;
    if (time === "day") {
        sheet = daySheet;
        imageWidth = 576;
        imageHeight = 324;
    } else {
        sheet = nightSheet;
        imageWidth = 576;
        imageHeight = 324;
    }

    ctx.drawImage(
        sheet,
        0, 0, imageWidth, imageHeight,
        0, 0, width, height
    );
}