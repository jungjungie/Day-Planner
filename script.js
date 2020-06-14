var today = moment().format('dddd, MMMM Do');
// var currentTime = moment().format('LT');
var currentTime = moment().hour();
var timeArr = $(".time");
var eventBlockArr = $("textarea");
var saveBtnArr = $(".saveBtn");
// var pastTimeArr = [];
var storedItems = [];

// Sets current date at top of page
$("#currentDay").text(today);

// Series of events when save button is clicked
$(".saveBtn").on("click", function () {
    // console.log(event); 

    // Grabs index of save button that was clicked
    var clickedIndex = saveBtnArr.index($(this));
    clickedIndex = parseInt(clickedIndex);

    // Grabs text & timeslot of event that is being saved
    var clickedEvent = $(eventBlockArr[clickedIndex]).val();
    var clickedTime = $(timeArr[clickedIndex]).text();
    console.log(clickedEvent);
    console.log(clickedTime);

    // Saved items go to localStorage
    storedItems = JSON.parse(localStorage.getItem("key")) || [];
    storedItems.push({Time: clickedTime, Event: clickedEvent});
    storedItems = JSON.stringify(storedItems);
    localStorage.setItem("key", storedItems);
})

function viewSavedPlans() {
    // Grabs saved items from localStorage
    storedItems = JSON.parse(localStorage.getItem("key")) || [];
    console.log(storedItems);
    // console.log(storedItems[0].Time);

    // If saved item key (Time) = a time slot in timeArr, event gets populated into that event slot
    for (var i=0; i < storedItems.length; i++) {
        for (var j=0; j < timeArr.length; j++) {
            if (storedItems[i].Time == timeArr[j].textContent) {
                eventBlockArr[j].textContent = storedItems[i].Event;
            }
        }
    }
}
viewSavedPlans();

// Time block colors
for (var i=0; i < timeArr.length; i++) {

    const hr = i + 9;

    var timeblock = timeArr[i].textContent;
    //timeblock = moment(timeblock, 'h A');
    //console.log(timeblock);
    console.log(`hour: ${hr} timeblock: ${timeblock}`)
    if (hr == currentTime) {
        // Current time block is red
        eventBlockArr.eq(i).css({"background": "#FFE5E4", "color": "#ff5349", "border-top": "2px solid #ff5349", "border-bottom": "2px solid #ff5349"});
        eventBlockArr.eq(i).addClass("lead");
    } 
    // If past time, color is gray
    else if (hr < currentTime) {
        eventBlockArr.eq(i).css("background", "#f2f2f2")
    } 
    // If upcoming time, color is blue
    else {
        eventBlockArr.eq(i).css("background", "#b5e2ff")
    }
}