var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var calculateHypotenuseBtn = document.querySelector("#calculateHypotenuseBtn");
var result = document.querySelector("#result");
var error = document.querySelector("#error");


function calculateSumOfSquare(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
  }
  
  function calculateHypotenuse() {
    if( Number(side1.value) > 0 &&  Number(side2.value) > 0){
        const sumOfSquares = calculateSumOfSquare(
            Number(side1.value),
            Number(side2.value)
          );
          const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
          result.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
          error.innerText = "";
    }
    else{
        result.innerText = "";
        error.innerText = "Enter all the values with valid lengths"
    }
    
  }


calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);