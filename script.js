const menuItems = [
    // Burgers
    { name: "Classic Cheeseburger", price: 129, rating: 4.5, ratingCount: 230, description: "Juicy beef patty with melted cheese, lettuce, and tomato", image: "https://example.com/classic_cheeseburger.jpg", category: "burgers" },
    { name: "Veggie Delight Burger", price: 119, rating: 4.3, ratingCount: 180, description: "Plant-based patty with avocado, sprouts, and vegan mayo", image: "https://example.com/veggie_delight.jpg", category: "burgers" },
    { name: "Spicy Chicken Burger", price: 139, rating: 4.6, ratingCount: 210, description: "Crispy chicken fillet with jalapeños and spicy sauce", image: "https://example.com/spicy_chicken_burger.jpg", category: "burgers" },

    // Pizza
    { name: "Margherita Pizza", price: 199, rating: 4.4, ratingCount: 190, description: "Classic pizza with tomato sauce, mozzarella, and basil", image: "https://example.com/margherita_pizza.jpg", category: "pizza" },
    { name: "Pepperoni Supreme", price: 249, rating: 4.7, ratingCount: 220, description: "Loaded with pepperoni, bell peppers, and olives", image: "https://example.com/pepperoni_supreme.jpg", category: "pizza" },
    { name: "Vegetarian Delight", price: 229, rating: 4.3, ratingCount: 170, description: "Assorted vegetables on a crispy thin crust", image: "https://example.com/vegetarian_pizza.jpg", category: "pizza" },

    // Pasta
    { name: "Spaghetti Carbonara", price: 179, rating: 4.6, ratingCount: 200, description: "Creamy pasta with bacon and parmesan cheese", image: "https://example.com/spaghetti_carbonara.jpg", category: "pasta" },
    { name: "Penne Arrabbiata", price: 159, rating: 4.2, ratingCount: 150, description: "Spicy tomato sauce with garlic and red chili flakes", image: "https://example.com/penne_arrabbiata.jpg", category: "pasta" },
    { name: "Fettuccine Alfredo", price: 189, rating: 4.5, ratingCount: 180, description: "Rich and creamy sauce with grilled chicken", image: "https://example.com/fettuccine_alfredo.jpg", category: "pasta" },

    // Salads
    { name: "Caesar Salad", price: 149, rating: 4.1, ratingCount: 130, description: "Crisp romaine lettuce with Caesar dressing and croutons", image: "https://example.com/caesar_salad.jpg", category: "salads" },
    { name: "Greek Salad", price: 159, rating: 4.3, ratingCount: 140, description: "Fresh vegetables with feta cheese and olives", image: "https://example.com/greek_salad.jpg", category: "salads" },
    { name: "Quinoa Power Bowl", price: 179, rating: 4.4, ratingCount: 120, description: "Nutrient-rich salad with quinoa, avocado, and mixed greens", image: "https://example.com/quinoa_bowl.jpg", category: "salads" },

    // Desserts
    { name: "Chocolate Brownie Sundae", price: 129, rating: 4.7, ratingCount: 170, description: "Warm chocolate brownie topped with vanilla ice cream and hot fudge", image: "https://example.com/brownie_sundae.jpg", category: "desserts" },
    { name: "New York Cheesecake", price: 139, rating: 4.6, ratingCount: 160, description: "Creamy cheesecake with a graham cracker crust", image: "https://example.com/cheesecake.jpg", category: "desserts" },
    { name: "Tiramisu", price: 149, rating: 4.5, ratingCount: 150, description: "Italian coffee-flavored dessert with layers of mascarpone", image: "https://example.com/tiramisu.jpg", category: "desserts" },

    // Drinks
    { name: "Fresh Lemonade", price: 69, rating: 4.2, ratingCount: 110, description: "Refreshing homemade lemonade with mint", image: "https://example.com/lemonade.jpg", category: "drinks" },
    { name: "Iced Caramel Macchiato", price: 89, rating: 4.4, ratingCount: 130, description: "Espresso with milk and caramel syrup over ice", image: "https://example.com/iced_macchiato.jpg", category: "drinks" },
    { name: "Mango Lassi", price: 79, rating: 4.5, ratingCount: 140, description: "Creamy yogurt-based drink with mango pulp", image: "https://example.com/mango_lassi.jpg", category: "drinks" },
];

let cart = {};
let lastScrollTop = 0;
const nav = document.getElementById('category-nav');
const navContainer = document.getElementById('nav-container');
const navHeight = nav.offsetHeight;

function renderMenuItems() {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    
    const categories = ['burgers', 'pizza', 'pasta', 'salads', 'desserts', 'drinks'];
    
    categories.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.id = category;
        categorySection.innerHTML = `<h2>${category.toUpperCase()}</h2>`;
        
        const categoryItems = menuItems.filter(item => item.category === category);
        
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
}

function fixNavOnScrollUp() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > navHeight) {
        // Scrolling down
        navContainer.classList.remove('fixed-nav');
        document.body.classList.remove('nav-padding');
    } else if (scrollTop < lastScrollTop) {
        // Scrolling up
        navContainer.classList.add('fixed-nav');
        document.body.classList.add('nav-padding');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

function highlightNavButton() {
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('nav button');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - window.innerHeight / 2) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(button => {
        if (button.dataset.category === currentSectionId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartCount();
    renderMenuItems();

    document.querySelectorAll('nav button').forEach(button => {
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

    window.addEventListener('click', (e) => {
        if (e.target == document.getElementById('cart-modal')) {
            document.getElementById('cart-modal').style.display = 'none';
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Proceeding to checkout... (This is where you would implement the checkout process)');
    });

    window.addEventListener('scroll', () => {
        fixNavOnScrollUp();
        highlightNavButton();
    });
});
