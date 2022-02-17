
/*-----cought allInputId----- */
function allInputValue(inputId) {
    const allInput = document.getElementById(inputId + "-allInput");
    const inputText = parseFloat(allInput.value);
    return inputText;
}



/* ----set calculate button event Handler---- */
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = allInputValue("income");
    const foodAmount = allInputValue("food");
    const rantAmount = allInputValue("rant");
    const clothesAmount = allInputValue("clothes");

    /* ---error mesege---- */
    if (incomeAmount > 0 && foodAmount > 0 && rantAmount > 0 && clothesAmount > 0) {
        const expensed = document.getElementById("expensed-balance");
        let expensedText = parseFloat(expensed.innerText);
        expensedText = expensed.innerText = foodAmount + rantAmount + clothesAmount;

        const totalbalance = document.getElementById("total-balance");
        const totalbalanceText = parseFloat(totalbalance.innerText);
        totalbalance.innerText = incomeAmount - expensedText;

        if (incomeAmount < expensedText) {
            document.getElementById('expenses-error').style.display = 'block';
        }
    }


    else if (incomeAmount <= -0 || foodAmount <= -0 || rantAmount <= -0 || clothesAmount <= -0) {
        if (incomeAmount < 0) {
            document.getElementById('income-error').style.display = 'block';
        }
        if (foodAmount < 0) {
            document.getElementById('food-error').style.display = 'block';
        }
        if (rantAmount < 0) {
            document.getElementById('rant-error').style.display = 'block';
        }
        if (clothesAmount < 0) {
            document.getElementById('clothes-error').style.display = 'block';
        }
    }
    else {
        document.getElementById('latter-error').style.display = 'block';
    }
})


/* -----event Handler set sevbutton------ */
document.getElementById('save-btn').addEventListener('click', function () {
    const expensed = document.getElementById("expensed-balance");
    const expensedText = parseFloat(expensed.innerText);

    const totalbalance = document.getElementById("total-balance");
    const totalbalanceText = parseFloat(totalbalance.innerText);

    const savebalance = document.getElementById("saving-balance");
    const savebalanceText = parseFloat(totalbalance.innerText);

    const remainingbalance = document.getElementById("remaining-balance");
    const remainingbalanceText = parseFloat(totalbalance.innerText);

    const incomeAmount = allInputValue("income");
    const saveAmount = allInputValue("save");

    /* ---error mesege---- */
    if (saveAmount > 0) {
        savebalance.innerText = incomeAmount / 100 * saveAmount;
        remainingbalance.innerText = totalbalanceText - incomeAmount / 100 * saveAmount
    }
    else if (saveAmount <= -0) {
        document.getElementById('morecost-error').style.display = 'block';
    }
    else {
        document.getElementById('latter-error').style.display = 'block';
    }

    if(totalbalanceText > expensedText){
        document.getElementById('save-error').style.display = 'block';
    }
})
