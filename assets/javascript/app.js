//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var countdown
var timeLeft
var clockRunning = false;
var radioValue;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

// Variable (object) holding our questions
var questions = {
    1: {
        q: "The capital city of the Dominican Republic is:",
        a1: "Havana",
        a2: "Key West",
        a3: "Hispanola",
        a4: "Santo Domingo",
        a: "a4"
    },
    2: {
        q: "The historic central neighborhood of Santo Domingo is called:",
        a1: "Zona Colonial",
        a2: "Las Ramblas",
        a3: "El Tepeyac",
        a4: "Santa Maria",
        a: "a1"
    },
    3: {
        q: "Which nation does not border the Czech Republic?",
        a1: "Germany",
        a2: "Austria",
        a3: "Switzerland",
        a4: "Slovakia",
        a: "a3"
    }
}

function startGame() {

    clockRunning = true;

    countdown = 60;
    $('#top').html("Time remaining: " + countdown + " Seconds");
    
    // COUNTDOWN BEGINS
    intervalId = setTimeout(results, 60000);
    
    // DISPLAY COUNTDOWN
    if (clockRunning) {
        down = setInterval(count, 1000);
    }

    // CALL FUNCTION TO DISPLAY QUESTIONS
    dispQandA();
}

function stop() {
    clearInterval(down);
    clockRunning = false;
}

function dispQandA() {
    // CREATE AND SAVE A REFERENCE TO NEW <P> FOR QUESTION
    const newLine = $('<p>');

    for (let i = 1; i < Object.keys(questions).length + 1; i++) {
        const dispQ = $('<br> <br><p>' + questions[i].q + '<br>');
        const dispA1 = $('<input type="radio" value="a1" name="'+i+'"> ' + questions[i].a1 + '<br>');
        const dispA2 = $('<input type="radio" value="a2" name="'+i+'"> ' + questions[i].a2 + '<br>');
        const dispA3 = $('<input type="radio" value="a3" name="'+i+'"> ' + questions[i].a3 + '<br>');
        const dispA4 = $('<input type="radio" value="a4" name="'+i+'"> ' + questions[i].a4 + '<br>');
        
        // APPEND THE MAIN DIV
        $('#main').append(dispQ);
        $('#main').append(dispA1);
        $('#main').append(dispA2);
        $('#main').append(dispA3);
        $('#main').append(dispA4);
    }

    //DISPLAY 'DONE' BUTTON
    $('#main').append("<br><br><button id='done'>DONE</button>");
    $("#done").on('click', results);
}

function count() {
    // DECREMEMT LEFT BY 1
    countdown--

    // SEND TIMELEFT TO DISPLAY
    $('#top').html("Time remaining: " + countdown + " Seconds");
}

function results() {
    stop();
    clockRunning = false;
    $('#top').html("Game Over!");

    // CALCULATE ANSWERS
    radioValue = $("input[name='1']:checked").val();

    for (let i = 1; i < Object.keys(questions).length + 1; i++) {
        radioValue = $("input[name='" + i +"']:checked").val();
        if (radioValue === questions[i].a) {
            correctCount++;
        } else if (radioValue === undefined) {
            unansweredCount++;

        } else {
            incorrectCount++;
        }
    }

    //DISPLAY RESULTS
    $("#main").html("<br>Correct Answers: " + correctCount);
    $("#main").append("<br><br>Incorrect Answers: " + incorrectCount);
    $("#main").append("<br><br>Unanswered Answers: " + unansweredCount);
}

// COUNTDOWN BEGINS ON CLICK BUTTON (120 SECONDS?)
$("#start").on('click', startGame);
