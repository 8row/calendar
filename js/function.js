'use strict';

const thisYear = document.getElementById('this-year');
const thisMonth = document.getElementById('this-month');
const today = document.getElementById('today');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const year = document.getElementById('year');
const month = document.getElementById('month');
const days = document.getElementById('days');
const oneYear = document.getElementById('one-year');
const oneMonth = document.getElementById('one-month');
const months = document.getElementById('one-year').querySelectorAll('div');
const now = new Date();
let displayDate = new Date();
let displayMode = 'year';

thisYear.addEventListener('click', function() {
    oneMonth.classList.remove('active');
    oneYear.classList.add('active');
    displayMode = 'year';
    displayDate = new Date();
    displayCalendar(displayDate.getFullYear());
});
thisMonth.addEventListener('click', function() {
    oneYear.classList.remove('active');
    oneMonth.classList.add('active');
    displayMode = 'month';
    displayDate = new Date();
    displayDate.setDate(1);
    year.innerHTML = displayDate.getFullYear() + '年';
    oneMonth.innerHTML = displayMonth(displayDate);
});
prev.addEventListener('click', function() {
    if (displayMode === 'year') {
        displayDate.setFullYear(displayDate.getFullYear() - 1);
        displayCalendar(displayDate.getFullYear());
    } else if (displayMode === 'month') {
        displayDate.setMonth(displayDate.getMonth() - 2);
        year.innerHTML = displayDate.getFullYear() + '年';
        oneMonth.innerHTML = displayMonth(displayDate);
    }
});
next.addEventListener('click', function() {
    if (displayMode === 'year') {
        displayDate.setFullYear(displayDate.getFullYear() + 1);
        displayCalendar(displayDate.getFullYear());
    } else if (displayMode === 'month') {
        year.innerHTML = displayDate.getFullYear() + '年';
        oneMonth.innerHTML = displayMonth(displayDate);
    }
});

months.forEach(function(el, i) {
    el.addEventListener('click', function() {
        if (displayMode === 'year') {
            oneYear.classList.remove('active');
            oneMonth.classList.add('active');
            displayMode = 'month';
            displayDate.setMonth(i);
            displayDate.setDate(1);
            oneMonth.innerHTML = displayMonth(displayDate);
        }
    });
});

displayCalendar(displayDate.getFullYear()); //最初にカレンダーを表示する

function displayCalendar(setCalendarYear) {
    const calendar = [];
    for (let i = 0; i < 12; i++) {
        calendar[i] = new Date(setCalendarYear, 0);
        year.innerHTML = calendar[i].getFullYear() + '年';
        calendar[i].setDate(1);
        calendar[i].setMonth(i);
        months[i].innerHTML = displayMonth(calendar[i]);
    }
}

function displayMonth(calendar) {
    let calendarTable = '';
    const calendarMonth = calendar.getMonth();
    const calendarDay = calendar.getDay();
    calendarTable += '<table><caption>' + (calendar.getMonth() + 1) + '月</caption>';
    calendarTable += '<colgroup id="sun" style="background-color:orange;"></colgroup><colgroup id="mon"></colgroup><colgroup id="tus"></colgroup><colgroup id="wen"></colgroup><colgroup id="thu"></colgroup><colgroup id="fri"></colgroup><colgroup id="sat" style="background-color:aqua;"></colgroup>'
    if (displayMode === 'month') {
        calendarTable += '<thead><tr><th style="color:red;">日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th style="color:blue;">土</th></tr></thead>';
    }
    calendarTable += '<tbody>';
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
