local=window.localStorage;
localTotal=local.length;
console.log("set local storage to 'local', holding " + localTotal + " items current");
var timer=0;
var questions=0;
var score=0;
var mistakes=0;
var overallScore=0;

var questionArray=["Commonly used data types DO NOT include:",
   "The condition in an 'if/else' statement is enclosed within _____",
    "Arrays in JavaScript can be used to store _____",
    "String values must be enclosed within _____",
    "A very useful tool used during development and debugging for printing content to the debugger is:"];
var answers1= ["Strings","Booleans","Alerts","Numbers"];
var answers2= ["quotes", "curly brackets", "parentheses","square brackets"];
var answers3= ["numbers and strings","other arrays","booleans","All of the above"];
var answers4= ["commas","curly brackets","quotes","parentheses"];
var answers5= ["JavaScript","Terminal/Bash","For loops","console.log"];

$("#q1").hide();
$("#q2").hide();
$("#q3").hide();
$("#q4").hide();
$("#scoreBtn").hide();
$("#scoreboard").hide();
$("#subjectName").hide();


$("#start").click(function() {
    overallScore = 75;
    countdown(overallScore);
    questions = 0;
    quizReady();
}
);

function quizReady(){
    $("#title").html("");
    $("#questiontext").html("");
    $("#start").hide();
    $("#q1").show();
    $("#q2").show();
    $("#q3").show();
    $("#q4").show();
    $("#hiscores").hide();
startQuiz();
};

function endQuiz(){
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#q4").hide();
    $("#answerMessage").html("");
if(timer > 0){
    overallScore=timer;
    hiscoreEntry(overallScore);
} else{
    $("#title").html("<h1>Practice Coding Quiz</h1>");
    $("#questionText").html("<p>Answer the following questions correctly to complete the quiz within the time limit.</p>");
    $("#start").show();
    $("#scoreboard").show();
    $("#hiscores").hide();
    $("#subjectName").hide();
}
timer=0;
return;
}

function startQuiz(){
    if (questions>4){
        endQuiz();
        return;
    }
    setQuestion(questions);
}
function hiscoreEntry(s){
    score= s;
$("#title").html("<h1>Quiz complete.</h1>");
$("#questionText").html("Your total score is: " + score);
$("#subjectName").show();
}
$("#submit").click(() => {
    var tempName = $("#username").val();
    enterScore(tempName, score);
    displayHiscores();
}
);

$("#q1").click(()=>{
if (questions==0){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==1){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==2){
    questions++;
    wrong();
    startQuiz();
}else if (questions==3){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==4){
    questions++;
    wrong();
    startQuiz();
};
});

$("#q2").click(()=>{
if (questions==0){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==1){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==2){
    questions++;
    wrong();
    startQuiz();
}else if (questions==3){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==4){
    questions++;
    wrong();
    startQuiz();
};
});

$("#q3").click(()=>{
if (questions==0){
    questions++;
    correct();
    startQuiz();
}
else if (questions==1){
    questions++;
    correct();
    startQuiz();
}
else if (questions==2){
    questions++;
    wrong();
    startQuiz();
}else if (questions==3){
    questions++;
    correct();
    startQuiz();
}
else if (questions==4){
    questions++;
    wrong();
    startQuiz();
};
});

$("#q4").click(()=>{
if (questions==0){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==1){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==2){
    questions++;
    correct();
    startQuiz();
}else if (questions==3){
    questions++;
    wrong();
    startQuiz();
}
else if (questions==4){
    questions++;
    correct();
    startQuiz();
};
});

$("#hiscores").click(() =>{
    displayHiscores();
});
$("#return").click(() =>{
$("#scoreBtn").hide();
$("#scoreboard").html("");
endQuiz();
});
$("#clearHS").click(()=>{
local.clear();
$("#scoreBtn").hide();
endQuiz();
location.reload();
});

function displayHiscores(){
$("#hiscores").hide();
$("#start").hide();
$("#title").html("<h1>Hiscores<?h1>");
$("#subjectName").hide();
$("#subjectName").val("");
$("#questionText").html("");
$("#scoreboard").show();
$("#scoreBtn").show();
 
if(localTotal>0){
    addScores();
}}

function addScores(){
    let scorray=[];
 for (let i = 0; i < localTotal+1; i++) {
let holder = JSON.parse(local.getItem([i]));
 if (holder == null) {
    console.log("Null Value");
 } else {
    scorray[i] = holder;
    console.log(scorray[i]);
        }
    }

    if (scorray.length > 0) {
        $("#scoreboard").append("<ol>");
        for (let i = 0; i < localTotal+1; i++) {
            console.log()
            if (scorray[i] == null) {
                //
            } else {
                let tempObj = scorray[i];
                console.log(tempObj.newScore)
                $("#scoreboard").append("<li>" + tempObj.newName + " - " + tempObj.newScore + "</li>");
            }
        }
        $("#scoreboard").append("</ol>");
}}

function enterScore(newName, newScore) {
    var key = localTotal + 1;
    var hiscore = {newName, newScore};
    local.setItem(key, JSON.stringify(hiscore));
    console.log(local.getItem(key));
    localTotal++;
}

function wrong(){
    $("#answerMessage").html("<br><h3><strong>FALSE.</strong><h3>")
    for(let i=0; i<10; i++){
        timer--;
    }
    mistakes++;
}
function correct(){
    $("#answerMessage").html("<br><h3><i>Correct :)</i><h3>")
}

function setQuestion(num){
    let thisQuestion=questionArray[num];
    $("#title").html("<h1>"+thisQuestion+"</h1>");

if (num==0){
    $("#q1").html("a. "+ answers1[0]);
    $("#q2").html("b. "+ answers1[1]);
    $("#q3").html("c. "+ answers1[2]);
    $("#q4").html("d. "+ answers1[3]);
}
if (num==1){
    $("#q1").html("a. "+ answers2[0]);
    $("#q2").html("b. "+ answers2[1]);
    $("#q3").html("c. "+ answers2[2]);
    $("#q4").html("d. "+ answers2[3]);
}
if (num==2){
    $("#q1").html("a. "+ answers3[0]);
    $("#q2").html("b. "+ answers3[1]);
    $("#q3").html("c. "+ answers3[2]);
    $("#q4").html("d. "+ answers3[3]);
}
if (num==3){
    $("#q1").html("a. "+ answers4[0]);
    $("#q2").html("b. "+ answers4[1]);
    $("#q3").html("c. "+ answers4[2]);
    $("#q4").html("d. "+ answers4[3]);
}
if (num==4){
    $("#q1").html("a. "+ answers5[0]);
    $("#q2").html("b. "+ answers5[1]);
    $("#q3").html("c. "+ answers5[2]);
    $("#q4").html("d. "+ answers5[3]);
}
}

function countdown(t) {
timer = t;
let countdownInterval = setInterval(() => {

    if (timer < 0) {
        clearInterval(countdownInterval);
 } 
    else {
            $("#timer").html("Time Left: " + timer);
            timer--;
        }
    }, 1000);
}
