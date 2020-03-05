let eurValue, usdValue, gbpValue, chfValue;

var resultElement = document.getElementById('r-value');
var convertButton = document.getElementById('convert');

function makeConvertion(currency, amount) {
    var rates = {
        eur: 4.27,
        usd: 3.86,
        gbp: 5.06,
        chf: 3.89
    };

    return (rates[currency] * amount).toFixed(2) + ' PLN';
}

function convert () {
    eurValue = document.getElementById('eur').value;
    usdValue = document.getElementById('usd').value;
    gbpValue = document.getElementById('gbp').value;
    chfValue = document.getElementById('chf').value;

    run();

    setTimeout(() => {
        resultElement.textContent = makeConvertion(currency, amount);
    }, 100);
};

let currency;
let amount;

function run() {
    if (usdValue.length) {
        currency = 'usd';
        amount = parseInt(usdValue);
        makeConvertion(usd, usdValue);
    } else if (eurValue.length) {
        currency = 'eur';
        amount = parseInt(eurValue);
        makeConvertion(eur, eurValue);
    } else if (gbpValue.length) {
        currency = 'gbp';
        amount = parseInt(gbpValue);
        makeConvertion(gbp, gbpValue);
    } else if (chfValue.length) {
        currency = 'chf';
        amount = parseInt(chfValue);
        makeConvertion(chf, chfValue);
    } else {
        alert('Nothing to convert :(');
    }
}