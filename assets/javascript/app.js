//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var countdown
var timeLeft
var clockRunning = false;
var radioValue;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var questionsDisplayed = 1;

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
    },
    4: {
        q: "Budapest is:",
        a1: "a city in Hungary",
        a2: "a capital city",
        a3: "named after two towns on opposite sides of a river",
        a4: "all of the above",
        a: "a4"
    },
    5: {
        q: "Which is a famous landmark in Rome?",
        a1: "Ponte Vecchio",
        a2: "Spanish Steps",
        a3: "Eiffel Tower",
        a4: "Rialto Bridge",
        a: "a2"
    },
    6: {
        q: "The world's most visited coutry by tourists is:",
        a1: "United States",
        a2: "France",
        a3: "United Kingdom",
        a4: "China",
        a: "a2"
    },
    7: {
        q: "Which is one of the 'A B C Islands' in the Carribean?",
        a1: "Madagascar",
        a2: "Corsica",
        a3: "Antigua",
        a4: "Bonaire",
        a: "a4"
    },
    8: {
        q: "Which powerful family is associated with Vienna?",
        a1: "Hapsburgs",
        a2: "Medicis",
        a3: "Romanovs",
        a4: "Rosevelts",
        a: "a1"
    }
}

function startGame() {

    clockRunning = true;

    countdown = 30;
    $('#top').html("Time remaining: " + countdown + " Seconds");
    
    // COUNTDOWN BEGINS
    intervalId = setTimeout(results, 30000);
    
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

    // for (let i = 1; i < Object.keys(questions).length + 1; i++) {
        // const dispQ = $('<br><br>' + questions[questionsDisplayed].q + '<br>');
        // const dispA1 = $('<button value="a1" name="'+questionsDisplayed+'"> ' + questions[questionsDisplayed].a1 + '<br>');
        // const dispA2 = $('<button value="a2" name="'+questionsDisplayed+'"> ' + questions[questionsDisplayed].a2 + '<br>');
        // const dispA3 = $('<button value="a3" name="'+questionsDisplayed+'"> ' + questions[questionsDisplayed].a3 + '<br>');
        // const dispA4 = $('<button value="a4" name="'+questionsDisplayed+'"> ' + questions[questionsDisplayed].a4 + '<br>');
        
        
        
        const dispQ = $('<br><br>' + questions[questionsDisplayed].q + '<br>');
        const dispA1 = $('<span onclick="questionReview(`a1`)"> ' + questions[questionsDisplayed].a1 + '<br>');
        const dispA2 = $('<span onclick="questionReview(`a2`)"> ' + questions[questionsDisplayed].a2 + '<br>');
        const dispA3 = $('<span onclick="questionReview(`a3`)"> ' + questions[questionsDisplayed].a3 + '<br>');
        const dispA4 = $('<span onclick="questionReview(`a4`)"> ' + questions[questionsDisplayed].a4 + '<br>');
        

        // APPEND THE MAIN DIV
        $('#main').append(dispQ);
        $('#main').append(dispA1);
        $('#main').append(dispA2);
        $('#main').append(dispA3);
        $('#main').append(dispA4);
    // }

    //DISPLAY 'DONE' BUTTON
    $('#main').append("<br><br><button id='done'>DONE</button><br><br>");
    $("#done").on('click', results);

}

function count() {
    // DECREMEMT LEFT BY 1
    countdown--

    // SEND TIMELEFT TO DISPLAY
    $('#top').html("Time remaining: " + countdown + " Seconds");
}

function questionReview(answer) {
    console.log("ANSWER: ", answer)
    answer === questions[questionsDisplayed].a ? console.log("Correct!") : console.log("Incorrect!")
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

// COUNTDOWN BEGINS ON CLICK BUTTON (30 SECONDS?)
$("#start").on('click', startGame);
