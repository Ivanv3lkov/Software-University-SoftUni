function attachEventsListeners() {
    const [daysButton, hoursButton, minutesButton, secondsButton] = document.querySelectorAll('input[type="button"]');
    const [daysInput, hoursInput, minutesInput, secondsInput] = document.querySelectorAll('input[type="text"]');
    daysButton.addEventListener('click', () => {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = daysInput.value * 60;
        secondsInput.value = daysInput.value * 60 * 60;
    })
    hoursButton.addEventListener('click', () => {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = hoursInput.value * 60 * 60;
    })
    minutesButton.addEventListener('click', () => {
        daysInput.value = minutesInput.value / 60 / 24;
        hoursInput.value = minutesInput.value / 60;
        secondsInput.value = minutesInput.value * 60;
    })
    secondsButton.addEventListener('click', () => {
        daysInput.value = secondsInput.value / 60 / 60 / 24;
        hoursInput.value = secondsInput.value / 60 / 60;
        minutesInput.value = secondsInput.value / 60;
    })
}