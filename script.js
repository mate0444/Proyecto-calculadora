let screen = document.getElementById('screen');
let expression = '';

function appendToScreen(value){
    expression += value;
    screen.innerText = expression;
}

function clearScreen(){
    expression = '';
    screen.innerText = '0';
}

function calculate(){
    try{
        let result = eval(expression);
        screen.innerText = result;
        expression = result.toString();
    } catch(error){
        screen.innerText = 'Error';
        expression = '';
    }
}