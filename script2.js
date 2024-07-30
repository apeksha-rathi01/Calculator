document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const value = button.textContent;

            if (action === 'clear') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                display.value = '';
            } else if (action === 'calculate') {
                if (firstOperand && operator && currentInput) {
                    currentInput = evaluate(firstOperand, operator, currentInput);
                    display.value = currentInput;
                    firstOperand = '';
                    operator = '';
                }
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
                if (firstOperand) {
                    currentInput = evaluate(firstOperand, operator, currentInput);
                    display.value = currentInput;
                }
                operator = action;
                firstOperand = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function evaluate(a, operator, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case 'add':
                return a + b;
            case 'subtract':
                return a - b;
            case 'multiply':
                return a * b;
            case 'divide':
                return a / b;
            default:
                return b;
        }
    }
});
