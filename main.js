import { drawCastle } from "./castle.js";
import { drawSky, initClouds } from "./dayNight.js";
import { gameLoop } from "./game.js";

const PixelFont = new FontFace("PixelFont","url(assets/04B_03__.TTF");
PixelFont.load().then(f=>document.fonts.add(f));

export const canvas = document.getElementById('game-canvas');
export const ctx = canvas.getContext('2d');

export let width = 0;
export let height = 0;
export let scale = 1;
export let dpr = 1;

export const tileSize = 16;

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function resizeCanvas() {

    dpr = window.devicePixelRatio || 1;

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    scale = Math.min(height / 225, width / 400);
    scale = Math.round(scale);
    if (scale < 1) {
        scale = 1;
    }

    ctx.imageSmoothingEnabled = false;

    console.log("resize", scale);

}

let count = 0;
const maxCount = 10;

export function onImageLoad() {
    count++;
    if (count >= maxCount) {
        console.log("started");
        initClouds();
        requestAnimationFrame(gameLoop);
    }
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

export const daySheet = new Image();
daySheet.src = "assets/day_1.png";

export const cloudSheet = new Image();
cloudSheet.src = "assets/Clouds V2.png"

export const nightSheet = new Image();
nightSheet.src = "assets/night_1.png";

export const moonSheet = new Image();
moonSheet.src = "assets/night_2.png";

export const coinSheet = new Image();
coinSheet.src = "assets/GoldCoinSpinning.png";

export const castleSheet = new Image();
castleSheet.src = "assets/Castle Tileset.png";

export const flagSheet = new Image();
flagSheet.src = "assets/flag sprite-Sheet.png";

export const guiSheet = new Image();
guiSheet.src = "assets/SpriteSheet.png";

export const groundSheet = new Image();
groundSheet.src = "assets/dirt_top.png";

export const dirtSheet = new Image();
dirtSheet.src = "assets/dirt.png";


daySheet.onload = onImageLoad;
nightSheet.onload = onImageLoad;
moonSheet.onload = onImageLoad;
castleSheet.onload = onImageLoad;
flagSheet.onload = onImageLoad;
cloudSheet.onload = onImageLoad;
guiSheet.onload = onImageLoad;
coinSheet.onload = onImageLoad;
groundSheet.onload = onImageLoad;
dirtSheet.onload = onImageLoad;