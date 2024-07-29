// Add account balance
function addAccount() {
    const balancesDiv = document.getElementById('balances');
    const accountDiv = document.createElement('div');
    accountDiv.className = 'account';
    accountDiv.innerHTML = `
        <h3 contenteditable="true">New Account</h3>
        <p contenteditable="true">$0.00</p>
    `;
    balancesDiv.appendChild(accountDiv);
}

// Add transaction
function addTransaction() {
    const transactionsUl = document.getElementById('transactions');
    const transactionLi = document.createElement('li');
    transactionLi.contentEditable = true;
    transactionLi.innerText = 'New Transaction - $0.00';
    transactionsUl.appendChild(transactionLi);
}

// Add insight
function addInsight() {
    const insightsDiv = document.getElementById('insights');
    const insightP = document.createElement('p');
    insightP.contentEditable = true;
    insightP.innerText = 'New Insight';
    insightsDiv.appendChild(insightP);
}

// Add alert
function addAlert() {
    const alertsDiv = document.getElementById('alerts');
    const alertP = document.createElement('p');
    alertP.contentEditable = true;
    alertP.innerText = 'New Alert';
    alertsDiv.appendChild(alertP);
}

// This is a placeholder for any future JavaScript functionalities
document.addEventListener("DOMContentLoaded", function() {
    // Make the content editable
    document.querySelectorAll('[contenteditable="true"]').forEach(function(element) {
        element.addEventListener('input', function() {
            console.log('Content updated:', element.innerHTML);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const upcomingBills = [
        { name: 'Electricity Bill', dueDate: '2024-07-25', amount: '$120.00' },
        { name: 'Water Bill', dueDate: '2024-07-30', amount: '$45.00' },
        { name: 'Internet Bill', dueDate: '2024-08-05', amount: '$60.00' }
    ];

    const savingsOpportunities = [
        { description: 'Switch to a cheaper electricity plan and save $20/month.' },
        { description: 'Get a discount on your water bill by using less water.' },
        { description: 'Bundle your internet and phone services to save $10/month.' }
    ];

    const upcomingBillsList = document.getElementById('upcomingBills');
    const savingsOpportunitiesList = document.getElementById('savingsOpportunities');

    upcomingBills.forEach(bill => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<strong>${bill.name}</strong> - Due: ${bill.dueDate} - Amount: ${bill.amount}`;
        upcomingBillsList.appendChild(listItem);
    });

    savingsOpportunities.forEach(opportunity => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = opportunity.description;
        savingsOpportunitiesList.appendChild(listItem);
    });
});