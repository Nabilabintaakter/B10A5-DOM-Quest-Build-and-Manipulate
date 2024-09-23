// Donation Functionality for Each Card:

// common function for 3 cards:
// function-1
function commonFunction (input, donation, balance){
    const amountFor = parseFloat(document.getElementById(input).value);
    document.getElementById(donation).innerText = amountFor;

    const myBalanceField = document.getElementById(balance);
    const myBalance = myBalanceField.innerText;

    const newBalance = myBalance - amountFor;
    myBalanceField.innerText = newBalance;
    return (newBalance);
}

// function-2
function historyCard (amountFor, historyData){
    const date = new Date().toString();

    const div = document.createElement('div');
    div.className = "bg-white rounded-2xl p-4 md:p-8 space-y-2 md:space-y-4 border-[1px] border-card-border";
    div.innerHTML = `
    <h3 class = "text-black font-bold text-xl">${amountFor} Taka is Donated for ${historyData} Bangladesh </h3>
    <p class = "text-gray-600 text-base font-light"> Date : ${date}</p>
    `;
    return div;
}

// card-1:
document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const amountFor = parseFloat(document.getElementById('input-donation-noakhali').value);

    commonFunction('input-donation-noakhali', 'donate-noakhali', 'my-balance');

    const historyData = 'Flood Relief in Noakhali,';

    const history = historyCard(amountFor, historyData);

    document.getElementById('history-container').appendChild(history);
})
// card-2:
document.getElementById('btn-donate-feni').addEventListener('click', function(){
    const amountFor = parseFloat(document.getElementById('input-donation-feni').value);

    commonFunction('input-donation-feni', 'donate-feni', 'my-balance'); 
    const historyData = 'Flood Relief in Feni,';

    const history = historyCard(amountFor, historyData);

    document.getElementById('history-container').appendChild(history);
})
// card-3:
document.getElementById('btn-donate-quota').addEventListener('click', function(){
    const amountFor = parseFloat(document.getElementById('input-donation-quota').value);

    commonFunction('input-donation-quota', 'donate-quota', 'my-balance'); 
    const historyData = 'Aid for Injured in the Quota Movement,';

    const history = historyCard(amountFor, historyData);

    document.getElementById('history-container').appendChild(history);
})