const menuItems = [
    // Burgers
    { name: "Classic Cheeseburger", price: 129, rating: 4.5, ratingCount: 230, description: "Juicy beef patty with melted cheese, lettuce, and tomato", image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg", category: "burgers" },
    { name: "Veggie Delight Burger", price: 119, rating: 4.3, ratingCount: 180, description: "Plant-based patty with avocado, sprouts, and vegan mayo", image: "https://dms.mydukaan.io/original/jpeg/590610/5868aea2-f274-4eab-822f-27da13d4a499.png", category: "burgers" },
    { name: "Spicy Chicken Burger", price: 139, rating: 4.6, ratingCount: 210, description: "Crispy chicken fillet with jalapeños and spicy sauce", image: "https://www.thespruceeats.com/thmb/zBVaQHpbcBiz2ohBMpRJENoJ6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-fried-chicken-sandwich-5220981-hero-01-f742363e943f4fc1aff902da3342765a.jpg", category: "burgers" },

    // Pizza
    { name: "Margherita Pizza", price: 199, rating: 4.4, ratingCount: 190, description: "Classic pizza with tomato sauce, mozzarella, and basil", image: "https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg", category: "pizza" },
    { name: "Pepperoni Supreme", price: 249, rating: 4.7, ratingCount: 220, description: "Loaded with pepperoni, bell peppers, and olives", image: "https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_642,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg", category: "pizza" },
    { name: "Vegetarian Delight", price: 229, rating: 4.3, ratingCount: 170, description: "Assorted vegetables on a crispy thin crust", image: "https://sirtom.in/wp-content/uploads/2024/02/veggie-delight.jpg", category: "pizza" },

    // Pasta
    { name: "Spaghetti Carbonara", price: 179, rating: 4.6, ratingCount: 200, description: "Creamy pasta with bacon and parmesan cheese", image: "https://www.kimscravings.com/wp-content/uploads/2022/12/creamy-pasta-sauce.jpg", category: "pasta" },
    { name: "Penne Arrabbiata", price: 159, rating: 4.2, ratingCount: 150, description: "Spicy tomato sauce with garlic and red chili flakes", image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg", category: "pasta" },
    { name: "Fettuccine Alfredo", price: 189, rating: 4.5, ratingCount: 180, description: "Rich and creamy sauce with grilled chicken", image: "https://thefruityjem.com/wp-content/uploads/2024/02/creamy-tandoori-sauce-pasta.jpg", category: "pasta" },

    // Salads
    { name: "Caesar Salad", price: 149, rating: 4.1, ratingCount: 130, description: "Crisp romaine lettuce with Caesar dressing and croutons", image: "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg", category: "salads" },
    { name: "Greek Salad", price: 159, rating: 4.3, ratingCount: 140, description: "Fresh vegetables with feta cheese and olives", image: "https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3-735x735.jpeg", category: "salads" },
    { name: "Quinoa Power Bowl", price: 179, rating: 4.4, ratingCount: 120, description: "Nutrient-rich salad with quinoa, avocado, and mixed greens", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaBUm-DApjwcwDDwsXr2KCOAjOS319s9DXw&s", category: "salads" },

// Desserts (continued)
    { name: "New York Cheesecake", price: 139, rating: 4.6, ratingCount: 160, description: "Creamy cheesecake with a graham cracker crust", image: "https://assets.epicurious.com/photos/62bdc36d9de40a39de6bd598/3:2/w_6948,h_4632,c_limit/Cheesecake_RECIPE_062922_36317.jpg", category: "desserts" },
    { name: "Tiramisu", price: 149, rating: 4.5, ratingCount: 150, description: "Italian coffee-flavored dessert with layers of mascarpone", image: "https://handletheheat.com/wp-content/uploads/2023/12/best-tiramisu-recipe-SQUARE.jpg", category: "desserts" },

    // Drinks
    { name: "Fresh Lemonade", price: 69, rating: 4.2, ratingCount: 110, description: "Refreshing homemade lemonade with mint", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4NJxmIsxhswy55v1GEWSkGKJbqD5ooPZLg&s", category: "drinks" },
    { name: "Iced Caramel Macchiato", price: 89, rating: 4.4, ratingCount: 130, description: "Espresso with milk and caramel syrup over ice", image: "https://thehealthfulideas.com/wp-content/uploads/2022/05/Iced-Caramel-Macchiato-SQUARE.jpg", category: "drinks" },
    { name: "Mango Lassi", price: 79, rating: 4.5, ratingCount: 140, description: "Creamy yogurt-based drink with mango pulp", image: "https://www.teaforturmeric.com/wp-content/uploads/2021/07/Mango-Lassi-Recipe-Card-1.jpg", category: "drinks" },
];

let cart = {};
let lastScrollTop = 0;

function renderMenuItems(items = menuItems) {
    console.log("Rendering menu items:", items); // Debug log
    const menuContainer = document.getElementById('menu-items');
    if (!menuContainer) {
        console.error("Menu container not found!");
        return;
    }
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = '<p>No items to display.</p>';
        return;
    }

    const categories = ['burgers', 'pizza', 'pasta', 'salads', 'desserts', 'drinks'];
    
    categories.forEach(category => {
        const categoryItems = items.filter(item => item.category === category);
        if (categoryItems.length === 0) return;

        const categorySection = document.createElement('section');
        categorySection.id = category;
        categorySection.innerHTML = `<h2>${category.toUpperCase()}</h2>`;
        
        categoryItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="menu-item-details">
                    <h3>${item.name}</h3>
                    <div>★${item.rating.toFixed(1)} (${item.ratingCount} ratings)</div>
                    <div>₹${item.price}</div>
                    <p>${item.description}</p>
                    <div class="quantity-control" data-name="${item.name}" data-price="${item.price}">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">${cart[item.name]?.quantity || 0}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
            `;
            categorySection.appendChild(menuItem);
        });
        
        menuContainer.appendChild(categorySection);
    });

    // Fallback in case no items are rendered
    if (menuContainer.children.length === 0) {
        console.log("No items rendered, displaying all items as fallback");
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <div>₹${item.price}</div>
                <p>${item.description}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    }
}

function updateCart(name, price, change) {
    if (!cart[name]) {
        cart[name] = { quantity: 0, price: price };
    }
    cart[name].quantity += change;
    if (cart[name].quantity <= 0) {
        delete cart[name];
    }
    updateCartCount();
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    for (const [name, item] of Object.entries(cart)) {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${name}</span>
                <span>x ${item.quantity}</span>
                <span>₹${itemTotal}</span>
            </div>
        `;
    }
    
    cartTotal.innerHTML = `Total: ₹${total}`;
    modal.style.display = 'block';
    getRecommendations();
}

function searchItems() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );
    console.log("Search results:", filteredItems); // Debug log
    renderMenuItems(filteredItems);
}

function filterItems(filter) {
    let filteredItems;
    if (filter === 'veg') {
        filteredItems = menuItems.filter(item => !item.name.toLowerCase().includes('chicken') && !item.name.toLowerCase().includes('beef'));
    } else if (filter === 'non-veg') {
        filteredItems = menuItems.filter(item => item.name.toLowerCase().includes('chicken') || item.name.toLowerCase().includes('beef'));
    } else {
        filteredItems = menuItems;
    }
    console.log("Filtered items:", filteredItems); // Debug log
    renderMenuItems(filteredItems);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function getRecommendations() {
    const recommendations = menuItems.filter(item => 
        !Object.keys(cart).includes(item.name) &&
        item.category !== 'drinks'
    ).slice(0, 3);

    const recommendedItems = document.getElementById('recommended-items');
    recommendedItems.innerHTML = recommendations.map(item => `
        <div class="recommended-item">
            <img src="${item.image}" alt="${item.name}" width="50">
            <span>${item.name}</span>
            <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
        </div>
    `).join('');
}

function addToCart(name, price) {
    updateCart(name, price, 1);
    renderMenuItems();
    showCart();
}

function highlightNavButton() {
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('#category-nav button');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        const sectionBottom = sectionTop + section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(button => {
        if (button.dataset.category === currentSectionId) {
            button.classList.add('active');
            button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            button.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
    cart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartCount();
    renderMenuItems();

    document.querySelectorAll('#category-nav button').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetSection = document.getElementById(e.target.dataset.category);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.getElementById('menu-items').addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const control = e.target.closest('.quantity-control');
            const name = control.dataset.name;
            const price = parseFloat(control.dataset.price);
            const quantitySpan = control.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent);

            if (e.target.classList.contains('plus')) {
                quantity++;
                updateCart(name, price, 1);
            } else if (e.target.classList.contains('minus') && quantity > 0) {
                quantity--;
                updateCart(name, price, -1);
            }

            quantitySpan.textContent = quantity;
        }
    });

    document.getElementById('cart-icon').addEventListener('click', showCart);
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'none';
    });
    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Proceeding to checkout... (This is where you would implement the checkout process)');
    });
    document.getElementById('search-btn').addEventListener('click', searchItems);
    document.getElementById('search-input').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchItems();
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterItems(e.target.dataset.filter);
        });
    });
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

    window.addEventListener('scroll', () => {
        highlightNavButton();
    });

    window.addEventListener('click', (e) => {
        if (e.target == document.getElementById('cart-modal')) {
            document.getElementById('cart-modal').style.display = 'none';
        }
    });
});

// Implement lazy loading
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
