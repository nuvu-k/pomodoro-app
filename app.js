const bells = new Audio('./sounds/bell.wav');

const start = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const breakTime = document.querySelector('.btn-break');
const restart = document.querySelector('.btn-restart');

const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');

let myInterval;
let totalSeconds = 25 * 60; // Default 25-minute session
let state = false; // To track if timer is running

// ⏳ Function to start the timer
const appTimer = () => {
    if (!state) {
        state = true;
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Session is already running.');
    }
};


const stopTimer = () => {
    clearInterval(myInterval);
    state = false;
};


const restartTimer = () => {
    clearInterval(myInterval);
    state = false;
    totalSeconds = 25 * 60;
    updateDisplay();
};


const breakTimer = () => {
    clearInterval(myInterval);
    state = false;
    totalSeconds = 5 * 60;
    updateDisplay();
    appTimer(); // Start the countdown
};


const updateSeconds = () => {
    if (totalSeconds <= 0) {
        bells.play();
        clearInterval(myInterval);
        state = false;
        return;
    }
    
    totalSeconds--;

    updateDisplay();
};

const updateDisplay = () => {
    let minutesLeft = Math.floor(totalSeconds / 60);
    let secondsLeft = totalSeconds % 60;

    minuteDiv.textContent = minutesLeft;
    secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};


start.addEventListener('click', appTimer);
stopBtn.addEventListener('click', stopTimer);
restart.addEventListener('click', restartTimer);
breakTime.addEventListener('click', breakTimer);


updateDisplay();