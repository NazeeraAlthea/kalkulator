const display = document.getElementById('display')


function clearDisplay(){
    display.value = ""
}

function minesDisplay(){
    display.value = display.value.slice(0, -1)
}

function calculate(){
    display.value = eval(display.value)
}

function appendToDisplay(input){
    display.value += input;
}

