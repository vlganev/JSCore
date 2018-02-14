function nextDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let oneDay = 24*60*60*1000;
    let nextDay = new Date(date.getTime() + oneDay);
    return nextDay.getFullYear() + "-" + (nextDay.getMonth()+1) + "-" + nextDay.getDate();
}