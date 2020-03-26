document.addEventListener("DOMContentLoaded", function(event) {
    var numSquares = 6;
    var colors = [];
    var pickedColor;

    var squares = document.querySelectorAll(".square");
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var resetButton = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");

    init();

    function init() {
        setupModeButtons();
        setupSquares();
        reset();
    }

    function setupModeButtons() {
        // mode buttons event listeners
        for (var i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener("click", function() {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");

                this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
                /* if (this.textContent === "Easy") {
                    numSquares = 3;
                } else {
                    numSquares = 6;
                } */
                reset();
                // figure out how many squares to show
                // pick new colors
                // pick a new pickedColor
                // update page to reflect changes
            });
        }
    }

    function setupSquares() {
        for (var i = 0; i < squares.length; i++) {
            // add click listeners to squares
            squares[i].addEventListener("click", function() {
                // grab color of clicked square
                var clickedColor = this.style.backgroundColor;
                // compare color to pickeColor
                if (clickedColor === pickedColor) {
                    messageDisplay.textContent = "Correct";
                    resetButton.textContent = "Play Again?";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                } else {
                    this.style.backgroundColor = "#232323"
                    messageDisplay.textContent = "Try Again";
                }
            });
        }
    }


    function reset() {
        // generate all new colors
        colors = generateRandomColors(numSquares);
        // pick a new random color from the array
        pickedColor = pickColor();
        // chaange colorDisplay to match picked Color
        colorDisplay.textContent = pickedColor;
        // set reset button to be new colors 
        resetButton.textContent = "New Colors";
        // clear message display
        messageDisplay.textContent = "";
        // change colors and diaplay of squares
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.display = "block";
            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "steelblue";
    }

    // before refactoring (changing buttons from using ids to use one class: mode)

    /* easyBtn.addEventListener("click", function() {
        // handle easy button colored
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        // change number of squares
        numSquares = 3;
        // generate squares, colors and picked color
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
    });

    hardBtn.addEventListener("click", function() {
        // handle hard button colored
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        // change number of squares
        numSquares = 6;
        // generate squares, colors and picked color
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }); */

    resetButton.addEventListener("click", function() {
        reset();
    });

    // colorDisplay.textContent = pickedColor;

    function changeColors(color) {
        // loop thriugh all squares
        for (var i = 0; i < squares.length; i++) {
            // change each color to match given color
            squares[i].style.backgroundColor = color;
        }
    }

    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num) {
        // make an array
        var arr = [];
        // add num random colors to array
        // actually repeat num time
        for (var i = 0; i < num; i++) {
            // get random color and push into arr
            arr.push(randomColor());
        }
        // return that array
        return arr;
    }

    function randomColor() {
        // pick a "red" from 0 -255
        var r = Math.floor(Math.random() * 256);
        // pick a "green" from 0 -255
        var g = Math.floor(Math.random() * 256);
        // pick a "blue" from 0 -255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
});