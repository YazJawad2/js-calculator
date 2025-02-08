const input = document.getElementById('myinput');
const historyPlace = document.getElementById('historyplace');
let history = [];

let expression = '';

document.querySelectorAll('.mybuttons').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.id === 'clear') {
            expression = '';
        } else if (button.id === 'equals') {
            try {
                const result = eval(expression);
                history.push(`${expression} = ${result}`);
                expression = result;
            } catch {
                expression = 'Error';
            }
        } else if (button.id === 'history') {
            historyPlace.innerHTML = history.join('<br>');
            return;
        } else {
            expression += value;
        }
        input.value = expression;
    });
});
