var today = moment().format('dddd, MMMM Do');
// var currentTime = moment().format('LT');
var currentTime = moment().format('h A');
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

    // Grabs text of event that is being saved
    var clickedEvent = eventBlockArr[clickedIndex].value;

    // Grabs timeslot where event was saved
    var clickedTime = timeArr[clickedIndex].textContent;

    // Saved items go to localStorage
    storedItems = JSON.parse(localStorage.getItem("key")) || [];
    storedItems.push({Time: clickedTime, Event: clickedEvent});
    storedItems = JSON.stringify(storedItems);
    localStorage.setItem("key", storedItems);
})

function viewSavedPlans() {
    // Grabs saved items from localStorage
    storedItems = JSON.parse(localStorage.getItem("key"));
    console.log(storedItems);
    console.log(storedItems[0].Time);

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

// past time events are left gray

// currentTime = parseInt(currentTime);

// console.log($(".col-1").text())
// console.log($(".time"));

// var timeArr = document.querySelectorAll(".time");
// console.log(timeArr);


// Time block colors
// for (var i=0; i < timeArr.length; i++) {

//     var timeblock = timeArr[i].textContent;

//     if (timeblock == currentTime) {
//         // Current time block is red
//         eventBlockArr.eq(i).css({"background": "#FFE5E4", "color": "#ff5349", "border-top": "2px solid #ff5349", "border-bottom": "2px solid #ff5349"});
//         eventBlockArr.eq(i).addClass("lead");
        
//         // Past time blocks are gray
//         pastTimeArr = eventBlockArr.slice(0, i);
//         for (j=0; j < pastTimeArr.length; j++) {
//             pastTimeArr.eq(j).css("background", "#f2f2f2");
//         } 
//     }
// }

// Time block colors
for (var i=0; i < timeArr.length; i++) {

    var timeblock = timeArr[i].textContent;
    timeblock = moment(timeblock, 'h A');
    // console.log(timeblock);

    if (timeblock._i == currentTime) {
        // Current time block is red
        eventBlockArr.eq(i).css({"background": "#FFE5E4", "color": "#ff5349", "border-top": "2px solid #ff5349", "border-bottom": "2px solid #ff5349"});
        eventBlockArr.eq(i).addClass("lead");
        
    } 
    else if (timeblock._i < currentTime) {
        eventBlockArr.eq(i).css("background", "#f2f2f2")
    } else {
        eventBlockArr.eq(i).css("background", "#b5e2ff")
    }
}

// DON'T DELETE LINE 53