const appBoard = document.querySelector('#puzzle');
const solveBtn = document.querySelector('#solve-btn');

const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'number');
    inputElem.setAttribute('min', 1);
    inputElem.setAttribute('max', 9);
    appBoard.appendChild(inputElem);
};

const joinValues = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value);
        } else {
            submission.push('.')
        };
    });
};

const solve = () => {
    
}

solveBtn.addEventListener('click', joinValues);