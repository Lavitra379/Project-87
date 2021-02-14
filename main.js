var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object;
var block_image_object;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        })

        canvas.add(player_object);
    });
}
player_update()


function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y + 70,
            left: player_x + 20
        });

        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", function (e) {
            keyPressed = e.keyCode;

            if (e.shiftKey == true && keyPressed == "80") {
                block_image_width = block_image_width + 10;
                block_image_height = block_image_height + 10;
                document.getElementById("current_width").innerHTML = block_image_width;
                document.getElementById("current_height").innerHTML = block_image_height;

                console.log("Shift + p");
            }

            if (e.shiftKey == true && keyPressed == "77") {
                block_image_width = block_image_width - 10;
                block_image_height = block_image_height - 10;
                document.getElementById("current_width").innerHTML = block_image_width;
                document.getElementById("current_height").innerHTML = block_image_height;
                console.log("Shift + m");
            }

            if (keyPressed == "70") {
                new_image('ironman_face.png');
                console.log("f");
            }

            if (keyPressed == "66") {
                new_image('hulkd_body.png');
                console.log("b");
            }

            if (keyPressed == "76") {
                new_image('spiderman_legs.png');
                console.log("l");
            }

            if (keyPressed == "82") {
                new_image('thor_right_hand.png');
                console.log("r");
            }

            if (keyPressed == "72") {
                new_image('captain_america_left_hand.png');
                console.log("h");
            }


            if (keyPressed == "38") {
                up()
                console.log("up");
            }

            if (keyPressed == "40") {
                down()
                console.log("down");
            }

            if (keyPressed == "37") {
                left()
                console.log("left");
            }
            if (keyPressed == "39") {
                right()
                console.log("right");
            }
});