var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var isTriangleBtn = document.querySelector("#isTriangleBtn");
var result = document.querySelector("#result");
var error = document.querySelector("#error");

isTriangleBtn.addEventListener("click", function isTriangle(){
    if(angle1.value.length === 0 || angle2.value.length === 0 || angle2.value.length === 0 ){
        error.innerText = "Enter all the values";
        result.innerText = "";
    }
    else if (parseInt(angle1.value) <= 0 || parseInt(angle2.value) <= 0 || parseInt(angle3.value ) <= 0){
        error.innerText = "All the values should be > 0";
        result.innerText = "";
    }

    else{
        error.innerText = "";
        console.log(parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value))
        if(parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value) === 180){
            result.innerText = "The given angles form a Triangle";
        }
        else{
            error.innerText = "The given angles don't form a Triangle";
        }
    }
    
})