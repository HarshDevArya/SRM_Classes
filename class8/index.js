// // What is Asynchronous and synchronous

// console.log("1: Start");
// setTimeout(() => {
//   console.log("2: Inside SetTime Out");
// }, 2000);
// console.log("3:End");

// // Promises
// // async await

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Data fetched Successfully");
//   } else {
//     reject("Please try after some time");
//   }
// });

// myPromise.then((r) => console.log(r)).then(()=>{})

// const res = fetch("https://fakestoreapi.com/products");

// console.log(res);

// const data = res
//   .then((resopnse) => resopnse.json())
//   .then((data) => console.log(data));
// console.log(data);

// async function fetchData() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();

//   console.log("1: Start");
//   console.log("2: Start");
//   console.log(data);
// }

// fetchData();

async function fetchProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);

  const productContainer = document.querySelector("#products");

  data.forEach((element) => {
    const card = document.createElement("div");
    card.className = "product";
    const img = document.createElement("img");
    img.src = element.image;
    card.appendChild(img);
    const title = document.createElement("h2");
    title.textContent = element.title;
    card.appendChild(title);
    const des = document.createElement("p");
    des.textContent = element.description;
    card.appendChild(des);
    const price = document.createElement("span");
    price.textContent = `$ ${element.price}`;
    card.appendChild(price);
    productContainer.appendChild(card);
  });
}

fetchProduct();

console.log("10");
setTimeout(() => {
  console.log("20");
}, 0);

Promise.resolve().then(() => {
  console.log("30");
});

setTimeout(() => {
  Promise.resolve().then(() => {
    console.log("40");
  });
}, 0);

console.log("50");

// 10, 50 , 30, 40, 20

//10, 50, 40, 30, 20

// 10,50,30,20,40
