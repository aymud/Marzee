import calculateTimeUnits from './utils/calculateTimeUnits.js';

const DisplayModes = {
    DAYS: 0,
    WEEKS: 1,
    MONTHS: 2
};

let displayModeIndex = DisplayModes.DAYS;
const displayModesLength = Object.keys(DisplayModes).length;
const timerElement = document.querySelector('.timer');
const startDateTime_UTC = new Date("2024-10-13T18:34:15Z");
const updateInterval_ms = 1;
let touchStartX = 0;
let touchEndX = 0;

function updateTimer() {
    const args = {startDateTime_UTC, currentDateTime_utc: Date.now()};
    const timeUnits = calculateTimeUnits(args);

    document.getElementById("days-container").style.display = displayModeIndex === DisplayModes.DAYS ? 'flex' : 'none';
    document.getElementById("hours-container").style.display = displayModeIndex === DisplayModes.DAYS ? 'flex' : 'none';
    document.getElementById("minutes-container").style.display = displayModeIndex === DisplayModes.DAYS ? 'flex' : 'none';
    document.getElementById("seconds-container").style.display = displayModeIndex === DisplayModes.DAYS ? 'flex' : 'none';
    document.getElementById("weeks-container").style.display = displayModeIndex === DisplayModes.WEEKS ? 'flex' : 'none';
    document.getElementById("months-container").style.display = displayModeIndex === DisplayModes.MONTHS ? 'flex' : 'none';

    // Only show colons when displaying days.
    const colons = document.querySelectorAll('.colon');
    colons.forEach(colon => {
        colon.style.display = displayModeIndex === DisplayModes.DAYS ? 'inline' : 'none';
    });

    if (displayModeIndex === DisplayModes.DAYS) {
        document.getElementById("days").textContent = timeUnits.days.toString();
        document.getElementById("hours").textContent = timeUnits.hours.toString();
        document.getElementById("minutes").textContent = timeUnits.minutes.toString();
        document.getElementById("seconds").textContent = timeUnits.seconds.toString();
    } else if (displayModeIndex === DisplayModes.WEEKS) {
        document.getElementById("weeks").textContent = timeUnits.weeks.toFixed(8);
    } else if (displayModeIndex === DisplayModes.MONTHS) {
        document.getElementById("months").textContent = timeUnits.months.toFixed(8);
    }
}


function handleSwipe() {
    if (touchEndX < touchStartX) {
        displayModeIndex = (displayModeIndex + 1) % displayModesLength;
    } else if (touchEndX > touchStartX) {
        displayModeIndex = (displayModeIndex - 1 + displayModesLength) % displayModesLength;
    }
    updateTimer();
}

timerElement.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

timerElement.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

setInterval(updateTimer, updateInterval_ms);
updateTimer();