export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById("img_Brick");
        this.game = game;
        this.position = position;
        this.width = 52;
        this.height = 25;
    }
    update() {

    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}