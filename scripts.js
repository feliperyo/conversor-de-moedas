const clickButton = document.querySelector(".convert-button")
const selectCurrencyToConvert = document.querySelector(".currency-to-convert")
const selectCurrency = document.querySelector(".currency-select")


function changeCurrencyToConvert() {
    const dolar = document.querySelector("#toConvertDolar").value
    const euro = document.querySelector("#toConvertEuro").value
    const libra = document.querySelector("#toConvertLibra").value
    const bitcoin = document.querySelector("#toConvertBitcoin").value
    const real = document.querySelector("#toConvertReal").value
    const nameToConvert = document.querySelector(".currency-euro")
    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const imgFlag = document.querySelector(".moeda")
    const inputValue = document.querySelector("#valor").value

    if (selectCurrencyToConvert.value == dolar) {
        imgFlag.src = "./assets/dolar.png"
        nameToConvert.innerHTML = "Dólar Americano"

        valueToConvert.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

    }

    if (selectCurrencyToConvert.value == euro) {
        imgFlag.src = "./assets/euro.png"
        nameToConvert.innerHTML = "Euro"

        valueToConvert.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    if (selectCurrencyToConvert.value == libra) {
        imgFlag.src = "./assets/libra 1.png"
        nameToConvert.innerHTML = "Libra"

        valueToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

    }

    if (selectCurrencyToConvert.value == bitcoin) {
        imgFlag.src = "./assets/bitcoin 1.png"
        nameToConvert.innerHTML = "Bitcoin"

        valueToConvert.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
    }

    if (selectCurrencyToConvert.value == real) {
        imgFlag.src = "./assets/real.png"
        nameToConvert.innerHTML = "Real"

        valueToConvert.innerHTML = Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

}

function currencyConvert() {
    const inputValue = document.querySelector("#valor").value
    const valorToConvert = document.querySelector(".currency-value-to-convert")
    const valorConverted = document.querySelector(".currency-value")

    const dolar = document.querySelector("#dolarValue").value
    const euro = document.querySelector("#euroValue").value
    const libra = document.querySelector("#libraValue").value
    const bitcoin = document.querySelector("#bitcoinValue").value
    const real = document.querySelector("#realValue").value
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


    if (selectCurrency.value == real) {
        valorConverted.innerHTML = Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
}


function changeCurrency() {
    const dolar = document.querySelector("#dolarValue").value
    const euro = document.querySelector("#euroValue").value
    const libra = document.querySelector("#libraValue").value
    const bitcoin = document.querySelector("#bitcoinValue").value
    const real = document.querySelector("#realValue").value
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

    if (selectCurrency.value == real) {
        imgFlag.src = "./assets/real.png"
        nameConverted.innerHTML = "Real"
    }

    currencyConvert()
}




clickButton.addEventListener("click", currencyConvert)
selectCurrencyToConvert.addEventListener("change", changeCurrencyToConvert)
selectCurrency.addEventListener("change", changeCurrency)
