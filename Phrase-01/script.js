// Product Data
const products = [
  {
    name: "IPad",
    category: "Electronics",
    price: 1000,
    image: "./Assets/ipad.png",
  },
  {
    name: "Smart-Watch",
    category: "Electronics",
    price: 150,
    image: "./Assets/watch.png",
  },
  {
    name: "Camera",
    category: "Electronics",
    price: 300,
    image: "./Assets/camera.png",
  },
  {
    name: "Tranch-Coat",
    category: "Clothing",
    price: 50,
    image: "./Assets/qout.jpg",
  },
  {
    name: "Jeans",
    category: "Clothing",
    price: 70,
    image: "./Assets/jens.jpg",
  },
  {
    name: "Jacket",
    category: "Clothing",
    price: 120,
    image: "./Assets/jacket.jpg",
  },
  {
    name: "Ring",
    category: "Accessories",
    price: 200,
    image: "./Assets/ring.jpg",
  },
  {
    name: "Necklace",
    category: "Accessories",
    price: 700,
    image: "./Assets/catenary.jpg",
  },
  {
    name: "bracelet",
    category: "Accessories",
    price: 900,
    image: "./Assets/fences.jpg",
  },
];

// Function to display products
function displayProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  // To clear the product list
  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
            <img src=${product.image} alt="product image" />
            <div class="title-bg"></div>
            <h2>${product.name}</h2>
            <div class="description">
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price}</p>
            </div>
        `;
    productList.appendChild(productItem);
  });
}

// Initial display of all products
displayProducts(products);

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    const filteredProducts =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);
    displayProducts(filteredProducts);
  });
});
