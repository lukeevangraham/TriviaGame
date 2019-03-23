//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var countdown
var timeLeft
var clockRunning = false;
var radioValue;
var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;

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
    // // CLEAR THE START BUTTON
    // $('#main').html("");

    clockRunning = true;

    countdown = 10;
    $('#top').html("Time remaining: " + countdown);
    
    // COUNTDOWN BEGINS
    intervalId = setTimeout(results, 5000);
    
    // DISPLAY COUNTDOWN
    if (clockRunning) {
        down = setInterval(count, 1000);
    }

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
    
    // // CREATE AND SAVE REFERENCES TO QUESTIONS AND CHOICES FROM OBJECT
    // const dispQ = $('<br> <br><p>' + questions[1].q + '</p>');
    // const dispA1 = $('<p>' + questions[1].a1 + '</p>');
    // const dispA2 = $('<p>' + questions[1].a2 + '</p>');
    // const dispA3 = $('<p>' + questions[1].a3 + '</p>');
    // const dispA4 = $('<p>' + questions[1].a4 + '</p>');
    
    // // APPEND THE MAIN DIV
    // $('#main').append(dispQ);
    // $('#main').append(dispA1);
    // $('#main').append(dispA2);
    // $('#main').append(dispA3);
    // $('#main').append(dispA4);
    
}

function count() {
    // DECREMEMT TIMELEFT BY 1
    countdown--

    // GET THE CURRENT TIME, PASS THAT INTO THE TIME CONVERTER FUNCTION
    // AND SAVE THE RESULT IN A VARIABLE

    // SEND TIMELEFT TO DISPLAY
    $('#top').html("Time remaining: " + countdown);
}

function results() {
    stop();
    clockRunning = false;
    $('#top').html("Game Over!");

// CALCULATE ANSWERS
radioValue = $("input[name='1']:checked").val();

for (let i = 1; i < Object.keys(questions).length + 1; i++) {
    console.log("another pass")
    radioValue = $("input[name='" + i +"']:checked").val();
    if (radioValue === questions[i].a) {
        correctCount++;
        console.log("right answer");
    } else {
        incorrectCount++;
        console.log("wrong answer");
    }
}

//DISPLAY RESULTS
$("#main").html("<br>Correct Answers: " + correctCount);
$("#main").append("<br><br>Incorrect Answers: " + incorrectCount);



}

// COUNTDOWN BEGINS ON CLICK BUTTON (120 SECONDS?)
$("#start").on('click', startGame);



// GAME ENDS WHEN TIME RUNS OUT


// CALCULATE NUMBER OF CORRECT AND INCORRECT ANSWERS

// 