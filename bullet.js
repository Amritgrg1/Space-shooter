class Bullet {
    constructor(x = 0, y = 0) {
         // init
         this.position = {
            x: x,
            y: y,
        };

        this.velocity = {
            x: 0,
            y: 5,
        };

        this.size = 15;
        this.image = new Image();
        this.image.src = './images/bullet.png';

        this.sound = new Audio();
        this.sound.src = './sounds/burning.wav';
        this.sound.play();
    }

    draw() {
        c.beginPath();
        c.fillStyle = "white";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    move() {
        this.position.y -= this.velocity.y;
    }

    update() {
        this.draw();
        this.move();
    }
}