function checkRange(number) {
    return number >= 40 && number <= 10000;
}

function askAndCheck() {
    const number = parseInt(prompt("Įveskite skaičių:"));
    
    if (!isNaN(number)) {
        if (checkRange(number)) {
            console.log("Skaičius yra diapazone nuo 40 iki 10000.");
        } else {
            console.log("Skaičius nėra diapazone nuo 40 iki 10000.");
        }
    } else {
        console.log("Įvestas netinkamas skaičius.");
    }
}

// Iškviečiame funkciją
askAndCheck();
