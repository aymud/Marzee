const startDateTime = new Date("2024-10-13T12:34:15");

function updateTimer() {
    const currentDateTime = new Date();
    const difference = currentDateTime - startDateTime;

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("seconds").textContent = seconds;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("hours").textContent = hours;
    document.getElementById("days").textContent = days;
}

const updateInterval_milliseconds = 1000;

setInterval(updateTimer, updateInterval_milliseconds);
updateTimer();