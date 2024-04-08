// This is the original text (GLOBAL)

let originalText = "I love my country Pakistan.<br>I love my city Faisalabad.<br>I love my Homeland.";


// Global array of cities

let cities = ["Faisalbad", "Lahore", "Islamabad", "Kashmir", "Shahkot", "Murree", "Naran"]




// clearing buttons

function clrOutput() {
    document.getElementById("output").innerHTML = "";
}
function clrInput() {
    document.getElementById("input").value = "";
}


// Now the functionalities starts from here


// lower Case

function lowerCase() {
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
}


// Upper Case

function upperCase() {
    let upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}


// capitalize

function capitalize() {
    let capitalizedText = '<span style="text-transform: capitalize;">' + originalText + '</span>';
    document.getElementById("output").innerHTML = capitalizedText;
}
// BELOW IS BY CHAT-GPT


// function capitalize() {
//     let capitalizedText = originalText.replace(/\b\w/g, function (char) {
//         return char.toUpperCase();
//     });
//     document.getElementById("output").innerHTML = capitalizedText;
// }



// capitalize ends here



// Better formatting

function betterFormatting() {
    let text = document.getElementById("input").value;

    if (!text) {
        alert("PLEASE type your text")
        return;
    }
    text = text.toLowerCase()
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text;

}



// Print all cities

function printAllCities() {
    document.getElementById("output").innerHTML = "";

    for (let i = 0; i < cities.length; i++) {

        count = i + 1;
        document.getElementById("output").innerHTML += count + ')' + cities[i] + '<br>';
        document.getElementById("output").style.textAlign = "center";
    }


}

// Add city in list

function addCity() {
    let newCity = document.getElementById("input").value;
    if (!newCity || newCity.length < 3) {
        alert("Please enter a city name correctly to add.");
        return;
    }

    let cityFirstLetter = newCity.slice(0, 1).toUpperCase();
    console.log(cityFirstLetter)
    let cityAllLetters = newCity.slice(1).toLowerCase();
    console.log(cityAllLetters)
    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    console.log(cityWordInCapitalize);



    // declaring
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === cityWordInCapitalize) {
            cityFound = true;
            let html = '<span style="color:red; font-size: 20px;">' + cityWordInCapitalize + '</span> is already in the list.';
            document.getElementById("output").innerHTML = html;

        }



    }
    if (cityFound === false) {
        cities.push(cityWordInCapitalize)
        let html = '<span style="color:grees; font-size: 20px;">' + cityWordInCapitalize + '</span> has been successfully added in the list.';
        document.getElementById("output").innerHTML = html;

    }
}


function checkCity() {
    let checkCity = document.getElementById("input").value;
    if (!checkCity) {
        alert("Please enter your city name to check");
        return;
    }

    // Capitalizing to check
    let cityFirstLetter = checkCity.charAt(0).toUpperCase();
    let cityAllLetters = checkCity.slice(1).toLowerCase();
    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;

    // Declaring
    let cityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true;
            let html = '<span style="color:red; font-size: 20px;">' + cityWordInCapitalize + '</span> is already in the list.';
            document.getElementById("output").innerHTML = html;
            return; // Exit the function once city is found
        }
    }

    // If city is not found
    let html = "Sorry &#128524; but we couldn't find your city" +
        '<span style="color:red; font-size: 20px;">' + cityWordInCapitalize + '</span> CLICK "Add Your City In List" button to add button';
    document.getElementById("output").innerHTML = html;
}






// Find word in text
function findWord() {
    let word = document.getElementById("input").value;
    if (!word) {
        alert("Please enter the word to FIND");
        return;
    }
    word = word.toLowerCase();
    let newOriginalString = originalText.toLowerCase();
    let findWord = newOriginalString.indexOf(word);
    if (findWord !== -1) {
        document.getElementById("output").innerHTML = `The word you entered is found at index: ${findWord}`;
    } else {
        document.getElementById("output").innerHTML = `The word you entered is not found`;
    }
}


// replace word

function replaceWord() {
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("input").value;

    if (!word) {
        alert("Please enter the word to REPLACE");
        return;
    }

    let replaceWith = prompt("Enter a word that you want to replace with.");

    if (!replaceWith) {
        alert("Please type a word to replace it with.");
        return;
    }

    word = word.toLowerCase();
    word = new RegExp(word, 'g');

    replacedWith = replaceWith.toLowerCase();

    // Replacing
    let replacedText = newOriginalText.replace(word, replaceWith);
    document.getElementById("output").innerHTML = replacedText;
}













