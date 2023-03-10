
// выделение экрана и кнопок
const board = document.querySelector('.input-screen');
const buttons = document.querySelector('.buttons');

// массивы 
const controllers = ["AC", "+/-", "%", "/", "x", "-", "+", "=", ","]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","]

// переменные
let operation = '' // знак операции
let num1 = 0 // первое число
let num2 = 0 // второе число
let finish = false

// ф-ия очистки экрана ac
function clearALL() {
    num1 = ''
    num2 = ''
    operation = ''
    finish = false
    board.textContent = 0
}

document.querySelector('.ac').addEventListener = clearALL;

document.querySelector('buttons').addEventListener = (event) => {
    // нажата кнопка
    if (!event.target.classList.contains('btn')) return;
    // нажата кнопка clearALL ac
    if (!event.target.classList.contains('ac')) return;

    board.textContent = '';
    // получаем нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиши 0-9 или ,
    if (numbers.includes(key)) {
        if (num2 === '' && operation === '') {
            num1 += key;

            board.textContent = num1;
        }
        else if (num1 !== '' && num2 !== '' && finish) {
            num2 = key;
            finish = false;
            board.textContent = num2;
        }
        else {
            num2 += key;
            board.textContent = num2;
        }
        return;
    }

    // если нажата клавиша + - / x
    if (controllers.includes(key)) {
        operation = key;
        board.textContent = operation;
        return;
    }

    // нажата =
    if (key === "=") {
        if (num2 === '') num2 = num1;
        switch (operation) {
            case "+":
                num1 = (+num1) + (+num2);
                break;
            case "-":
                num1 = num1 - num2;
                break;
            case "x":
                num1 = num1 * num2;
                break;
            case "/":
                num1 = num1 / num2;
                break;
        }
        finish = true;
        board.textContent = num1;

    }
}
