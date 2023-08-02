const cartItems = [];

const product = [
  {
    id: 1,
    heading: "boAt Rockerz 245 pro",
    title:
      "Bluetooth Neckband in Ear with Mic, Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    img: "https://m.media-amazon.com/images/I/61DHTu6aisL._SX679_.jpg",
    price: 111999,
    discount: 60,
  },
  {
    id: 2,
    heading: "U.S. POLO ASSN.",
    title:
      "US Polo Association Mens Abor Sneakers",
    img: "https://m.media-amazon.com/images/I/712+YtEr4HL._UY695_.jpg",
    price: 1999,
    discount: 60,
  },
  {
    id: 3,
    heading: "U.S. POLO ASSN.",
    title:
      "US Polo Association Mens Abor Sneakers",
    img: "https://m.media-amazon.com/images/I/51Xy-XiQwsL._UY695_.jpg",
    price: 1999,
    discount: 60,
  },
  {
    id: 4,
    heading: "U.S. POLO ASSN.",
    title:
      "ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    img: "https://m.media-amazon.com/images/I/712+YtEr4HL._UY695_.jpg",
    price: 1999,
    discount: 22,
  },
  {
    id: 5,
    heading: "U.S. POLO ASSN.",
    title:
      "Bluetooth Neckband in Ear with Mic, Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    img: "https://m.media-amazon.com/images/I/51Xy-XiQwsL._UY695_.jpg",
    price: 1999,
    discount: 10,
  },
  {
    id: 6,
    heading: "U.S. POLO ASSN.",
    title:
      "Bluetooth Neckband in Ear with Mic, Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    img: "https://m.media-amazon.com/images/I/716Kc8nDelL._SX679_.jpg",
    price: 111999,
    discount: 3,
  },
  {
    id: 7,
    heading: "Yamaha FS100C Acoustic Guitar, Black",
    title:
      "Bluetooth Neckband in Ear with Mic, Beast Mode(Super Low Latency) for Gaming, ENx Tech for Clear Calls, ASAP Charge, 20HRS Playtime,IPX4, Dual Pairing & BT v5.3(Fiery Black)",
    img: "https://m.media-amazon.com/images/I/31BiyVd-QWL._SX300_SY300_QL70_FMwebp_.jpg",
    price: 11999,
    del:12000,
    discount: 6,
  },
  {
    id: 8,
    heading: "Galaxy Chocolate Potli",
    title:
      "Galaxy Chocolate Potli Gift Pack for Rakhi | Assortment of 6 Silky Smooth Chocolate Bars | Smooth Milk, Cookie Crumble & Fruit & Nut | Best Rakhi Chocolate Gift | 316 g",
    img: "https://m.media-amazon.com/images/I/51m7HfzcHKL._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg",
    price: 585,
    discount: 10,
  },
];
const render = product.map(
  (e) => `<div class="product">
<h1>${e.heading}</h1>
<p>${e.title}</p> 
<h4>${e.price} ₹ <del>${e.del} ₹</del></h4>
<img src="${e.img}" alt="product" class="productImg" >
<small>-${e.discount} %</small>
<button class="button-74" onclick="addToCart(${e.id})">Add to Cart</button>
</div>`
);
// add to cart
// !-----------------------------------


function addToCart(productId) {
    const selectedProduct = product.find((p) => p.id === productId);
    if (selectedProduct) {
        const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
        const newTotal = totalAmount + selectedProduct.price;
    
        if (newTotal > 100000) {
          alert(`Please add PAN card details for orders above 1,00,000 ₹.`);
        } else {
          cartItems.push(selectedProduct);
          updateCart();
        }
    }
  }
  
  // Function to update the cart items and total amount display
  function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    
    // Generate HTML for displaying cart items
    const cartItemsHTML = cartItems.map((item) => {
      return `<div class="cart-item">
                <img src="${item.img}" alt="product" class="cart-item-img">
                <div class="cart-item-details">
                  <h3>${item.heading}</h3>
                  <p>${item.title}</p>
                  <h4>${item.price} ₹ <del>${item.del || ''} ₹</del></h4>
                </div>
              </div>`;
    }).join('');
  
    // Update cart items display
    cartItemsContainer.innerHTML = cartItemsHTML;
  
    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    totalAmountElement.textContent = `Total: ${totalAmount} ₹`;
  }
  
// !------------------------------
document.getElementById('myProducts').innerHTML=render
updateCart();