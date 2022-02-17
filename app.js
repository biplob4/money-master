

/*-----cought allInputId----- */
function allInputValue(inputId) {
    const allInput = document.getElementById(inputId + "-allInput");
    const inputText = allInput.value;
    return inputText;
}


/* ----set calculate button event Handler---- */
document.getElementById('calculate-btn').addEventListener('click', function () {

    /* -----allInputValue------ */
    const incomeAmount = allInputValue("income");
    const incomeAmountParse = parseFloat(incomeAmount);

    const foodAmount = allInputValue("food");
    const foodAmountParse = parseFloat(foodAmount);

    const rantAmount = allInputValue("rant");
    const rantAmountParse = parseFloat(rantAmount);
    
    const clothesAmount = allInputValue("clothes");
    const clothesAmountParse = parseFloat(clothesAmount);

    /* ----set balance---- */
    const expensed = document.getElementById( "expensed-balance");
    const expensedText = parseFloat(expensed.innerText);
    const totalExpemsed = expensed.innerText = foodAmountParse + rantAmountParse + clothesAmountParse;

    const totalbalance = document.getElementById( "total-balance");
    const totalbalanceText = parseFloat(totalbalance.innerText);
    totalbalance.innerText = incomeAmountParse - totalExpemsed;


    /* ---error mesege---- */
    if( incomeAmount < 0 ){
        document.getElementById('income-error').style.display='block';
       }
    if( foodAmount < 0 && typeof inputText == 'string'){
        document.getElementById('food-error').style.display='block';
       }
    if( rantAmount < 0){
        document.getElementById('rant-error').style.display='block';
       }
    if( clothesAmount < 0){
        document.getElementById('clothes-error').style.display='block';
       }
    if(incomeAmount < totalExpemsed){
        document.getElementById('expenes-error').style.display='block';
    }
})
