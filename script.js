const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');
const equalBtn = document.getElementById('equal');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    if (value) {
      currentInput += value;
      updateDisplay();
    }
  });
});

equalBtn.addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  updateDisplay();
});

backspaceBtn.addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
});

document.addEventListener('keydown', e => {
  if (e.key.match(/[0-9+\-*/.=]/)) {
    if (e.key === '=') {
      equalBtn.click();
    } else {
      currentInput += e.key;
      updateDisplay();
    }
  } else if (e.key === 'Enter') {
    equalBtn.click();
  } else if (e.key === 'Backspace') {
    backspaceBtn.click();
  } else if (e.key.toLowerCase() === 'c') {
    clearBtn.click();
  }
});
