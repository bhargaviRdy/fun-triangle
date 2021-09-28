const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");
var error = document.querySelector("#error");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
];

function calculateScore() {
    const formResults = new FormData(quizform);
    var counter = 0;
    
    let score = 0, index = 0;
    for (let value of formResults.values()) {
        counter += 1;
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    if (counter != 10) {
        result.innerText = "";
        error.innerText = "answer all the questions";
    }
    else {
        result.innerText = "your score is " + score;
        error.innerText = "";
    }

}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    calculateScore()
});
