const months = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

const oneMinute = 60 * 1000;
const oneHour = 60 * 60 * 1000;
const OneDay = 24 * 60 * 60 * 1000;


export const euroFormat = (date) => {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = months[dt.getMonth()]
    const day = dt.getDate()

    return ` ${day} ${month} ${year}`
};


export const dynamicFormat = (date) => {
    const timeFromNow = Date.now() - date

    if (timeFromNow < oneMinute) {
        return "just now"
    }
    else if (timeFromNow > oneMinute && timeFromNow < oneHour) {
        const minutes = Math.floor(timeFromNow / oneMinute)
        return (minutes === 1) ? `${minutes} minute ago` : `${minutes} minutes ago`;
    }
    else if (timeFromNow > oneHour && timeFromNow < OneDay) {
        const hours = Math.floor(timeFromNow / oneHour)
        return (hours === 1) ? `${hours} hour ago` : `${hours} hours ago`;
    }
    else {
        return euroFormat(date)
    }
};


