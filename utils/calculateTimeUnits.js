export default function calculateTimeUnits({startDateTime_UTC, currentDateTime_utc}) {
    const timeDiffInMs = currentDateTime_utc - startDateTime_UTC.getTime();
    const avgLengthOfYearInDays = 365.2425;
    const milliSecondsInSecond = 1000;
    const milliSecondsInMinute = 1000 * 60;
    const milliSecondsInHour = 1000 * 60 * 60;
    const milliSecondsInDay = 1000 * 60 * 60 * 24;
    const milliSecondsInWeek = milliSecondsInDay * 7;
    const milliSecondsInYear = 1000 * 60 * 60 * 24 * avgLengthOfYearInDays;
    const milliSecondsInMonth = milliSecondsInYear / 12;

    const years = Math.floor(timeDiffInMs / milliSecondsInYear);
    const months = timeDiffInMs / milliSecondsInMonth;
    const weeks = timeDiffInMs / milliSecondsInWeek;
    const days = Math.floor(timeDiffInMs / milliSecondsInDay) % avgLengthOfYearInDays;
    const hours = Math.floor((timeDiffInMs % milliSecondsInDay) / milliSecondsInHour);
    const minutes = Math.floor((timeDiffInMs % milliSecondsInHour) / milliSecondsInMinute);
    const seconds = Math.floor((timeDiffInMs % milliSecondsInMinute) / milliSecondsInSecond);
    const milliseconds = timeDiffInMs % milliSecondsInSecond;

    return {years, months, weeks, days, hours, minutes, seconds, milliseconds};
}