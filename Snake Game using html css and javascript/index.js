let inputDir={x: 0,y: 0};
const foodsound=new Audio("food.mp3");
const gameoversound=new Audio("gameover.mp3");
const movesound=new Audio("move.mp3");
const musicsound=new Audio("music.mp3");
let speed=8;
let score=0;
let lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
];
food={x:6,y:7};
function main(ctime)
{
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed)
        return;
    else{
        lastPaintTime=ctime;
        gameEngine();
    }
    
}
function isCollide(snake)
{
    //snake collide itself
    for(let i=1;i<snakeArr.length;i++)
    {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    //wall collison
        if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
            return true;
        }
}
    
function gameEngine(){
    //updating snake variable & food
    if(isCollide(snakeArr)){
        gameoversound.play();
        musicsound.pause();
        inputDir={x: 0,y: 0};
        alert("Game Over!! Press any key to play again!");
        snakeArr=[{x:13,y:15}];
        musicsound.play();
        score=0;
    }

    //snake eaten food now what!!
    if(snakeArr[0].y=== food.y && snakeArr[0].x==food.x){
        snakeArr.unshift({x: snakeArr[0].x+inputDir.x,y: snakeArr[0].y+inputDir.y});
        foodsound.play();
        score=score+1;
        if(score>highscoreval){
            highscoreval=score;
            localStorage.setItem("HighScore",JSON.stringify(highscoreval))
            highscoreBox.innerHTML = "HighScore: "+ highscoreval

        }
        scoreBox.innerHTML="Score: "+score;
        let a=2;
        let b=16;
        food={x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
    }
    //Moving the snake
    for(i=snakeArr.length-2;i>=0;i--)
    {
        const element=snakeArr[i];
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;

    //Display the snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart= e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index==0)
        {
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    //Display the food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart= food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

    
}



musicsound.play();
let HighScore = localStorage.getItem("HighScore");
if(HighScore===null)
{
    highscoreval=0;
    localStorage.setItem("HighScore",JSON.stringify(highscoreval))
}
else{
    highscoreval=JSON.parse(HighScore);
    highscoreBox.innerHTML = "HighScore: "+ HighScore
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir={x: 0,y:1}//game start
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;
    }
})
