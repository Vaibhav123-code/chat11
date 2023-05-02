
const form = document.querySelector('form');
    const timeContainer = document.querySelector('.time-container');
    const timeInput = document.querySelector('#time-input');
    const alert = document.querySelector('.alert');
    

    // Show/hide time input on radio button selection
form.addEventListener('change', (e) => {
    if (e.target.value === 'call') {
      timeContainer.classList.add('show');
    } else {
      timeContainer.classList.remove('show');
    }
  });
  
  // Submit form and show alert
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const radioValue = document.querySelector('input[name="radio"]:checked').value;
    let message;
    if (radioValue === 'chat') {
      message = 'You will receive a chat.';
    } else if (radioValue === 'call') {
      const time = timeInput.value.trim();
      if (time === '') {
        alert.innerHTML = 'Please enter a time.';
        alert.classList.add('show');
        return;
      }
      message = `You will receive a call at ${time}.`;
    } else {
      message = 'You will not receive anything.';
    }
    alert.innerHTML = message;
    alert.classList.add('show');
    
  });
  