function utility(elementId) {
    const elementField1 = document.getElementById(elementId).value;
    const element1FieldValue = parseInt(elementField1);
    // validation(foodField);

    const elementField2 = document.getElementById(elementId).value;
    const elementField2Value = parseInt(elementField2);
    // validation(rentField);

    const elementField3 = document.getElementById(elementId).value;
    const elementField3Value = parseInt(elementField3);
    // validation(clothesField);

}

// function calculateIncome() {
//     const totalExpense = element1FieldValue + elementField2Value + elementField3Value;
//     document.getElementById('final-expense').innerText = totalExpense;

//     // const balanceTextString = document.getElementById('total-balance').innerText;
//     // const balanceText = parseInt(balanceTextString);
//     const incomeTextString = document.getElementById('income-field').value;
//     const incomeText = parseFloat(incomeTextString);
//     document.getElementById('total-balance').innerText = parseInt(incomeText - totalExpense);
// }