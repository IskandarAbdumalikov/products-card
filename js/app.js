import { PRODUCTS } from "./data.js";

const wrapper = document.querySelector(".wrapper");
const form = document.querySelector(".form");
const productName = document.querySelector(".name");
const quantity = document.querySelector(".quantity");
const unit = document.querySelector(".unit");
const price = document.querySelector(".price");
const imgUrl = document.querySelector(".img__url");
const addNewProduct = document.querySelector(".add__new__product");
const cancel = document.querySelector(".cancel");
const add = document.querySelector(".add");


function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img class = "card__image" src="${product.imgUrl}" alt="">
            <div class="card__info">
            <h3>${product.productName}</h3>
            <p>${product.quantity} ${product.unit}</p>
            <p class = "price">${product.price} USD</p>
            <button class="delete" name="delete" data-id="${product.id}">Delete</button>
            </div>
            
        `;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}
createCard(PRODUCTS);

class Product {
  constructor(productName, quantity, unit, price, imgUrl) {
    this.id = `${new Date().getTime()}`;
    this.productName = productName;
    this.quantity = quantity;
    this.unit = unit;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

add.addEventListener("click", (e) => {
  e.preventDefault();
  let newProduct = new Product(
    productName.value,
    quantity.value,
    unit.value,
    price.value,
    imgUrl.value
  );
  PRODUCTS.push(newProduct);
  createCard(PRODUCTS);
  localStorage.setItem("productData", JSON.stringify(PRODUCTS));
  productName.value = "";
  quantity.value = "";
  unit.value = "";
  price.value = "";
  imgUrl.value = "";
  form.style.display = "none";
});

let deleteUser = (id) => {
  if(!confirm("Are you sure")) return
  let index = PRODUCTS.findIndex((u) => u.id == id);
  PRODUCTS.splice(index, 1);
  createCard(PRODUCTS);
};

wrapper.addEventListener("click", (e) => {
  if ((e.target.name === "delete")) {
    deleteUser(e.target.dataset.id);
  }
  localStorage.setItem("productData", JSON.stringify(PRODUCTS));
});

addNewProduct.addEventListener("click", function () {
  form.style.display = "grid";
});

cancel.addEventListener("click", function () {
  form.style.display = "none";
});
