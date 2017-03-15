

var heightElem = document.getElementById("height");

var formElem = document.getElementById("draw-form");


function brickTypes() {
    var brickChoice = document.getElementById("brickop");
        brickType = brickChoice.value; 
        return;   
}

// set a handler function for the form's submission event
formElem.onchange = function(event) {

    // QUIZ
    // what happens if we don't do this?
    event.preventDefault();

    // QUIZ
    // what happens if we don't do this?
    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;

    if (heightStr.length < 1) {
        displayError("Please provide a height.");
        return;
    }

    // convert the string to an int
    height = parseInt(heightStr);
    // if the height is not-a-number, yell at them and exit early

    if (isNaN(heightStr) || height < 1) {
        displayError("That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 20;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
}


/**
 * displayError
 *
 * Displays an error message on the text input, and colors it red
 */
function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}


/*
 * clearError
 *
 * Undisplays the error message and removes the red CSS style
 */
function clearError(message) {
    heightElem.className = "";
    document.querySelector(".error-message").innerHTML = "";
}





/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    // get the brick type
    brickTypes();
    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickType;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
        document.getElementById("selectheight").innerHTML = height;

    }
}
