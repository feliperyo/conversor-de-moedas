const clickButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".currency-select")

function currencyConvert() {
    const inputValue = document.querySelector("#valor").value
    const valorToConvert = document.querySelector(".currency-value-to-convert")
    const valorConverted = document.querySelector(".currency-value")


    const dolar = document.querySelector("#dolarValue").value
    const euro = document.querySelector("#euroValue").value
    const libra = document.querySelector("#libraValue").value
    const bitcoin = document.querySelector("#bitcoinValue").value
    const dolarC = inputValue / 5.2
    const euroC = inputValue / 6.2
    const libraC = inputValue / 6.26
    const bitcoinC = inputValue / 260

    valorToConvert.innerHTML = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


    if (selectCurrency.value == dolar) {
        valorConverted.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dolarC)
    }

    if (selectCurrency.value == euro) {
        valorConverted.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroC)
    }

    if (selectCurrency.value == libra) {
        valorConverted.innerHTML = Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "GBP"
        }).format(libraC)
    }

    if (selectCurrency.value == bitcoin) {
        valorConverted.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(bitcoinC)
    }
}

function changeCurrency() {
    const dolar = document.querySelector("#dolarValue").value
    const euro = document.querySelector("#euroValue").value
    const libra = document.querySelector("#libraValue").value
    const bitcoin = document.querySelector("#bitcoinValue").value
    const nameConverted = document.querySelector(".currency-dolar")
    const imgFlag = document.querySelector(".moeda-converted")

    if (selectCurrency.value == dolar) {
        imgFlag.src = "./assets/dolar.png"
        nameConverted.innerHTML = "Dólar Americano"

    }

    if (selectCurrency.value == euro) {
        imgFlag.src = "./assets/euro.png"
        nameConverted.innerHTML = "Euro"
    }

    if (selectCurrency.value == libra) {
        imgFlag.src = "./assets/libra 1.png"
        nameConverted.innerHTML = "Libra"

    }

    if (selectCurrency.value == bitcoin) {
        imgFlag.src = "./assets/bitcoin 1.png"
        nameConverted.innerHTML = "Bitcoin"
    }

    currencyConvert()
}


clickButton.addEventListener("click", currencyConvert)
selectCurrency.addEventListener("change", changeCurrency)