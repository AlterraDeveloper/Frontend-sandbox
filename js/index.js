const timerDays = document.querySelector('#timer-days-value')
const timerHours = document.querySelector('#timer-hours-value')
const timerMinutes = document.querySelector('#timer-minutes-value')
const timerSeconds = document.querySelector('#timer-seconds-value')

let countDownDate = new Date("Feb 17, 2021 17:25:00").getTime();

let timer = setInterval(() => {

    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        clearInterval(timer)
        timerDays.style.color = 'red'
        timerHours.style.color = 'red'
        timerMinutes.style.color = 'red'
        timerSeconds.style.color = 'red'

        timerDays.innerHTML = 0;
        timerHours.innerHTML = 0;
        timerMinutes.innerHTML = 0;
        timerSeconds.innerHTML = 0;
    } else {
        timerDays.innerHTML = days;
        timerHours.innerHTML = hours;
        timerMinutes.innerHTML = minutes;
        timerSeconds.innerHTML = seconds;
    }



}, 1000)