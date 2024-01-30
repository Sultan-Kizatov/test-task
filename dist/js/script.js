document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление блоков
    const priceItems = document.querySelectorAll('.price-item');
    
    setTimeout(function() {
        priceItems.forEach(function(item) {
            item.classList.add('visible');
        });
    }, 100);

    // Смена валюты при клике
    const priceItemCurrencies = document.querySelectorAll('.price-item__сurrency');
    const currencyElements = document.querySelectorAll('.currency');
    const priceElements = document.querySelectorAll('.cost');
    
    const rubleToDollar = 90;
    const rubleToEuro = 100;
    const euroToDollar = 1.1089;
    
    let currentCurrencyIndex = 0;
    
    priceItemCurrencies.forEach(item => {
        item.addEventListener('click', () => {
            currencyElements.forEach((currencyItem, index) => {
                const priceItem = priceElements[index];
    
                if (currentCurrencyIndex === 0) {
                    currencyItem.innerText = '₽';
                    priceItem.innerText = Math.ceil(parseInt(priceItem.innerText) * rubleToDollar);
                } else if (currentCurrencyIndex === 1) {
                    currencyItem.innerText = '€';
                    priceItem.innerText = Math.round(parseInt(priceItem.innerText) / rubleToEuro);
                } else {
                    currencyItem.innerText = '$';
                    priceItem.innerText = Math.ceil(parseInt(priceItem.innerText) * euroToDollar);
                }
            });
    
            currentCurrencyIndex = (currentCurrencyIndex + 1) % 3;
        });
    });

    // Смена месяца на день при клике
    const priceItemMonths = document.querySelectorAll('.price-item__month');

    priceItemMonths.forEach(month => {
        month.addEventListener('click', () => {
            const newInnerText = (month.innerText === '/Months') ? '/Day' : '/Months';

            priceItemMonths.forEach(otherMonth => {
                otherMonth.innerText = newInnerText;
            });

            if (newInnerText === '/Day') {
                priceElements.forEach(priceItem => {
                    priceItem.innerText = parseInt(priceItem.innerText) / 30;
                });
            } else {
                priceElements.forEach(priceItem => {
                    priceItem.innerText = parseInt(priceItem.innerText) * 30;
                });
            }
        });
    });

    // hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });
});