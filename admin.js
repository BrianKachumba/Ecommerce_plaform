// File: dashboardSearch.js

// Function to perform search by product name
function searchProductByName() {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.toLowerCase();

    const productTable = document.getElementById('productTable');
    const rows = productTable.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { // Skipping header row
        const productNameCell = rows[i].getElementsByTagName('td')[0]; // Assuming first column is product name
        if (productNameCell) {
            const productName = productNameCell.textContent || productNameCell.innerText;
            rows[i].style.display = productName.toLowerCase().includes(searchQuery) ? '' : 'none';
        }
    }
}

// Function to perform search by username
function searchUserByName() {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.toLowerCase();

    const userTable = document.getElementById('userTable');
    const rows = userTable.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { // Skipping header row
        const userNameCell = rows[i].getElementsByTagName('td')[0]; // Assuming first column is username
        if (userNameCell) {
            const userName = userNameCell.textContent || userNameCell.innerText;
            rows[i].style.display = userName.toLowerCase().includes(searchQuery) ? '' : 'none';
        }
    }
}

// Event listeners for card clicks and search button
const productCard = document.getElementById('productCard');
const userCard = document.getElementById('userCard');
const searchButton = document.getElementById('searchButton');

productCard.addEventListener('click', () => {
    document.getElementById('searchInput').placeholder = 'Search for a product...';
    searchButton.onclick = searchProductByName;
});

userCard.addEventListener('click', () => {
    document.getElementById('searchInput').placeholder = 'Search for a user...';
    searchButton.onclick = searchUserByName;
});












document.getElementById("market-tab").addEventListener("click", () => {
    // Hide other sections
    document.getElementById("overview").style.display = "none";
    // Show market section
    document.getElementById("market").style.display = "block";
  
    // Fetch and display products
    fetchProducts();
  });
  
  function fetchProducts() {
    // Simulating fetching data from the database
    const products = [
      { id: 1, name: "Apple", uploadedBy: "John Doe" },
      { id: 2, name: "Carrot", uploadedBy: "Jane Smith" },
      { id: 3, name: "Milk", uploadedBy: "Alice Johnson" },
    ];
  
    const productTableBody = document.getElementById("product-list");
    productTableBody.innerHTML = ""; // Clear previous data
  
    products.forEach((product) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.uploadedBy}</td>
        <td>
          <button class="btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
          <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn-buy" onclick="buyProduct(${product.id})">Buy</button>
        </td>
      `;
  
      productTableBody.appendChild(row);
    });
  }
  
  function deleteProduct(productId) {
    alert(`Product with ID ${productId} deleted.`);
    // Here, send a request to the backend to delete the product
  }
  
  function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart.`);
    // Here, send a request to add the product to the cart
  }
  
  function buyProduct(productId) {
    alert(`Product with ID ${productId} purchased.`);
    // Here, send a request to process the purchase
  }
  