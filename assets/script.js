var plannerText;
var plannerTime;
var saveBtn = $('.saveBtn');

var renderDate = function() {
    $('#currentDay').text('Today is ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
}

renderDate();
saveBtn.on("click", function()
{   console.log(this);
    plannerText = $(this).siblings('.description').val();
    plannerTime = $(this).parent().attr('id');

    localStorage.setItem(plannerTime, plannerText);
})


$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));


function scheduler(){
var currentTime = moment().hour();

$(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

})
}
scheduler();