const thisYear = document.getElementById('this-year');
const thisMonth = document.getElementById('this-month');
const thisWeek = document.getElementById('this-week');
const today = document.getElementById('today');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let year = document.getElementById('year');
let month = document.getElementById('month');
let days = document.getElementById('days');
let month1 = document.getElementById('month1');
let month2 = document.getElementById('month2');
let month3 = document.getElementById('month3');
let month4 = document.getElementById('month4');
let month5 = document.getElementById('month5');
let month6 = document.getElementById('month6');
let month7 = document.getElementById('month7');
let month8 = document.getElementById('month8');
let month9 = document.getElementById('month9');
let month10 = document.getElementById('month10');
let month11 = document.getElementById('month11');
let month12 = document.getElementById('month12');
thisYear.addEventListener('click', function () {
    displayCalendar(displayYear = now.getFullYear());
});
thisMonth.addEventListener('click', function () { });
prev.addEventListener('click', function () {
    displayCalendar(displayYear -= 1);
});
next.addEventListener('click', function () {
    displayCalendar(displayYear += 1);
});
const now = new Date();
let displayYear = now.getFullYear();
displayCalendar(displayYear);

function displayCalendar(setCalendarYear) {
    let calendar = [];
    for (let i = 0; i < 12; i++) {
        // month1.style.visibility = 'hidden';
        // month2.style.visibility = 'hidden';
        // month3.style.visibility = 'hidden';
        // month4.style.visibility = 'hidden';
        // month5.style.visibility = 'hidden';
        // month6.style.visibility = 'hidden';
        // month7.style.visibility = 'hidden';
        // month8.style.visibility = 'hidden';
        // month9.style.visibility = 'hidden';
        // month10.style.visibility = 'hidden';
        // month11.style.visibility = 'hidden';
        // month12.style.visibility = 'hidden';
        calendar[i] = new Date(setCalendarYear, 0);
        year.innerHTML = calendar[i].getFullYear() + '年';
        calendar[i].setDate(1);
        calendar[i].setMonth(i);
        switch (i) {
            case 0:
                month1.innerHTML = displayMonth(calendar[i]);
                break;
            case 1:
                month2.innerHTML = displayMonth(calendar[i]);
                break;
            case 2:
                month3.innerHTML = displayMonth(calendar[i]);
                break;
            case 3:
                month4.innerHTML = displayMonth(calendar[i]);
                break;
            case 4:
                month5.innerHTML = displayMonth(calendar[i]);
                break;
            case 5:
                month6.innerHTML = displayMonth(calendar[i]);
                break;
            case 6:
                month7.innerHTML = displayMonth(calendar[i]);
                break;
            case 7:
                month8.innerHTML = displayMonth(calendar[i]);
                break;
            case 8:
                month9.innerHTML = displayMonth(calendar[i]);
                break;
            case 9:
                month10.innerHTML = displayMonth(calendar[i]);
                break;
            case 10:
                month11.innerHTML = displayMonth(calendar[i]);
                break;
            case 11:
                month12.innerHTML = displayMonth(calendar[i]);
                break;
        }
    }

    function displayMonth(calendar) {
        let calendarTable = '';
        let calendarMonth = calendar.getMonth();
        let calendarDay = calendar.getDay();
        calendarTable += '<table><caption>' + (calendar.getMonth() + 1) + '月</caption>';
        calendarTable += '<colgroup id="sun" style="background-color:orange;"></colgroup><colgroup id="mon"></colgroup><colgroup id="tus"></colgroup><colgroup id="wen"></colgroup><colgroup id="thu"></colgroup><colgroup id="fri"></colgroup><colgroup id="sat" style="background-color:aqua;"></colgroup>'
        calendarTable += '<!--<thead><tr><th style="color:red;">日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th style="color:blue;">土</th></tr></thead>--><tbody>';
        for (let i = 0; i < 42; i++) {
            if (i % 7 === 0) {
                calendarTable += '<tr>';
            }
            if (i >= calendarDay && calendarMonth === calendar.getMonth()) {
                if (now.getFullYear() === calendar.getFullYear() && now.getMonth() === calendar.getMonth() && now.getDate() === calendar.getDate()) {
                    // 今日を表示
                    calendarTable += '<td style="font-weight:bold;color:red;background-color:yellow;">' + calendar.getDate() + '</td>';
                } else {
                    calendarTable += '<td>' + calendar.getDate() + '</td>';
                }
                calendar.setTime(calendar.getTime() + 86400000);
            } else {
                calendarTable += '<td>　</td>';
            }
            if (i % 7 === 6) {
                calendarTable += '</tr>';
            }
        }
        calendarTable += '</tbody></table>';
        console.log(calendarTable);
        return calendarTable;
    }
    // setTimeout(function(){
    //     month1.style.visibility = 'visible';
    // }, 20);
    // setTimeout(function(){
    //     month2.style.visibility = 'visible';
    // }, 40);
    // setTimeout(function(){
    //     month3.style.visibility = 'visible';
    // }, 60);
    // setTimeout(function(){
    //     month4.style.visibility = 'visible';
    // }, 80);
    // setTimeout(function(){
    //     month5.style.visibility = 'visible';
    // }, 100);
    // setTimeout(function(){
    //     month6.style.visibility = 'visible';
    // }, 120);
    // setTimeout(function(){
    //     month7.style.visibility = 'visible';
    // }, 140);
    // setTimeout(function(){
    //     month8.style.visibility = 'visible';
    // }, 160);
    // setTimeout(function(){
    //     month9.style.visibility = 'visible';
    // }, 180);
    // setTimeout(function(){
    //     month10.style.visibility = 'visible';
    // }, 200);
    // setTimeout(function(){
    //     month11.style.visibility = 'visible';
    // }, 220);
    // setTimeout(function(){
    //     month12.style.visibility = 'visible';
    // }, 240);
}
