document.getElementById('total-calculate').addEventListener('click', function () {
    const foodField = document.getElementById('food-field').value;
    const foodFieldValue = parseInt(foodField);
    // validation(foodField);
    // const foodFieldValue = utility('food-field');

    const rentField = document.getElementById('rent-field').value;
    const rentFieldValue = parseInt(rentField);
    // validation(rentField);
    // const rentFieldValue = utility('rent-field');


    const clothesField = document.getElementById('clothes-field').value;
    const clothesFieldValue = parseInt(clothesField);
    // // validation(clothesField);
    // const clothesFieldValue = utility('clothes-field');

    const totalExpense = foodFieldValue + rentFieldValue + clothesFieldValue;
    document.getElementById('final-expense').innerText = parseInt(totalExpense);


    const balanceTextString = document.getElementById('total-balance').innerText;
    const balanceText = parseInt(balanceTextString);
    const incomeTextString = document.getElementById('income-field').value;
    const incomeText = parseInt(incomeTextString);

    document.getElementById('total-balance').innerText = parseInt(incomeText - totalExpense);


    // console.log(typeof document.getElementById('total-balance').innerText);

})

document.getElementById('btn-save').addEventListener('click', function () {
    const saveField = document.getElementById('save-field').value;

    const saveFieldResult = saveField / 100 * (document.getElementById('income-field').value);
    document.getElementById('save-amount').innerText = parseInt(saveFieldResult);
    console.log(saveFieldResult);

    document.getElementById('remaining-balance').innerText = (document.getElementById('total-balance').innerText) - (document.getElementById('save-amount').innerText);

    /* 

      /100 *

    const remainingBalance = document.getElementById('remaining-balance').innerText;

    remainingbalance = balance - savingamount;

    */
})

// function validation(elementId) {
//     if (elementId !== 'number') {
//         alert('Enter Valid Number');
//     }
// }