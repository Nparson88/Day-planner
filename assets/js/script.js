// declare variables for the save button and day display
var saveButton = $('.saveBtn')
var displayDate = $('#currentDay')

// function that grabs the day of the week and the date 
$(document).ready(function () {
    var date = moment().format('dddd MMMM Do');

    $(displayDate).text(date);
});
// function that changes the color for the time block depending on the hour of day
function timedisplay() {
    var current = moment().hours();
    var time = $('.time-block');

    time.each(function () {
        var hour = parseInt($(this).attr('id'))
        // changes color to grey for past
        if (current > hour) {
            $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
            // changes time block to red for the current hour of day 
        } else if (hour === current) {
            $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
            //changes color ot green for future
        } else {
            $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')

        }
    })
}
timedisplay();
// function to display saved task in time block
function displayTask() {
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".description").val(schedule);
        }

    })
}
displayTask();
// function to save task to display later
saveButton.on('click', function () {
    var currentTime = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();
    localStorage.setItem(currentTime, task);
});
