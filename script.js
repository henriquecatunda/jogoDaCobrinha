let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let diretion = "right";
function criarBG(){

    context.fillStyle = "black";
    context.fillRect(0,0,16 *box,16 *box);
}

function criarCobrinha(){

    for(i =0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box , box);
    }
}

document.addEventListener('keydown', update);

function update(event){

     if(event.keyCode == 37  && diretion != "right") diretion = "left";
    if(event.keyCode == 38 && diretion != "down")  diretion = "up";
    if(event.keyCode == 39 && diretion != "left") diretion = "right";
    if(event.keyCode == 40 && diretion != "up") diretion = "down";
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && diretion == "right") snake[0].x = 0;
    if(snake[0].x < 0  && diretion == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && diretion == "down") snake[0].y = 0;
    if(snake[0].y < 0  && diretion == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(diretion == "right") snakeX += box;
    if(diretion == "left") snakeX -= box;
    if(diretion == "up") snakeY -= box;
    if(diretion == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);


}

let jogo = setInterval(iniciarJogo, 100);

