function getActualYear(){
    let result = document.getElementById("result");
    let year = document.getElementById("year");
    let current_year = new Date().getFullYear();
    year.innerHTML = current_year;
    result.innerHTML = "";
}


function factorialCalculate(event){
    event.preventDefault();
    let number = document.getElementById("number");
    let result = document.getElementById("result");
    let factorial = 1;

    for (let i = 1; i <= number.value; i++){
        factorial *= i;
    }

    result.innerHTML = factorial;
    number.value = '';
    return false;
}


document.addEventListener('DOMContentLoaded', getActualYear);
document.getElementById("form").addEventListener("submit", factorialCalculate);
