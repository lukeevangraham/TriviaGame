//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var countdown
var timeLeft

// Variable (object) holding our questions
var questions = {
    1: {
        q: "The capital city of the Dominican Republic is:",
        a1: "Havana",
        a2: "Key West",
        a3: "Hispanola",
        a4: "Santo Domingo",
        a: "a2"
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

    countdown = 5;
    
    // COUNTDOWN BEGINS
    intervalId = setTimeout(results, 5000);
    
    // DISPLAY COUNTDOWN
    down = setInterval(count, 1000);

    dispQandA();
}

function dispQandA() {
    // CREATE AND SAVE A REFERENCE TO NEW <P> FOR QUESTION
    const newLine = $('<p>');
    
    // CREATE AND SAVE REFERENCES TO QUESTIONS AND CHOICES FROM OBJECT
    const dispQ = $('<br> <br><p>' + questions[1].q + '</p>');
    const dispA1 = $('<p>' + questions[1].a1 + '</p>');
    const dispA2 = $('<p>' + questions[1].a2 + '</p>');
    const dispA3 = $('<p>' + questions[1].a3 + '</p>');
    const dispA4 = $('<p>' + questions[1].a4 + '</p>');
    
    // APPEND THE MAIN DIV
    $('#main').append(dispQ);
    $('#main').append(dispA1);
    $('#main').append(dispA2);
    $('#main').append(dispA3);
    $('#main').append(dispA4);
    
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
    $('#main').html("Game Over!");
}

// COUNTDOWN BEGINS ON CLICK BUTTON (120 SECONDS?)
$("#start").on('click', startGame);



// GAME ENDS WHEN TIME RUNS OUT


// CALCULATE NUMBER OF CORRECT AND INCORRECT ANSWERS

// 