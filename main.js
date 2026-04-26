import { drawCastle } from "./castle.js";
import { drawSky } from "./dayNight.js";

export const canvas = document.getElementById('game-canvas');
export const ctx = canvas.getContext('2d');

export let width = 0;
export let height = 0;
export let scale = 1;

export const tileSize = 16;

export function resizeCanvas() {

    const dpr = window.devicePixelRatio || 1;

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    scale = height / 225;

    ctx.imageSmoothingEnabled = false;

}

let count = 0;
const maxCount = 3;

export function onImageLoad() {
    count++;
    if (count >= maxCount) {
        console.log("started");
        drawSky();
        drawCastle();
    }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();


export const daySheet = new Image();
daySheet.src = "assets/day_1.png";

export const nightSheet = new Image();
nightSheet.src = "assets/night_1.png";

export const castleSheet = new Image();
castleSheet.src = "assets/Castle Tileset.png";

daySheet.onload = onImageLoad;
nightSheet.onload = onImageLoad;
castleSheet.onload = onImageLoad;