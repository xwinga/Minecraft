var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;

block_imgae_height = 30;

Player_x=10;

player_y=10;

var player_object="";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
        player_obejct= Img;
        player_object.scaleToWIdth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:Player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
       block_image_object= Img;
       block_image_object.scaleToWIdth(block_image_width);
       block_image_object.scaleToHeight(block_imgae_height);
       block_image_object.set({
            top:player_y,
            left:Player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_imgae_height = block_imgae_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey== true && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_imgae_height = block_imgae_height - 10;
        document.getElementById("current width").innerHTML = block_image_width;
        document.getElementById("current height").innerHTML = block_imgae_height;
    }
    if(keyPressed == '38') 
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
if(keyPressed == '84')
{
    new_image('trunk.jpg');
    console.log("t");
}
if(keyPressed == '68')
{
    new_image('dark_green.png');
    console.log("d");
}
if(keyPressed == '76')
{
    new_image('light_green.png');
    console.log("l");
}
if(keyPressed == '71')
{
    new_image('ground.png');
    console.log("g");
}
if(keyPressed == '87')
{
    new_image('wall.jpg');
    console.log("w");
}
if(keyPressed == '89')
{
    new_image('yellow_wall.png');
    console.log("y");
}
if(keyPressed == '82')
{
    new_image('roof.jpg');
    console.log("r");
}
if(keyPressed == '85')
{
    new_image('unique');
    console.log("u");
}
}