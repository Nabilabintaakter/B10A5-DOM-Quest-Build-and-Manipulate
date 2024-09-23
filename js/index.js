// Donation Functionality for Each Card:

// common function for 3 cards:
// function-1
function commonFunction(input, donation, balance) {
    const amountFor = parseFloat(document.getElementById(input).value);
    const myBalanceField = document.getElementById(balance);
    const myBalance = myBalanceField.innerText;
    const newBalance = myBalance - amountFor;
    myBalanceField.innerText = newBalance;
    return (newBalance);
}

// function-2
function historyCard(amountFor, historyData) {
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
document.getElementById('btn-donate-noakhali').addEventListener('click', function () {
    const amountFor = parseFloat(document.getElementById('input-donation-noakhali').value);
    commonFunction('input-donation-noakhali', 'donate-noakhali', 'my-balance');
    
    const result = amountFor + parseFloat(document.getElementById('donate-noakhali').innerText);
    document.getElementById('donate-noakhali').innerText = result;
    const historyData = 'Flood Relief in Noakhali,';
    const history = historyCard(amountFor, historyData);
    const historyContainer = document.getElementById('history-container')
    historyContainer.insertBefore(history, historyContainer.firstChild);
})
// card-2:
document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const amountFor = parseFloat(document.getElementById('input-donation-feni').value);
    commonFunction('input-donation-feni', 'donate-feni', 'my-balance');
    const result = amountFor + parseFloat(document.getElementById('donate-feni').innerText);
    document.getElementById('donate-feni').innerText = result;
    const historyData = 'Flood Relief in Feni,';
    const history = historyCard(amountFor, historyData);
    const historyContainer = document.getElementById('history-container')
    historyContainer.insertBefore(history, historyContainer.firstChild);
})
// card-3:
document.getElementById('btn-donate-quota').addEventListener('click', function () {
    const amountFor = parseFloat(document.getElementById('input-donation-quota').value);
    commonFunction('input-donation-quota', 'donate-quota', 'my-balance');
    const result = amountFor + parseFloat(document.getElementById('donate-quota').innerText);
    document.getElementById('donate-quota').innerText = result;
    const historyData = 'Aid for Injured in the Quota Movement,';
    const history = historyCard(amountFor, historyData);
    const historyContainer = document.getElementById('history-container')
    historyContainer.insertBefore(history, historyContainer.firstChild);
})

// add event listener to donation and history tab:

// history tab
const historyTab = document.getElementById('history-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-btn-primary', 'text-black', 'font-semibold', 'border-none');
    donationTab.classList.remove('bg-btn-primary', 'text-black', 'font-semibold', 'border-none');
    historyTab.classList.remove('text-gray-600', 'font-medium', 'border-btn-border', 'border-[1px]');
    donationTab.classList.add('text-gray-600', 'font-medium', 'border-btn-border', 'border-[1px]');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('cards-container').classList.add('hidden');
})
// donation tab
const donationTab = document.getElementById('donation-tab');
donationTab.addEventListener('click', function () {
    donationTab.classList.add('bg-btn-primary', 'text-black', 'font-semibold', 'border-none');
    historyTab.classList.remove('bg-btn-primary', 'text-black', 'font-semibold', 'border-none');
    donationTab.classList.remove('text-gray-600', 'font-medium', 'border-btn-border', 'border-[1px]');
    historyTab.classList.add('text-gray-600', 'font-medium', 'border-btn-border', 'border-[1px]');
    document.getElementById('cards-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})