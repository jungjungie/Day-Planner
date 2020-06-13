var today = moment().format('dddd, MMMM Do');
var currentTime = moment().format('LT');

$("#currentDay").text(today);

// add events to save buttons
$(".saveBtn").on("click", function () {

    // When save is clicked, event text gets saved in localstorage
    localStorage.setItem("event", $(".event").text);

    console.log(event); 
    console.log(event.target.value); 

    console.log(window);
    console.log($("#text10").text());
})
    
    // Save items are retrived from localstorage and displayed on screen

// past time events are left gray

currentTime = parseInt(currentTime);

// console.log($(".col-1").text())
// console.log($(".time"));

// var timeArr = document.querySelectorAll(".time");
// console.log(timeArr);

var timeArr = $(".time");
var eventBlockArr = $("textarea");
var pastTimeArr = [];

for (var i=0; i < timeArr.length; i++) {

    var timeblock = timeArr[i].textContent;
    // 9 , 10, 11 , 12 , 1 , 2 , 3 , 4 , 5

    if (timeblock == currentTime) {
        // Current time block is red
        eventBlockArr.eq(i).css({"background": "#FFE5E4", "color": "#ff5349", "border-top": "1px solid #ff5349", "border-bottom": "1px solid #ff5349"});
        eventBlockArr.eq(i).addClass("lead");
        
        // Previous time blocks are gray
        pastTimeArr = eventBlockArr.slice(0, i);
        for (j=0; j < pastTimeArr.length; j++) {
            pastTimeArr.eq(j).css("background", "#f2f2f2");
        } 
    }
}