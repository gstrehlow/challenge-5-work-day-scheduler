// using moment.js to display today's date
var dateToday = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(dateToday);

$(document).ready(function () {
    // this function will allow the saveBtn to be clickable with a click listener, retreive values of the description, and save to local storage
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function timeTrack() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // if and else if statements to check the time and add the classes accordingly to meet the acceptance criteria
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    timeTrack();
})
