$(document).ready(function() {

//Current date format
var cTime= moment().format("dddd,MMMM, YYYY")
$("currentDay").append(cTime)

//curent time
var businessHoursMil = [
    "09",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
]
var milHour = moment().format("HH")

//Save Button
$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    let entryId = parseInt($(this).closest('.time-block').attr('id'));
    let newEntry = $.trim($(this).parent().find('textarea').val());
    workDay[entryId].event = newEntry;
    localStorage.setItem(entryId, newEntry);
}
