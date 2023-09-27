
/*************APARTADO 1***************/
document.addEventListener('DOMContentLoaded', function () {
    var image = document.getElementById('sign');
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");

    input1.addEventListener("keyup", compareTxt);
    input2.addEventListener("keyup", compareTxt);


    //FUNCION PARA CAMBIAR LA IMAGEN DEL SIGNO SI EL TEXTO DE LOS INPUTS ES IGUAL USANDO UN LISTENER
    function compareTxt() {
        if (input1.value == input2.value && input1.value != "" && input2.value != "") {
            image.src = "https://imgs.search.brave.com/0wVmY6OOQVsKAQfmY3Jzd-z_60G4wVdGTZugL-0Cjro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb2Rp/Z29hc2NpaS5vcmcv/aW1hZ2VzL3NpZ25v/LWlndWFsLWlndWFs/ZGFkLnBuZw"
        } else {
            image.src = "https://imgs.search.brave.com/xy39aO3ufrs8NaUYz91Ii4vAl4mWC8qRUmrmPlASgeA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlsZWZvcm1hdC5p/bmZvL2luZm8vdW5p/Y29kZS9jaGFyLzIy/NjAvbm90X2VxdWFs/X3RvLnBuZw"
        }
    }
});


/*************APARTADO 2***************/
document.addEventListener("DOMContentLoaded", function () {
    var input3 = document.getElementById("input3");
    var showText = document.getElementById("showTxt");

    input3.addEventListener("keyup", countInputLetters);

    function countInputLetters() {
        if (input3.value != "") {
            showText.innerHTML = input3.value.length;
        } else {
            showText.innerHTML = 0;
        }
    }
}
);


/*************APARTADO 3***************/
document.addEventListener("DOMContentLoaded", function () {
    var input4 = document.getElementById("input4");
    var showSquare = document.getElementById("showSquare");

    input4.addEventListener("keyup", squareRoot);

    function squareRoot() {
        if (input4.value != "") {
            showSquare.innerHTML = Math.sqrt(input4.value);
        } else {
            showSquare.innerHTML = 0;
        }
    }

});


/*************APARTADO 4***************/
document.addEventListener("DOMContentLoaded", function () {
    var input5 = document.getElementById("input5");
    var input6 = document.getElementById("input6");
    var showConcat = document.getElementById("concatedtxt");

    input5.addEventListener("keyup", concatTxt);
    input6.addEventListener("keyup", concatTxt);

    function concatTxt() {
        if (input5.value != "" && input6.value != "") {
            showConcat.innerHTML = input5.value + input6.value;
        } else {
            showConcat.innerHTML = "";
        }
    }

});



/*************APARTADO 5***************/
document.addEventListener("DOMContentLoaded", function () {
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById('color2');
    var color3 = document.getElementById("color3");
    var textColored = document.getElementById("textColored");

    color1.addEventListener("click", colorChange);
    color2.addEventListener("click", colorChange);
    color3.addEventListener("click", colorChange);

    function colorChange() {
        if (color1.checked) {
            textColored.style.color = "red";
        } else if (color2.checked) {
            textColored.style.color = "blue";
        } else if (color3.checked) {
            textColored.style.color = "#FF00CB";
        }
    }
}
);


/*************APARTADO 6***************/
document.addEventListener("DOMContentLoaded", function () {
    var height = document.getElementById("height");
    var width = document.getElementById("width");
    var circle = document.getElementById("circle");

    height.addEventListener("keyup", sizeChange);
    width.addEventListener("keyup", sizeChange);

    function sizeChange() {
        var heightValue = parseFloat(height.value);
        var widthValue = parseFloat(width.value);

        if (heightValue != "" && widthValue != "") {
            circle.style.height = heightValue + "px";
            circle.style.width = widthValue + "px";
        } else {
            circle.style.height = "";
            circle.style.width = "";
        }
    }
});


/*************APARTADO 7***************/
//DECLARE ARRAYS
var arrayWords = ["GIRASOL", "CAMALEÓN", "MOUSSE"];
var arrayHints = [
    "Planta herbácea", 
    "Reptil salvaje",
    "Postre de chocolate"
];

//COUNT WORDS USED & ATTEMPS
var wordsUsed = 0;
var remainingAttempts = 5;

//ACTUAL INDEX POSITION 
var actualPos;

//ARRAY TO SPLIT EACH LETTER OF WORD 'arrayWords'
//[0:G] [1:I] [2:R...]
var arrayWordsSplit = [];

//CORRECT LETTER QUANTITY
var correctLetters = 0;

//DIV CLASS POSITION ARRAY FOR RESULT
var divsWordPosition = [];

//WORDS TO BE GUESSED
var totalWordsGuessed;


//FUNCTION TO LOAD THE NEXT WORD
function loadNewWord() {
    actualPos = Math.floor(Math.random() * arrayWords.length);
    
    //DECLARE THE VARIABLE WHERE SAVES THE INDEX IN THE ARRAY WORDS USING THE RANDOM ABOVE
    let word = arrayWords[actualPos];

    //NEEDS TO HIT THE LENGTH OF THE WORD TO WIN
    totalWordsGuessed = word.length;
    correctLetters = 0;

    //SAVE THE WORD SPLITTED INTO THE ARRAY
    arrayWordsSplit  = word.split('');

    //RESET THE DIVS POSITIONS AND LETTERS USED
    document.getElementById("word").innerHTML = "";
    document.getElementById("usedLetters").innerHTML = "";
}