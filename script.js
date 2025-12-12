// document.addEventListener('DOMContentLoaded', () => {
// const showPopupBtn = document.querySelector(".user-icon");
// const hidePopupBtn = document.querySelector(".form-popup .close-btn");
// const formPopup = document.querySelector(".form-popup");
// const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a")

// //showpopup
// showPopupBtn.addEventListener("click", () => {
//     document.body.classList.toggle("show-popup");
// });
// //hidepopup
// hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// loginSignupLink.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         formPopup.classList[link.id ==="signup-link" ? 'add' : 'remove']("show-signup");
//     });
// })
// }); 

// //signup
// function saveData() {
    
//     let email=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     //save to ls
//     localStorage.setItem("email",email);
//     localStorage.setItem("password",password);
//     alert("Signup was successful!!! yoc can now login");

//    //login 
// }
// function login(){
//     let email = document.getElementById("lEmail").value;
//   let password = document.getElementById("lPassword").value;
//    let storedEmail = localStorage.getItem("email");
//   let storedPassword = localStorage.getItem("password");

//   if (email === storedEmail && password === storedPassword) {
//     alert("Login successful!");
//     localStorage.setItem("isLoggedIn", "true");
//     window.location.href = "shop.html"; // redirect
//   } else {
//     alert("Invalid email or password!");
// }
// }
// //contact bleble
// document.getElementById("contform").addEventListener("submit", function(e){
//     e.preventDefault();
//     let name= document.getElementById("name").value;
//     let email= document.getElementById("contactemail").value;
//     let message= document.getElementById("message").value;
//     alert("Thankyou!! your message has been sent. We will reach out soon!!");
//     this.reset();

// }); 

// const cartIcon = document.querySelector("#cart-icon");
// const cart = document.querySelector(".cart");
// const cartClose = document.querySelector("#cart-close");

// cartIcon.addEventListener("click", () => cart.classList.add("active"));
// cartClose.addEventListener("click", () => cart.classList.remove("active"));

// const cartContent = document.querySelector(".cart-content");

// // Select all "Add to Cart" buttons
// const addcartButtons = document.querySelectorAll(".product-card .btn-art.btn-sm");

// addcartButtons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.preventDefault();
//     const productBox = event.target.closest(".product-card");
//     addToCart(productBox);
//   });
// });

// const addToCart = (productBox) => {
//   const productImgSrc = productBox.querySelector("img").src;
//   const productTitle = productBox.querySelector(".product-title").textContent;
//   const productPrice = productBox.querySelector(".product-price").textContent;

//   // Prevent duplicates
//   const cartItems = cartContent.querySelectorAll(".cart-product-title");
//   for (let item of cartItems) {
//     if (item.textContent === productTitle) {
//       alert("Item already in cart!");
//       return;
//     }
//   }

//   // Add new item
//   const cartBox = document.createElement("div");
//   cartBox.classList.add("cart-box");
//   cartBox.innerHTML = `
//     <img src="${productImgSrc}" class="cart-img">
//     <div class="cart-detail">
//       <h2 class="cart-product-title">${productTitle}</h2>
//       <span class="cart-price">${productPrice}</span>
//       <div class="cart-quantity">
//         <span class="number">1</span>
//       </div>
//     </div>
//     <i class="bi bi-trash cart-remove"></i>
//   `;

//   cartContent.appendChild(cartBox);

//   // Remove item
//   cartBox.querySelector(".cart-remove").addEventListener("click", () => {
//     cartBox.remove();
//     updateTotalPrice();
//     updateTotalPrice(-1); //decrease
//   });
    
//   updateTotalPrice();//update
//   updateTotalPrice(1);

// };
// const updateTotalPrice = () => {
//     const totalPriceElement = document.querySelector(".total-price");
//     const cartBoxes = document.querySelectorAll(".cart-box");
//     let total = 0;

//     cartBoxes.forEach(cartBox => {
//         const priceElement = cartBox.querySelector(".cart-price");
//         const quantityElement = cartBox.querySelector(".number");

        
//         const price = parseFloat(priceElement.textContent.replace("Rs:", "").trim());
//         const quantity = parseInt(quantityElement.textContent);

//         total += price * quantity;
//     });

//     totalPriceElement.textContent = `Rs:${total}`;
// };
// let cartItemCount = 0;

// const updateCartCount = (change) => {
//     const cartItemCountBadge = document.querySelector(".cart-badge");
    
//     cartItemCount += change;

//     if (cartItemCount > 0) {
//         cartItemCountBadge.style.visibility = "visible";
//         cartItemCountBadge.textContent = cartItemCount;
//     } else {
//         cartItemCountBadge.style.visibility = "hidden";
//         cartItemCountBadge.textContent = "";
//     }
// };
document.addEventListener('DOMContentLoaded', () => {
  const showPopupBtn = document.querySelector(".user-icon");
  const hidePopupBtn = document.querySelector(".form-popup .close-btn");
  const formPopup = document.querySelector(".form-popup");
  const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

  // Show popup
  showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
  });

  // Hide popup
  hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

  // Switch between login and signup
  loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
  });
  loadCart();
});

// Signup
function saveData() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  alert("Signup was successful! You can now login.");
}

// Login
function login() {
  let email = document.getElementById("lEmail").value.trim();
  let password = document.getElementById("lPassword").value.trim();
  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "shop.html";
  } else {
    alert("Invalid email or password!");
  }
}

// Contact form
document.getElementById("contform").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("contactemail").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields!");
    return;
  }

  alert("Thank you! Your message has been sent. We will reach out soon!");
  this.reset();
});

// Cart system
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const cartContent = document.querySelector(".cart-content");
const addcartButtons = document.querySelectorAll(".product-card .btn-art.btn-sm");

// Cart counter
let cartItemCount = 0;

const updateCartCount = (change) => {
  const cartItemCountBadge = document.querySelector(".cart-badge");

  cartItemCount += change;
  if (cartItemCount < 0) cartItemCount = 0; // safety check

  cartItemCountBadge.style.visibility = "visible"; // always show
  cartItemCountBadge.textContent = cartItemCount;
};

// Add to cart
addcartButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    const productBox = event.target.closest(".product-card");
    addToCart(productBox);
  });
});

const addToCart = (productBox) => {
  const productImgSrc = productBox.querySelector("img").src;
  const productTitle = productBox.querySelector(".product-title").textContent;
  const productPrice = productBox.querySelector(".product-price").textContent;

  // Prevent duplicates
  const cartItems = cartContent.querySelectorAll(".cart-product-title");
  for (let item of cartItems) {
    if (item.textContent === productTitle) {
      alert("Item already in cart!");
      return;
    }
  }

  // Add new item
  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `
    <img src="${productImgSrc}" class="cart-img">
    <div class="cart-detail">
      <h2 class="cart-product-title">${productTitle}</h2>
      <span class="cart-price">${productPrice}</span>
      <div class="cart-quantity">
        <span class="number">1</span>
      </div>
    </div>
    <i class="bi bi-trash cart-remove"></i>
  `;

  cartContent.appendChild(cartBox);

  // Remove item
  cartBox.querySelector(".cart-remove").addEventListener("click", () => {
    cartBox.remove();
    updateTotalPrice();
    updateCartCount(-1); // decrease count
    saveCart();
  });

  // Update totals and count on add
  updateTotalPrice();
  updateCartCount(1);
  saveCart();
};

// Update total price
const updateTotalPrice = () => {
  const totalPriceElement = document.querySelector(".total-price");
  const cartBoxes = document.querySelectorAll(".cart-box");
  let total = 0;

  cartBoxes.forEach(cartBox => {
    const priceElement = cartBox.querySelector(".cart-price");
    const quantityElement = cartBox.querySelector(".number");

    const price = parseFloat(priceElement.textContent.replace("Rs:", "").trim());
    const quantity = parseInt(quantityElement.textContent);

    total += price * quantity;
  });

  totalPriceElement.textContent = `Rs:${total}`;
};
// Save cart to localStorage
const saveCart = () => {
    localStorage.setItem("cartItems", document.querySelector(".cart-content").innerHTML);
    localStorage.setItem("cartTotal", document.querySelector(".total-price").innerText);
    localStorage.setItem("cartCount", document.querySelector(".cart-badge").innerText);
};

// Load cart from localStorage
const loadCart = () => {
    const savedItems = localStorage.getItem("cartItems");
    const savedTotal = localStorage.getItem("cartTotal");
    const savedCount = localStorage.getItem("cartCount");

    if (savedItems) {
        cartContent.innerHTML = savedItems;
        document.querySelector(".total-price").innerText = savedTotal;

        // Restore counter correctly
        cartItemCount = parseInt(savedCount) || 0;
        const cartItemCountBadge = document.querySelector(".cart-badge");
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;

        // Reattach remove listeners
        document.querySelectorAll(".cart-remove").forEach((btn) => {
            btn.addEventListener("click", (event) => {
                const cartBox = event.target.closest(".cart-box");
                cartBox.remove();
                updateTotalPrice();
                updateCartCount(-1);
                saveCart();
            });
        });
    }
};
// Buy Now functionality
document.addEventListener("DOMContentLoaded", () => {
    const buyNowBtn = document.querySelector(".btn-buy");

    buyNowBtn.addEventListener("click", () => {
        const cartBoxes = document.querySelectorAll(".cart-box");

        if (cartBoxes.length === 0) {
            alert("Your cart is empty! Please add items before buying.");
            return;
        }

        alert("🎉 Thank you for your purchase! Your order has been placed.");

        // Clear cart after purchase
        cartContent.innerHTML = "";
        updateTotalPrice();
        cartItemCount = 0;
        const cartBadge = document.querySelector(".cart-badge");
        cartBadge.textContent = cartItemCount;
        cartBadge.style.visibility = "visible"; // keep badge visible even if 0
        saveCart();
    });
});






