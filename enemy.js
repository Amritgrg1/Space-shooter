class Enemy{
    constructor() {
        // init
        this.position = {
            x: Math.random() * (canvas.width - 40 -10) + 10,
            y: -50,
        };

        this.velocity = {
            x: 0, 
            y: 1,
        };

        this.isCrossBottom = false;
        this.size = Math.random() * (70 - 20) + 20;
        this.image = new Image();
        this.image.src = './images/Layered Rock.png';

    }

    draw() {
        c.beginPath();
        c.fillStyle = "red";
        if(this.isDead) this.image.src = './images/explosion-01.png';
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }


    drawScore() {
        c.fillStyle = 'white';
        c.font = "25px Arial";
        c.fillText(Score, 10, 50);
    }

    collision(player) {
        if(this.position.x + this.size >= player.position.x &&
            this.position.x <= player.position.x + player.size &&
            this.position.y + this.size >= player.position.y &&
            this.position.y <= player.position.y + player.size) {
                player.isAlive = false;
            }
    }

    collisionWithBullet(bullets) {
        for(let i = 0; i < bullets.length; i++) {
        if(this.position.x + this.size >= bullets[i].position.x &&
            this.position.x <= bullets[i].position.x + bullets[i].size &&
            this.position.y + this.size >= bullets[i].position.y &&
            this.position.y <= bullets[i].position.y + bullets[i].size) {
                this.velocity.y = 0;
                this.position.x = -100;
                this.position.y = -100;
                bullets[i].isDestroyed = true;
            }
        }

    }
    // collisionWithBottom() {
    //     if(this.position.y + this.size >= canvas.height) {
    //         this.isCrossBottom = true;
    //         this.velocity.y = 0;
    //         player.gameOverScreen();
            
    //     }
    // }

    move() {
        this.position.y += this.velocity.y;
    }

    update() {
        if(player.isAlive) {
            this.draw();
            this.move();
            this.drawScore();
        }
            // this.collisionWithBottom();
    }
}