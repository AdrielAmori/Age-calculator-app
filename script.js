var dataAtual = new Date();
var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");

var dayErrorTitle = document.getElementById("dayErrorTitle");
var monthErrorTitle = document.getElementById("monthErrorTitle");
var yearErrorTitle = document.getElementById("yearErrorTitle");

var dayError = document.getElementById("dayError");
var monthError = document.getElementById("monthError");
var yearError = document.getElementById("yearError");

function verify() {
  var dayNasc = document.getElementById("dayNasc");
  var monthNasc = document.getElementById("monthNasc");
  var yearNasc = document.getElementById("yearNasc");
  var isValid = true;

  // Limpa mensagens de erro anteriores e bordas
  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";
  dayNasc.style.border = "";
  monthNasc.style.border = "";
  yearNasc.style.border = "";
  dayErrorTitle.style = "";
  monthErrorTitle.style = "";
  yearErrorTitle.style = "";

  if (dayNasc.value > 31 || dayNasc.value < 1) {
    dayErrorTitle.style.color = "red";
    dayNasc.style.border = "2px solid red";
    dayError.textContent = "Dia inválido";
    isValid = false;
  }
  if (monthNasc.value > 12 || monthNasc.value < 1) {
    monthErrorTitle.style.color = "red";
    monthError.textContent = "Mês inválido";
    monthNasc.style.border = "2px solid red";
    isValid = false;
  }
  if (yearNasc.value > dataAtual.getFullYear() || yearNasc.value < 1900) {
    yearErrorTitle.style.color = "red";
    yearError.textContent = "Ano inválido";
    yearNasc.style.border = "2px solid red";
    isValid = false;
  }

  return isValid;
}

function calculate() {
  var dayNasc = document.getElementById("dayNasc");
  var monthNasc = document.getElementById("monthNasc");
  var yearNasc = document.getElementById("yearNasc");

  if (verify()) {
    var birthDate = new Date(yearNasc.value, monthNasc.value - 1, dayNasc.value);
    var today = new Date();

    // Verifica se a data de nascimento é no futuro
    if (birthDate > today) {
      yearError.textContent = "A data de nascimento não pode ser no futuro.";
      return;
    }

    var ageYears = today.getFullYear() - birthDate.getFullYear();
    var ageMonths = today.getMonth() - birthDate.getMonth();
    var ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    document.getElementById("years").textContent = ageYears;
    document.getElementById("months").textContent = ageMonths;
    document.getElementById("days").textContent = ageDays;
  }
}
