export default class Ball {

    constructor(game) {
        this.image = document.getElementById("img_Ball");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = { x: 30, y: 50 };
        this.speed = { x: 3, y: 3 };

        this.size = 20;
    }
    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        );
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //wall left or right
        if (this.position.x > this.gameWidth - this.size || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }
        //wall top or bottom 
        if (this.position.y > this.gameHeight - this.size || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
        //check collision for paddle
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let leftSideOfPaddle = this.game.paddle.position.x;
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;


        if (bottomOfBall >= topOfPaddle
            && this.position.x < rightSideOfPaddle
            && this.position.x > leftSideOfPaddle
        
            ){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
            }

        // //seiten
        // if(this.position.x < rightSideOfPaddle 
        //     && this.position > leftSideOfPaddle
        //     && this.position.y > topOfPaddle
        //     // ||
        //     // this.position.x < leftSideOfPaddle
        //     // && this.position.y > topOfPaddle
        //     ){
        //     this.speed.x = -this.speed.x;
        // }
        
               
    }
}