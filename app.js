/*----- cought inputId function----- */
function allInputValue(inputId) {
    const allInput = document.getElementById(inputId + "-allInput");
    const inputText = allInput.value;
    const inputValu = parseFloat(inputText);
    // allInput.value = '';
    return inputValu;
}


/* ----set calculate button event Handler---- */
document.getElementById('calculate-btn').addEventListener('click', function () {

    /* -----allInputValue------ */
    const incomeAmount = allInputValue("income");
    const foodAmount = allInputValue("food");
    const rantAmount = allInputValue("rant");
    const clothesAmount = allInputValue("clothes");

    /* ----set balance---- */
    const expensed = document.getElementById( "expensed-balance");
    const expensedText = parseFloat(expensed.innerText);
    const totalExpemsed = expensed.innerText = foodAmount + rantAmount + clothesAmount;

    const totalbalance = document.getElementById( "total-balance");
    const totalbalanceText = parseFloat(totalbalance.innerText);
    totalbalance.innerText = incomeAmount - totalExpemsed;
    
    if(incomeAmount < expensed){
        document.getElementById('food-error').style.display='block';
    }

    /* ---error mesege---- */
    if( incomeAmount < 0 ){
        document.getElementById('income-error').style.display='block';
       }
    if( foodAmount < 0){
        document.getElementById('food-error').style.display='block';
       }
    if( rantAmount < 0){
        document.getElementById('rant-error').style.display='block';
       }
    if( clothesAmount < 0){
        document.getElementById('clothes-error').style.display='block';
       }
})
 
// document.getElementById("calculate-btn").addEventListener('click',function(){
    
// })