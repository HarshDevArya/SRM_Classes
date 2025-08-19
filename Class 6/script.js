// console.log("Portfolio loaded");
// // alert("Hellow JS");

// console.log(384738974);

// // var
// // morden JS - ES6
// // let
// // const

// var number = 10;
// var number = 12;
// let num = 20;
// const num2 = 40;

// // const name = "Arya";
// let isDark = false;
// let isEmpty = null;
// let arr = [];
// let role;
// console.log("role", role);

// console.log(typeof isDark);
// // console.log(typeof name);
// console.log(typeof isEmpty);
// console.log(typeof arr);

// function

// function greet() {
//   return "Hello from the function";
// }
// console.log(greet());

const menuBtnEl = document.querySelector("#menu-btn");

function greeting() {
  const hours = new Date().getHours();
  let msg;
  if (hours < 12) {
    msg = "Good Morning";
  } else if (hours < 18) {
    msg = "Good After Noon";
  } else {
    msg = "Good Evening";
  }

  //   let greetingEl = document.getElementById("greeting");
  let greetingEl = document.querySelector("#greeting");
  greetingEl.textContent = msg;
}

greeting();

const name = "Harsh Dev";

let highlightEl = document.querySelector(".highlight");
highlightEl.textContent = name;

menuBtnEl.addEventListener("click", function () {
  const classesList = document.querySelector(".popup").classList;
  classesList.toggle("hidden");
  console.log(classesList);
});

function onSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const mes = document.querySelector("#message").value;

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const msgError = document.querySelector("#msg-error");

  let isValid = true;

  const namePattern = /^(?! )[A-Za-z]+(?: [A-Za-z]+)*$/;
  console.log(namePattern.test(" Arya"));
  // name Validattion
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else if (!namePattern.test(name)) {
    nameError.textContent = "Only apl and space allowed";
    isValid = false;
  }

  // name Validattion

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(name)) {
    emailError.textContent = "Only valid email id";
    isValid = false;
  }

  // Massage Validattion

  const wordCount = mes.split(" ").length;

  if (mes === "") {
    msgError.textContent = "Message required";
    isValid = false;
  } else if (wordCount > 500) {
    msgError.textContent = "Not greater the 500";
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: name,
      email: email,
      message: mes,
    });

    document.querySelector("#status").textContent = "Form Submit sucessful";
    document.querySelector("#name").value = " ";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  }
}

document.querySelector("#contact-form").addEventListener("submit", onSubmit);

document
  .querySelector("#contact-form")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const mes = document.querySelector("#message").value;

      const nameError = document.querySelector("#name-error");
      const emailError = document.querySelector("#email-error");
      const msgError = document.querySelector("#msg-error");

      let isValid = true;

      const namePattern = /^(?! )[A-Za-z]+(?: [A-Za-z]+)*$/;
      console.log(namePattern.test(" Arya"));
      // name Validattion
      if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
      } else if (!namePattern.test(name)) {
        nameError.textContent = "Only apl and space allowed";
        isValid = false;
      }

      // name Validattion

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
      } else if (!emailPattern.test(name)) {
        emailError.textContent = "Only valid email id";
        isValid = false;
      }

      // Massage Validattion

      const wordCount = mes.split(" ").length;

      if (mes === "") {
        msgError.textContent = "Message required";
        isValid = false;
      } else if (wordCount > 500) {
        msgError.textContent = "Not greater the 500";
        isValid = false;
      }

      if (isValid) {
        console.log({
          name: name,
          email: email,
          message: mes,
        });

        document.querySelector("#status").textContent = "Form Submit sucessful";
        document.querySelector("#name").value = " ";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
      }
    }
  });

// document.addEventListener("click", function () {
//   console.log("I am clicking on the Doument");
// });

// function setGreeting() {
//   const hour = new Date().getHours();
//   let greet = "";
//   if (hour < 12) greet = "Good Morning!";
//   else if (hour < 18) greet = "Good Afternoon!";
//   else greet = "Good Evening!";
//   document.getElementById("greeting").textContent = greet;
// }
// setGreeting();
