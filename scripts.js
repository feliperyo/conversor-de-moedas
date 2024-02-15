const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputValue = document.getElementById("valor").value
    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const valueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2

    const resultValueDolar = inputValue / dolarToday
    const resultValueEuro = inputValue / euroToday

    if (currencySelect.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(resultValueDolar)
    }
    if (currencySelect.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(resultValueEuro)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


}

function changeName() {
    const currencyDolar = document.querySelector(".currency-dolar")
    const currencyImg = document.querySelector(".moeda-converted")

    if (currencySelect.value == "dolar") {
        currencyDolar.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyDolar.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    
    convertValues()
}

currencySelect.addEventListener("change", changeName)
convertButton.addEventListener("click", convertValues)