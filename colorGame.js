var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click",function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squres
    for(var i =  0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    // change background color back to black after click "paly again" button.
    h1.style.background="steelblue";
})

colorDisplay.textContent = pickedColor; 

for(var i = 0; i < squares.length; i++){
    // add initial color to each square
squares[i].style.backgroundColor = colors[i];

//add click listeners to each square
squares[i].addEventListener("click", function(){
    //Grab the color of the clicked square 
    var clickedColor = this.style.backgroundColor;
    // compare color to the picked color
if (clickedColor===pickedColor){
    messageDisplay.textContent = "Correct!!";
    resetButton.textContent = "Play Again?"
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
}
else{
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try Again!";
}
});
}
function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each square's color to match the given color
        squares[i].style.backgroundColor = color;
    }
}
// function that generate random number to use as value of rgb colors.
function pickColor(){
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = []
    // add num random colors to array and repeat num times
    for (var i = 0; i<num; i++){
        // get random color and oush in to arr
        arr.push(randomColor())
    }
    // return that array
    return arr;

}
function randomColor(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b +")";
}