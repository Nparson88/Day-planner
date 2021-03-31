var saveButton = $('.saveBtn')
var displayDate = $('#currentDay')


$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');

  $(displayDate).text(date);
});
function timedisplay() {
  var current = moment().hours();
  var time = $('.time-block');

  time.each(function () {
    var hour = parseInt($(this).attr('id'))
    
    if (hour === current) {
      $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
      
    } else if (current > hour) {
      $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
    
    } else {
      $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')

    }
  })
}
timedisplay();
function saveTask() {
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var schedule = localStorage.getItem(id);

    if (schedule !== null) {
      $(this).children(".description").val(schedule);
    }

  })
}
saveTask();

saveButton.on('click', function () {
  var currentTime = $(this).parent().attr("id");
  var task = $(this).siblings(".description").val();
  localStorage.setItem(currentTime, task);
});
