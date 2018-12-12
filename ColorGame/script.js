var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var varPickedColor = pickColor();
var selectedSpan = document.getElementById("colorDisplay")
selectedSpan.textContent = varPickedColor;
var messageDisplay = document.getElementById("message");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var jumbo = document.getElementById("jumboContainer");

for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function()
    {
        var clickedBackground = this.style.backgroundColor; //get the background color of the current square

        if(clickedBackground === varPickedColor) //compare current square to desired square
        {
            messageDisplay.textContent = "Correct!";
            jumbo.style.color = "white";
            jumbo.style.backgroundColor = varPickedColor;
            changeColors(varPickedColor);
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Wrong!"
        }
    });
}


document.getElementById("playAgain").addEventListener("click", function()
{

    colors = generateRandomColors(numSquares);
    varPickedColor = pickColor();
    selectedSpan = document.getElementById("colorDisplay")
    selectedSpan.textContent = varPickedColor;
    messageDisplay = document.getElementById("message");
    for(var i = 0; i < colors.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    document.body.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Click on any of the squares to guess if it corresponds with the rgb color above";
    jumbo.style.backgroundColor = "white";
    jumbo.style.color = "black";

});

function changeColors(color)
{

    for(var j = 0; j < squares.length; j++)
    {
        squares[j].style.backgroundColor = color;
    }
}

function pickColor()
{
   var randIndex = Math.floor(Math.random() * colors.length);
   return colors[randIndex];
}

function generateRandomColors(numColors)
{
    var arr = [];

    for(var i = 0; i < numColors; i++)
    {
        arr.push(randomColor()); //pushes a random color generated into the arr
    }

    return arr; //returns an array of random colors (# of items based on parameter)
}   


function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}




easyButton.addEventListener("click", function()
{
    easyButton.classList.add("selectedButton");
    hardButton.classList.remove("selectedButton");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    varPickedColor = pickColor();
    selectedSpan.textContent = varPickedColor;

    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }

    jumbo.style.backgroundColor = "white";
    jumbo.style.color = "black";


});

hardButton.addEventListener("click", function()
{
    hardButton.classList.add("selectedButton");
    easyButton.classList.remove("selectedButton");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    varPickedColor = pickColor();
    selectedSpan.textContent = varPickedColor;
    jumbo.style.backgroundColor = "white";
    jumbo.style.color = "black";

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

});