calendarInput.addEventListener('input', function() {
    // Enable or disable the button based on whether a date has been chosen
    if (calendarInput.value !== '') {
        button.classList.remove('disabled');
        button.classList.add('button-animation');
        button.style.pointerEvents = 'auto';
        message.style.display = 'none';
    } else {
        button.classList.add('disabled');
        button.classList.remove('button-animation');
        button.style.pointerEvents = 'none';
        message.style.display = 'block';
    }
});
