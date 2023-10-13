const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const player = new Player();

let bullets = [];

// background image
let bg = new Image();
bg.src = "./images/backgroundSpace_01.1.png";

function loop() {
    c.clearRect(0, 0, 500, 500);

    c.drawImage(bg, 0, 0, canvas.width, canvas.height);

    player.update();
    for(let i = 0; i < bullets.length; i++) {
        bullets[i].update();
    }

    requestAnimationFrame(loop);
}
loop();


document.addEventListener("keydown", (event) => {
    if(event.code === "ArrowUp") player.velocity.y = -1;
    if(event.code === "ArrowDown") player.velocity.y = 1;
    if(event.code === "ArrowLeft") player.velocity.x = -1;
    if(event.code === "ArrowRight") player.velocity.x = 1;
    if(event.code === "Space") {
        bullets.push(new Bullet(player.position.x + player.size / 3, player.position.y));
    }
});

document.addEventListener("keyup", (event) => {
    if(event.code === "ArrowUp") player.velocity.y = 0;
    if(event.code === "ArrowDown") player.velocity.y = 0;
    if(event.code === "ArrowLeft") player.velocity.x = 0;
    if(event.code === "ArrowRight") player.velocity.x = 0;
});