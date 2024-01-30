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

    priceItemCurrencies.forEach(item => {
        item.addEventListener('click', () => {
            currencyElements.forEach((currencyItem, index) => {
                const priceItem = priceElements[index];

                if (currencyItem.innerText == '$') {
                    currencyItem.innerText = '₽';
                    priceItem.innerText = parseInt(priceItem.innerText) * rubleToDollar;
                } else {
                    currencyItem.innerText = '$';
                    priceItem.innerText = parseInt(priceItem.innerText) / rubleToDollar;
                }
            });
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