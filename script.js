//Show time
var currentDate = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(currentDate);

//Save to storage on click
$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.textarea').val();
    console.log(text);
    var time = $(this).siblings('.time-block')[0].innerText;
    console.log(time);

    localStorage.setItem(time, text);
})

//Load storage
$('#hour-9').val(localStorage.getItem('9AM'))
$('#hour-10').val(localStorage.getItem('10AM'))
$('#hour-11').val(localStorage.getItem('11AM'))
$('#hour-12').val(localStorage.getItem('12PM'))
$('#hour-13').val(localStorage.getItem('1PM'))
$('#hour-14').val(localStorage.getItem('2PM'))
$('#hour-15').val(localStorage.getItem('3PM'))
$('#hour-16').val(localStorage.getItem('4PM'))
$('#hour-17').val(localStorage.getItem('5PM'))

var hour = moment().format('HH')
console.log(hour);

if (hour < 9) {
    $('#hour-9').addClass('future')
} else if (hour == 9) {
    $('#hour-9').addClass('present')
} else {
    $('#hour-9').addClass('past')
};

if (hour < 10) {
    $('#hour-10').addClass('future')
} else if (hour == 10) {
    $('#hour-10').addClass('present')
} else {
    $('#hour-10').addClass('past')
};

if (hour < 11) {
    $('#hour-11').addClass('future')
} else if (hour == 11) {
    $('#hour-11').addClass('present')
} else {
    $('#hour-11').addClass('past')
};

if (hour < 12) {
    $('#hour-12').addClass('future')
} else if (hour == 12) {
    $('#hour-12').addClass('present')
} else {
    $('#hour-12').addClass('past')
};

if (hour < 13) {
    $('#hour-13').addClass('future')
} else if (hour == 13) {
    $('#hour-13').addClass('present')
} else {
    $('#hour-13').addClass('past')
};

if (hour < 14) {
    $('#hour-14').addClass('future')
} else if (hour == 14) {
    $('#hour-14').addClass('present')
} else {
    $('#hour-14').addClass('past')
};

if (hour < 15) {
    $('#hour-15').addClass('future')
} else if (hour == 15) {
    $('#hour-15').addClass('present')
} else {
    $('#hour-15').addClass('past')
};

if (hour < 16) {
    $('#hour-16').addClass('future')
} else if (hour == 16) {
    $('#hour-16').addClass('present')
} else {
    $('#hour-16').addClass('past')
};

if (hour < 17) {
    $('#hour-17').addClass('future')
} else if (hour == 17) {
    $('#hour-17').addClass('present')
} else {
    $('#hour-17').addClass('past')
};
