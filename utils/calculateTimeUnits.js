export default function calculateTimeUnits({startDateTime_utc, currentDateTime_utc}) {
    const startDate = new Date(startDateTime_utc);
    const currentDate = new Date(currentDateTime_utc)
    const timeDiffInMilliseconds = currentDate - startDate;

    const avgLengthOfYearInDays = 365.2425;
    const avgLengthOfMonthInDays = avgLengthOfYearInDays / 12;

    const diffInSeconds = timeDiffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInWeeks = diffInDays / 7;
    const diffInMonths = diffInDays / avgLengthOfMonthInDays;
    const diffInYears = diffInDays / avgLengthOfYearInDays;

    return {
        days: Math.floor(diffInDays),
        hours: Math.floor(diffInHours % 24),
        minutes: Math.floor(diffInMinutes % 60),
        seconds: Math.floor(diffInSeconds % 60),
        weeks: diffInWeeks,
        months: diffInMonths,
        years: diffInYears
    };
}