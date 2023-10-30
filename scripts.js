
/*************APARTADO 1***************/
document.addEventListener('DOMContentLoaded', function () {
    //HTML ELEMENTS DECLARATION
    var image = document.getElementById('sign');
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");

    //LISTENER FOR INPUTS CALLING THE FUNCTION
    input1.addEventListener("keyup", compareTxt);
    input2.addEventListener("keyup", compareTxt);

    //FUNCION TO CHANGE THE SIGN IF TXTS ARE EQUAL OR NOT
    function compareTxt() {
        if (input1.value == input2.value && input1.value != "" && input2.value != "") {
            image.src = "https://imgs.search.brave.com/0wVmY6OOQVsKAQfmY3Jzd-z_60G4wVdGTZugL-0Cjro/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb2Rp/Z29hc2NpaS5vcmcv/aW1hZ2VzL3NpZ25v/LWlndWFsLWlndWFs/ZGFkLnBuZw"
        } else {
            image.src = "https://www.adl.org/sites/default/files/styles/wide/public/images/combating-hate/hate-on-display/c/unequal-1.jpg.webp?itok=5kGZyt4t"
        }
    }
});


/*************APARTADO 2***************/
document.addEventListener("DOMContentLoaded", function () {
    //HTML ELEMENTS DECLARATION
    var input3 = document.getElementById("input3");
    var showText = document.getElementById("showTxt");

    //LISTENER FOR INPUTS CALLING THE FUNCTION
    input3.addEventListener("keyup", countInputLetters);

    //FUNCTION TO COUNT THE LENGTH OF THE INPUT
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
    //HTML ELEMENTS DECLARATION
    var input4 = document.getElementById("input4");
    var showSquare = document.getElementById("showSquare");

    //LISTENER FOR INPUTS CALLING THE FUNCTION
    input4.addEventListener("keyup", squareRoot);

    //FUNCTION TO SQUARE ROOT THE INPUT
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
    //HTML ELEMENTS DECLARATION
    var input5 = document.getElementById("input5");
    var input6 = document.getElementById("input6");
    var showConcat = document.getElementById("concatedtxt");

    //LISTENER FOR INPUTS CALLING THE FUNCTION
    input5.addEventListener("keyup", concatTxt);
    input6.addEventListener("keyup", concatTxt);

    //FUNCTION TO CONCATENATE THE INPUT
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
    //HTML ELEMENTS DECLARATION
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById('color2');
    var color3 = document.getElementById("color3");
    var textColored = document.getElementById("textColored");

    //LISTENER FOR INPUTS CALLING THE FUNCTION
    color1.addEventListener("click", colorChange);
    color2.addEventListener("click", colorChange);
    color3.addEventListener("click", colorChange);

    //FUNCTION TO CHANGE THE COLOR WITH RADIO INPUT
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
    //HTML ELEMENTS DECLARATION
    var height = document.getElementById("height");
    var width = document.getElementById("width");
    var circle = document.getElementById("circle");

    //LISTENER FOR INPUTS CALLING THE FUNCTION
    height.addEventListener("keyup", sizeChange);
    width.addEventListener("keyup", sizeChange);

    //FUNCTION TO CHANGE THE SIZE OF THE CIRCLE
    function sizeChange() {

        //PARSING TO DECIMAL TO AVOID NUMBER MISMATCH
        var heightValue = parseFloat(height.value);
        var widthValue = parseFloat(width.value);

        //IF THE HEIGHT & WIDTH ARE NOT EMPTY CHANGE THEM BY THE USER VALUES
        if (heightValue != "" && widthValue != "") {
            circle.style.height = heightValue + "px"; //preguntar
            circle.style.width = widthValue + "px"; //preguntar
        } else {
            circle.style.height = "";
            circle.style.width = "";
        }
    }
});


/*************APARTADO 7***************/
//DECLARE JSON ARRAY
var arrayWords = [
    {
        word: "GIRASOL",
        hint: "Planta herbácea"
    },
    {
        word: "LANGOSTA",
        hint: "Crustáceo Invertebrado"
    },
    {
        word: "MOUSSE",
        hint: "Postre de chocolate"
    },
    {
        word: "GORRO",
        hint: "Accesorio de vestimenta"
    },
    {
        word: "KAWASAKI",
        hint: "Marca de motocicletas"
    },
    {
        word: "PROCESADOR",
        hint: "Hardware esencial para PC"
    },
    {
        word: "VOLLEYBALL",
        hint: "Deporte con balón por equipos"
    }
];


//VARIABLES DECLARATION FROM HTML ELEMENTS
const inputs = document.querySelector(".inputs"),
    resetButton = document.querySelector(".resetBttn"),
    hint = document.querySelector(".hint span"),
    wrongLetters = document.querySelector(".wrong-letters span"),
    guessLeft = document.querySelector(".attempts-left span"),
    typingInput = document.querySelector(".typing-input");

let word, maxGuesses, corrects = [], incorrects = [];


//FUNCTION TO GET A RANDOM WORD FROM ARRAY
function getRandomWord() {
    //GENERATING A RANDOM NUMBER FOR ARRAY WORDS & AND ASSING IT TO A VARIABLE
    var randomWord = arrayWords[Math.floor(Math.random() * arrayWords.length)];
    word = randomWord.word;
    maxGuesses = 5; corrects = []; incorrects = [];
    //console.log(word);

    //ASSOCIATE HINT VALUE WITH RANDOM WORD
    hint.innerText = randomWord.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetters.innerText = incorrects;

    //FOR TO PRINT THE DIVS DEPENDING OF EACH WORD
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += '<input type="text" disabled>';
    }
    inputs.innerHTML = html;
}

//CALLING THE ABOVE FUNCTION 
getRandomWord();


//FUNCTION TO START THE GAME
function startGame(e) {
    //EXTRACT THE INPUT VALUE BY THE USER WHERE THE EVENT WILL BE SAVED IN key
    let key = e.target.value;

    //CHECK IF THE INPUT IS A VALID CHARACTER (LETTER)
    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key} `) && !corrects.includes(key)) {
        //console.log(key);

        //IF THE LETTER IS IN THE WORD IT'S CORRECT AND VICEVERSA
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }
        else {
            maxGuesses--;
            incorrects.push(` ${key} `);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetters.innerText = incorrects;
    }
    typingInput.value = "";

    //SET A DELAY TO SHOW THE HIDDEN WORD AND SHOW WIN OR LOOSE MSSG
    setTimeout(() => {
        if (corrects.length === word.length) {
            window.alert(`GENIAL! Has encontrado la palabra ${word.toUpperCase()}`);
            getRandomWord();
        } else if (maxGuesses < 1) {
            window.alert("Oh Oh! Tus intentos han acabado y no has acertado la palabra!");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    });
}


//LISTENERS
resetButton.addEventListener("click", getRandomWord);
typingInput.addEventListener("input", startGame);
document.addEventListener("keydown", () => typingInput); //CAMBIAR EVENT
