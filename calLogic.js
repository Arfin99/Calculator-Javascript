
function funcDisplay(calValue){
    cal.display_answer.value+=calValue;
}

function solveEquation(){
    let displayValue = document.getElementById("cal").display_answer.value;
    let result = eval(displayValue);
    document.getElementById("cal").display_answer.value = result;
}

function funcClear(){

    cal.display_answer.value="";
}