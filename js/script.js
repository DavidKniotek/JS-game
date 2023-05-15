const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'images/shadow_dog.png';
const spriteWidth = 575; // 6876px(img width)/12(columns)
const spriteHeight = 523; // 5230px(img height)/10(rows)

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

const animate = () => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6; // 6 frames per line, counting from 0, check image 'shadow_dog.png'
    frameX = spriteWidth * position;
    ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();