document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (button.classList.contains('clear')) {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.value = '';
            } else if (button.classList.contains('equals')) {
                if (currentInput && previousInput && operator) {
                    display.value = eval(`${previousInput} ${operator} ${currentInput}`);
                    currentInput = display.value;
                    previousInput = '';
                    operator = '';
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput) {
                    previousInput = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});