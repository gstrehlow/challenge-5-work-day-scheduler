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


})
