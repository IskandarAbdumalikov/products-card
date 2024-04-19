export const PRODUCTS = JSON.parse(localStorage.getItem("productData")) || [
  {
    id: "1",
    productName: "Banana",
    quantity: "10",
    unit: "kg",
    price: 19000,
    imgUrl:
      "https://www.shutterstock.com/image-photo/banana-cluster-isolated-600nw-575528746.jpg",
  },
  {
    id: "2",
    productName: "Pen",
    quantity: "100",
    unit: "dona",
    price: 2000,
    imgUrl:
      "https://media.istockphoto.com/id/1059543698/photo/pen.jpg?s=612x612&w=0&k=20&c=xydmq5zg2BIGZGcjJfWF6uo-yeJ4mkdRNr4aA4zJ740=",
  },
];
