//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var questionCountdown;
var timeLeft;
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
    a: "a4",
    pic: "./assets/images/santodomingo.jpg"
  },
  2: {
    q: "The historic central neighborhood of Santo Domingo is called:",
    a1: "Zona Colonial",
    a2: "Las Ramblas",
    a3: "El Tepeyac",
    a4: "Santa Maria",
    a: "a1",
    pic: "./assets/images/zona_colonial.jpg"
  },
  3: {
    q: "Which nation does not border the Czech Republic?",
    a1: "Germany",
    a2: "Austria",
    a3: "Switzerland",
    a4: "Slovakia",
    a: "a3",
    pic: "./assets/images/czech-republic-map.jpg"
  },
  4: {
    q: "Budapest is:",
    a1: "a city in Hungary",
    a2: "a capital city",
    a3: "named after two towns on opposite sides of a river",
    a4: "all of the above",
    a: "a4",
    pic: "./assets/images/budapest.jpg"
  },
  5: {
    q: "Which is a famous landmark in Rome?",
    a1: "Ponte Vecchio",
    a2: "Spanish Steps",
    a3: "Eiffel Tower",
    a4: "Rialto Bridge",
    a: "a2",
    pic: "./assets/images/spanish-steps.jpg"
  },
  6: {
    q: "The world's most visited coutry by tourists is:",
    a1: "United States",
    a2: "France",
    a3: "United Kingdom",
    a4: "China",
    a: "a2",
    pic: "./assets/images/france.jpg"
  },
  7: {
    q: "Which is one of the 'A B C Islands' in the Carribean?",
    a1: "Madagascar",
    a2: "Corsica",
    a3: "Antigua",
    a4: "Bonaire",
    a: "a4",
    pic: "./assets/images/bonaire.jpg"
  },
  8: {
    q: "Which powerful family is associated with Vienna?",
    a1: "Hapsburgs",
    a2: "Medicis",
    a3: "Romanovs",
    a4: "Rosevelts",
    a: "a1",
    pic: "./assets/images/vienna.jpg"
  }
};

function resetGame() {
  clearInterval(down);
  correctCount = 0;
  incorrectCount = 0;
  unansweredCount = 0;
  questionsDisplayed = 1;
  startGame();
}

function startGame() {
  clearTimeout(intervalId);
  clockRunning = true;

  questionCountdown = 30;
  $("#top").html(
    "<span class='xLargeFont'>Time remaining: " +
      questionCountdown +
      " Seconds</span>"
  );

  // DISPLAY COUNTDOWN
  if (clockRunning) {
    down = setInterval(count, 1000);
  }

  // COUNTDOWN BEGINS
  intervalId = setTimeout(questionReview, 30000);

  // CALL FUNCTION TO DISPLAY QUESTIONS
  dispQandA();
}

function stop() {
  clearInterval(down);
  clockRunning = false;
}

function dispQandA() {
  // CREATE AND SAVE A REFERENCE TO NEW <P> FOR QUESTION
  const newLine = $("<p>");

  const dispQ = $(
    "<br><p class='xLargeFont question'>" +
      questions[questionsDisplayed].q +
      "</p><br>"
  );
  const dispA1 = $(
    '<button class="btn-block btn-light" onclick="questionReview(`a1`)"> ' +
      questions[questionsDisplayed].a1 +
      "<br>"
  );
  const dispA2 = $(
    '<button class="btn-block btn-light" onclick="questionReview(`a2`)"> ' +
      questions[questionsDisplayed].a2 +
      "<br>"
  );
  const dispA3 = $(
    '<button class="btn-block btn-light" onclick="questionReview(`a3`)"> ' +
      questions[questionsDisplayed].a3 +
      "<br>"
  );
  const dispA4 = $(
    '<button class="btn-block btn-light" onclick="questionReview(`a4`)"> ' +
      questions[questionsDisplayed].a4 +
      "<br>"
  );

  // APPEND THE MAIN DIV
  $("#main").html(dispQ);
  $("#main").append(dispA1);
  $("#main").append(dispA2);
  $("#main").append(dispA3);
  $("#main").append(dispA4);
  // }
}

function count() {
  // DECREMEMT LEFT BY 1
  questionCountdown--;

  // SEND TIMELEFT TO DISPLAY
  $("#top").html(
    "<span class='xLargeFont'>Time remaining: " +
      questionCountdown +
      " Seconds</span>"
  );
}

function questionReview(guess) {
  clearTimeout(intervalId);

  intervalId = setTimeout(results, 5000);

  correctAnswer = questions[questionsDisplayed].a;
  stop();
  //   clockRunning = false;

  if (guess === questions[questionsDisplayed].a) {
    correctCount++;
    $("#main").html(
      `<br><p class="xLargeFont">Correct!</p><img class='photo' src="` +
        questions[questionsDisplayed].pic +
        `" alt="">`
    );
  } else if (guess === undefined) {
    unansweredCount++;
    $("#main").html(
      `<br><span>Out of Time!</span><br><br><p>The correct answer was: ` +
        questions[questionsDisplayed][correctAnswer] +
        `</p><img class='photo' src="` +
        questions[questionsDisplayed].pic +
        `" alt="">`
    );
  } else {
    incorrectCount++;
    $("#main").html(
      `<br><span>Nope!</span><br><br><p>The correct answer was: ` +
        questions[questionsDisplayed][correctAnswer] +
        `</p><img class='photo' src="` +
        questions[questionsDisplayed].pic +
        `" alt="">`
    );
  }
}

function results() {
  clearTimeout(intervalId);
  clearInterval(down);
  clockRunning = false;
  if (questionsDisplayed < 8) {
    questionsDisplayed++;
    startGame();
  } else {
    stop();
    clockRunning = false;
    $("#top").html("<span class='xLargeFont'>Game Over!");

    //DISPLAY RESULTS
    $("#main").html("<br>Correct Answers: " + correctCount);
    $("#main").append("<br><br>Incorrect Answers: " + incorrectCount);
    $("#main").append("<br><br>Unanswered Answers: " + unansweredCount);
    $("#main").append('<br><br><button class="btn-block btn-light xLargeFont" id="resetGame">Start Over?</button>');
    $("#resetGame").on("click", resetGame);
  }
}

// COUNTDOWN BEGINS ON CLICK BUTTON (30 SECONDS?)
$("#start").on("click", startGame);
$("#resetGame").on("click", resetGame);
