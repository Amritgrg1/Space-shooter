class Player{
    constructor() {
        // init
        this.position = {
            x: canvas.width/2.5,
            y: 200 + canvas.height/2.5,
        };

        this.velocity = {
            x: 0, 
            y: 0,
        };

        this.isAlive = true;
        this.size = 70;
        this.image = new Image();
        this.image.src = './images/spaceship.pod_.1.green_.png';
    }

    draw() {
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    gameOverScreen() {
        c.fillStyle = 'white';
        c.font = '40px Arial';
        c.fillText("GAME OVER!", canvas.width/2.8, canvas.height/2.5 + 150);
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    update() {
        this.draw();
        if(this.isAlive) {
            this.move();
        } else {
            this.gameOverScreen();
        }
    }
}