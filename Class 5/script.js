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
