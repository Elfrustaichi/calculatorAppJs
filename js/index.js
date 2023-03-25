var input = document.getElementById("input"),
  number = document.querySelectorAll(".numbers div"),
  operator = document.querySelectorAll(".operators div"),
  result = document.getElementById("result"),
  clear = document.getElementById("clear"),
  resultDisplayed = false;
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      alert("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function () {
  calculate();
});

clear.addEventListener("click", function () {
  input.innerHTML = "";
});

//keyboardEvents section start
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      keyboardInput(e);
      break;
    case "2":
      keyboardInput(e);
      break;
    case "3":
      keyboardInput(e);
      break;
    case "4":
      keyboardInput(e);
      break;
    case "5":
      keyboardInput(e);
      break;
    case "6":
      keyboardInput(e);
      break;
    case "7":
      keyboardInput(e);
      break;
    case "8":
      keyboardInput(e);
      break;
    case "9":
      keyboardInput(e);
      break;
    case "0":
      keyboardInput(e);
      break;
    case "Enter":
      calculate();
      break;
  }
});

//eyni anda shifte basili saxlayib + isaresini add elemek istiyirdim keyboard eventle amma alinmadi neter olur?
// document.addEventListener("keypress",(e)=>{
//   if (e.key=="Shift") {
//     document.addEventListener("keydown",(e)=>{
//     })
// }})

//functions start

function keyboardInput(e) {
  var currentString = input.innerHTML;
  var lastChar = currentString[currentString.length - 1];

  if (resultDisplayed === false) {
    input.innerHTML += e.key;
  } else if (
    (resultDisplayed === true && lastChar === "+") ||
    lastChar === "-" ||
    lastChar === "×" ||
    lastChar === "÷"
  ) {
    resultDisplayed = false;
    input.innerHTML += e.key;
  } else {
    resultDisplayed = false;
    input.innerHTML = "";
    input.innerHTML += e.key;
  }
}

function calculate() {
  var inputString = input.innerHTML;

  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];

  resultDisplayed = true;
}

//functions end
