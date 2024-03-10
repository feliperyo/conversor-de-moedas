const clickButton = document.querySelector(".convert-button");
const selectCurrencyToConvert = document.querySelector(".currency-to-convert");
const selectCurrency = document.querySelector(".currency-select");

async function currencyConvert() {
  const inputValue = document.querySelector("#valor").value;
  const valorToConvert = document.querySelector(".currency-value-to-convert");
  const valorConverted = document.querySelector(".currency-value");

  const dolar = document.querySelector("#dolarValue").value;
  const euro = document.querySelector("#euroValue").value;
  const libra = document.querySelector("#libraValue").value;
  const bitcoin = document.querySelector("#bitcoinValue").value;
  const real = document.querySelector("#realValue").value;

  const data = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,USD-EUR,USD-GBP,BTC-USD,BTC-EUR,GBP-EUR"
  ).then((response) => response.json());

  if (selectCurrencyToConvert.value == real && selectCurrency.value == real) {
    valorToConvert.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == real && selectCurrency.value == dolar) {
    valorToConvert.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / data.USDBRL.high);
  }

  if (selectCurrencyToConvert.value == real && selectCurrency.value == euro) {
    valorToConvert.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / data.EURBRL.high);
  }

  if (selectCurrencyToConvert.value == real && selectCurrency.value == libra) {
    valorToConvert.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / data.GBPBRL.high);
  }

  if (
    selectCurrencyToConvert.value == real &&
    selectCurrency.value == bitcoin
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / data.BTCBRL.high);
  }

  if (selectCurrencyToConvert.value == dolar && selectCurrency.value == dolar) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == dolar && selectCurrency.value == euro) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / data.USDEUR.high);
  }

  if (selectCurrencyToConvert.value == dolar && selectCurrency.value == libra) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / data.USDGBP.high);
  }

  if (
    selectCurrencyToConvert.value == dolar &&
    selectCurrency.value == bitcoin
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / data.BTCUSD.high);
  }

  if (selectCurrencyToConvert.value == dolar && selectCurrency.value == real) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / data.USDBRL.high);
  }

  if (selectCurrencyToConvert.value == euro && selectCurrency.value == euro) {
    valorToConvert.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == euro && selectCurrency.value == dolar) {
    valorToConvert.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / data.USDEUR.high);
  }

  if (selectCurrencyToConvert.value == euro && selectCurrency.value == libra) {
    valorToConvert.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / data.GBPEUR.high);
  }

  if (
    selectCurrencyToConvert.value == euro &&
    selectCurrency.value == bitcoin
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / data.BTCEUR.high);
  }

  if (selectCurrencyToConvert.value == euro && selectCurrency.value == real) {
    valorToConvert.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / data.EURBRL.high);
  }

  if (selectCurrencyToConvert.value == libra && selectCurrency.value == libra) {
    valorToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == libra && selectCurrency.value == real) {
    valorToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / data.GBPBRL.high);
  }

  if (selectCurrencyToConvert.value == libra && selectCurrency.value == dolar) {
    valorToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / data.USDGBP.high);
  }

  if (selectCurrencyToConvert.value == libra && selectCurrency.value == euro) {
    valorToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / data.GBPEUR.high);
  }

  if (
    selectCurrencyToConvert.value == libra &&
    selectCurrency.value == bitcoin
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / 55.555);
  }

  if (
    selectCurrencyToConvert.value == bitcoin &&
    selectCurrency.value == bitcoin
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
  }

  if (
    selectCurrencyToConvert.value == bitcoin &&
    selectCurrency.value == dolar
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / data.BTCUSD.high);
  }

  if (
    selectCurrencyToConvert.value == bitcoin &&
    selectCurrency.value == euro
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / data.BTCEUR.high);
  }

  if (
    selectCurrencyToConvert.value == bitcoin &&
    selectCurrency.value == libra
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / 55.555);
  }

  if (
    selectCurrencyToConvert.value == bitcoin &&
    selectCurrency.value == real
  ) {
    valorToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
    valorConverted.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / data.BTCBRL.high);
  }
}

function changeCurrencyToConvert() {
  const dolar = document.querySelector("#toConvertDolar").value;
  const euro = document.querySelector("#toConvertEuro").value;
  const libra = document.querySelector("#toConvertLibra").value;
  const bitcoin = document.querySelector("#toConvertBitcoin").value;
  const real = document.querySelector("#toConvertReal").value;
  const nameToConvert = document.querySelector(".currency-euro");
  const valueToConvert = document.querySelector(".currency-value-to-convert");
  const imgFlag = document.querySelector(".moeda");
  const inputValue = document.querySelector("#valor").value;

  if (selectCurrencyToConvert.value == real) {
    imgFlag.src = "./assets/real.png";
    nameToConvert.innerHTML = "Real";
    valueToConvert.innerHTML = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == dolar) {
    imgFlag.src = "./assets/dolar.png";
    nameToConvert.innerHTML = "Dólar Americano";
    valueToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == euro) {
    imgFlag.src = "./assets/euro.png";
    nameToConvert.innerHTML = "Euro";
    valueToConvert.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == libra) {
    imgFlag.src = "./assets/libra 1.png";
    nameToConvert.innerHTML = "Libra";
    valueToConvert.innerHTML = Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
  }

  if (selectCurrencyToConvert.value == bitcoin) {
    imgFlag.src = "./assets/bitcoin 1.png";
    nameToConvert.innerHTML = "Bitcoin";
    valueToConvert.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue);
  }

  currencyConvert();
}

function changeCurrency() {
  const dolar = document.querySelector("#dolarValue").value;
  const euro = document.querySelector("#euroValue").value;
  const libra = document.querySelector("#libraValue").value;
  const bitcoin = document.querySelector("#bitcoinValue").value;
  const real = document.querySelector("#realValue").value;
  const nameConverted = document.querySelector(".currency-dolar");
  const imgFlag = document.querySelector(".moeda-converted");
  const currencyValue = document.querySelector(".currency-value");

  if (selectCurrency.value == dolar) {
    imgFlag.src = "./assets/dolar.png";
    nameConverted.innerHTML = "Dólar Americano";
    currencyValue.innerHTML = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(currencyConvert());
  }

  if (selectCurrency.value == euro) {
    imgFlag.src = "./assets/euro.png";
    nameConverted.innerHTML = "Euro";
  }

  if (selectCurrency.value == libra) {
    imgFlag.src = "./assets/libra 1.png";
    nameConverted.innerHTML = "Libra";
  }

  if (selectCurrency.value == bitcoin) {
    imgFlag.src = "./assets/bitcoin 1.png";
    nameConverted.innerHTML = "Bitcoin";
  }

  if (selectCurrency.value == real) {
    imgFlag.src = "./assets/real.png";
    nameConverted.innerHTML = "Real";
  }

  currencyConvert();
}

clickButton.addEventListener("click", currencyConvert);
selectCurrencyToConvert.addEventListener("change", changeCurrencyToConvert);
selectCurrency.addEventListener("change", changeCurrency);
