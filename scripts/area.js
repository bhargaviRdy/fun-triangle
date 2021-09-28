var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var side3 = document.querySelector("#side3");
var calculateAreaBtn = document.querySelector("#calculateAreaBtn");
var result = document.querySelector("#result");
var error = document.querySelector("#error");

calculateAreaBtn.addEventListener("click", function calculateArea() {

    const firstSideValue = Number(side1.value);
    const secondSideValue = Number(side2.value);
    const thirdSideValue = Number(side3.value);

    if (
        firstSideValue + secondSideValue > thirdSideValue &&
        secondSideValue + thirdSideValue > firstSideValue &&
        firstSideValue + thirdSideValue > secondSideValue
    ) {
        const semiPerimeter =
            (firstSideValue + secondSideValue + thirdSideValue) / 2;

        const area = Math.sqrt(
            semiPerimeter *
            (semiPerimeter - firstSideValue) *
            (semiPerimeter - secondSideValue) *
            (semiPerimeter - thirdSideValue)
        ).toFixed(4);
        result.innerText = `Area of a triangle using heron's formula is ${area} units`;
        error.innerText = "";
    } else {
        error.innerText = "Enter all the values with valid side lengths";
        result.innerText = "";
    }
});