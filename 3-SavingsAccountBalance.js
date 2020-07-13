/*
Savings Account Balance

Implement the following function to calculate the current balance of a bank savings account at the end of numMonths (a specific number of months). 

Balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths)
The calculation must reflect the following assumptions:
● openingSum is the initial account balance.
● Every month, the monthly interest is calculated as interestRate percent of the
account balance available at the beginning of each month.
● Every month, the monthly tax is calculated as taxRate percent of (account balance
- taxFreeLimit) if the account balance is greater than the allowed
taxFreeLimit. Otherwise, the monthly tax is 0.
● At the end of each month, the balance is updated by adding the monthly interest and subtracting the monthly tax.

Example outputs:
balance(10000, 1, 20000, 1, 2) #must be approximately 10201
balance(25000, 2, 20000, 1, 2) #must be approximately 25904.5
balance(19800, 2, 20000, 1, 2) #must be approximately 20597.96
*/

const balance = (
    openingSum,
    interestRate,
    taxFreeLimit,
    taxRate,
    numMonths) => {

    let totalAmount = openingSum;

    for (let i = 0; i < numMonths; i++) {
        monthInterestRate = totalAmount * (interestRate / 100)

        let monthTaxRate = 0;
        if (taxFreeLimit < totalAmount) monthTaxRate = (totalAmount - taxFreeLimit) * (taxRate / 100)
        totalAmount = totalAmount + monthInterestRate - monthTaxRate;
    }
    return totalAmount
};

balance(10000, 1, 20000, 1, 2)
balance(25000, 2, 20000, 1, 2)
balance(19800, 2, 20000, 1, 2)