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

        this.size = 50;
        this.image = new Image();
        this.image.src = './images/spaceship.pod_.1.green_.png';
    }

    draw() {
        c.beginPath();
        c.fillStyle = "red";
        c.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    update() {
        this.draw();
        this.move();
    }
}