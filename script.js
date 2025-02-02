function calculateTimeUnits({startDateTime_UTC, currentDateTime_utc}) {
    const timeDiffInMs = currentDateTime_utc - startDateTime_UTC.getTime();
    const avgLengthOfYearInDays = 365.2425;
    const milliSecondsInSecond = 1000;
    const milliSecondsInMinute = 1000 * 60;
    const milliSecondsInHour = 1000 * 60 * 60;
    const milliSecondsInDay = 1000 * 60 * 60 * 24;
    const milliSecondsInYear = 1000 * 60 * 60 * 24 * avgLengthOfYearInDays;
    const milliSecondsInMonth = milliSecondsInYear / 12;

    const years = Math.floor(timeDiffInMs / milliSecondsInYear);
    const months = Math.floor((timeDiffInMs % milliSecondsInYear) / milliSecondsInMonth);
    const days = Math.floor(timeDiffInMs / milliSecondsInDay) % avgLengthOfYearInDays;
    const hours = Math.floor((timeDiffInMs % milliSecondsInDay) / milliSecondsInHour);
    const minutes = Math.floor((timeDiffInMs % milliSecondsInHour) / milliSecondsInMinute);
    const seconds = Math.floor((timeDiffInMs % milliSecondsInMinute) / milliSecondsInSecond);
    const milliseconds = timeDiffInMs % milliSecondsInSecond;

    return {years, months, days, hours, minutes, seconds, milliseconds};
}

const startDateTime_UTC = new Date("2024-10-13T18:34:15Z");

function updateTimer() {
    const args = {startDateTime_UTC, currentDateTime_utc: Date.now()};
    const {days, hours, minutes, seconds} = calculateTimeUnits(args);

    document.getElementById("days").textContent = days.toString();
    document.getElementById("hours").textContent = hours.toString();
    document.getElementById("minutes").textContent = minutes.toString();
    document.getElementById("seconds").textContent = seconds.toString();
}

const updateInterval_ms = 1000;
setInterval(updateTimer, updateInterval_ms);
updateTimer();