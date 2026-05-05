import { cloudSheet, ctx, daySheet, height, moonSheet, nightSheet, randomInt, scale, tileSize, width } from "./main.js";
import { cloudSprites } from "./sprites.js";

let time = "day";

export const clouds = [];

let cloudTimer = 0;
const spawnCloudTimer = 1.5;

export let hour = 8;
let moonBrightness = 0;

export function initClouds() {
    for (let i = 0; i < 6; i++) {
        randomCloudSpawner(randomInt(0, width));
    }
}

export function randomCloudSpawner(startX) {
    let randomIndex;

    randomIndex = randomInt(0, cloudSprites.length - 1);

    let sprite = cloudSprites[randomIndex];

    const x = startX ?? width + 150 * scale;
    const yOffset = randomInt(5 * scale, 20 * scale);
    const y = yOffset;
    const sizeScale = 0.5 + Math.random() * 1.5;
    const speed = randomInt(30, 60);

    clouds.push({
        time: time,
        sprite: sprite,
        sizeScale: sizeScale,
        speed: speed,
        x: x,
        y: y,
    });
}

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

    // ctx.filter = `brightness(${moonBrightness})`;
    ctx.globalAlpha = moonBrightness;
    ctx.drawImage(
        moonSheet,
        133, 116, 25, 25,
        width - 25 * scale - 10 * scale, 7 * scale, 25 * scale, 25 * scale
    );
    // ctx.filter = "none";
    ctx.globalAlpha = 1;

}

export function updateCloud(delta) {
    cloudTimer += delta;
    if (cloudTimer > spawnCloudTimer) {
        cloudTimer = 0;
        randomCloudSpawner();
    }

    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];

        cloud.x -= delta * cloud.speed * scale;

        if (cloud.x + 200 * scale < 0) {
            clouds.splice(i, 1);
            i--;
        }
    }
}

let currentTimer = 0;
const maxTimer = 2;

export function updateTime(delta) {
    currentTimer += delta;
    if (currentTimer >= maxTimer) {
        currentTimer = 0;
        hour += 1;
        moonBrightness = 0.05
        if (hour > 24) hour = 0;

        if (hour >= 6 && hour < 18) {
            time = "day";
            moonBrightness = 0;
        }
        else {
            time = "night";

            const nightHour = hour >=18 ? hour - 18 : hour + 6;
            moonBrightness = Math.sin((nightHour / 12) * Math.PI);
        }
    }
}

export function drawClouds() {
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];

        const cloudW = cloud.sprite.w * scale * cloud.sizeScale;
        const cloudH = (cloud.sprite.h / cloud.sprite.w) * cloudW;

        ctx.globalAlpha = 0.85;
        ctx.filter = time === "night" ? "brightness(0.2)" : "none";
        ctx.drawImage(
            cloudSheet,
            cloud.sprite.x, cloud.sprite.y, cloud.sprite.w, cloud.sprite.h,
            cloud.x, cloud.y, cloudW, cloudH
        );
        ctx.filter = "none";
        ctx.globalAlpha = 1;
    }
}