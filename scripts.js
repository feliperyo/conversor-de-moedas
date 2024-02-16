const clickButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".currency-select")

function currencyConvert() {
    const inputValue = document.querySelector("#valor").value
    const valorToConvert = document.querySelector(".currency-value-to-convert")
    const valorConverted = document.querySelector(".currency-value")


    const dolar = document.querySelector("#dolarValue").value
    const euro = document.querySelector("#euroValue").value
    const dolarC = inputValue / 5.2
    const euroC = inputValue / 6.2

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
}

function changeCurrency() {
    const dolar = document.querySelector("#dolarValue").value
    const euro = document.querySelector("#euroValue").value
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

    currencyConvert()
}


clickButton.addEventListener("click", currencyConvert)
selectCurrency.addEventListener("change", changeCurrency)