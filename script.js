const menuItems = [
    { name: "Veg Snacker Burger", price: 79, rating: 4.2, ratingCount: 120, description: "Delicious veggie patty with fresh lettuce and our special sauce", image: "https://www.botanicalkitchen.com/wp-content/uploads/2021/01/Salad-lettuce-radish-carrot.jpg", category: "burgers" },
    { name: "Chicken Whopper", price: 129, rating: 4.5, ratingCount: 200, description: "Flame-grilled chicken patty topped with fresh veggies", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kuns3umpUgkJXY5z3eqKhbWJXHLmDgb4cw&s", category: "burgers" },
    { name: "Paneer Royale", price: 159, rating: 4.3, ratingCount: 150, description: "Premium paneer patty with cheese and royal sauce", image: "https://picsum.photos/100?random=3", category: "burgers" },
    { name: "Crispy Veg Wrap", price: 99, rating: 4.0, ratingCount: 80, description: "Crispy veg patty wrapped in a soft tortilla", image: "https://www.eatingwell.com/thmb/jMiblIMDYWDUQHnUOwX9lBpvVCc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5586373-8bdb7a6fc99444e7bedec0e89de5eba0.jpg", category: "menu" },
    { name: "Chicken Tandoori Wrap", price: 119, rating: 4.4, ratingCount: 110, description: "Tandoori chicken wrapped with mint mayo", image: "https://static.toiimg.com/thumb/62194857.cms?imgsize=1146358&width=800&height=800", category: "menu" },
    { name: "French Fries", price: 69, rating: 4.1, ratingCount: 90, description: "Crispy golden fries served hot", image: "https://www.shellyfoodspot.com/wp-content/uploads/2023/07/Veggie-strips-recipe--scaled.jpg", category: "menu" },
    { name: "Veggie Strips", price: 89, rating: 3.9, ratingCount: 70, description: "Crunchy veggie strips with dipping sauce", image: "https://www.shellyfoodspot.com/wp-content/uploads/2023/07/Veggie-strips-recipe--scaled.jpg", category: "menu" },
    { name: "Chicken Nuggets", price: 99, rating: 4.2, ratingCount: 130, description: "Juicy chicken nuggets, perfect for snacking", image: "https://cdn.urbanpiper.com/media/bizmedia/2023/01/17/Chicken_nuggets_1673962569.jpg", category: "menu" },
    { name: "Chocolate Shake", price: 109, rating: 4.6, ratingCount: 180, description: "Rich and creamy chocolate milkshake", image: "https://thehomeintent.com/wp-content/uploads/2023/02/Chocolate-Milkshake-without-Ice-Cream-Healthy-Recipe-featured.jpg", category: "menu" },
    { name: "Mango Smoothie", price: 119, rating: 4.3, ratingCount: 95, description: "Refreshing mango smoothie made with real fruit", image: "https://www.liveeatlearn.com/wp-content/uploads/2020/08/mango-smoothie-vert.jpg", category: "menu" },
    { name: "Double Cheese Burger", price: 149, rating: 4.7, ratingCount: 220, description: "Double the cheese, double the flavor", image: "https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:nutrition-calculator-tile?resmode=sharp2", category: "burgers" },
    { name: "Spicy Bean Burger", price: 109, rating: 4.0, ratingCount: 85, description: "Spicy bean patty for those who like it hot", image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg", category: "burgers" },
    { name: "Fish Fillet Burger", price: 139, rating: 4.1, ratingCount: 100, description: "Crispy fish fillet with tartar sauce", image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg", category: "burgers" },
    { name: "Veggie Salad", price: 129, rating: 4.2, ratingCount: 75, description: "Fresh mixed veggies with our house dressing", image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg", category: "menu" },
    { name: "Chicken Caesar Salad", price: 149, rating: 4.4, ratingCount: 110, description: "Classic Caesar salad with grilled chicken", image: "https://www.erinliveswhole.com/wp-content/uploads/2021/03/chicken-caesar-salad-6.jpg", category: "menu" },
    { name: "Onion Rings", price: 79, rating: 4.0, ratingCount: 95, description: "Crispy battered onion rings", image: "https://kristineskitchenblog.com/wp-content/uploads/2022/03/crispy-air-fryer-onion-rings-recipe-0775.jpg", category: "menu" },
    { name: "Chilli Cheese Fries", price: 99, rating: 4.3, ratingCount: 130, description: "Fries topped with chilli and melted cheese", image: "https://images.ctfassets.net/hhv516v5f7sj/1OjIcGeVKg5maT9j6dLt4r/9d5e392fad9efa33f0903e7dcb0e521f/chilicheesefries_1000x1000.jpg", category: "menu" },
    { name: "Vanilla Ice Cream", price: 59, rating: 4.5, ratingCount: 150, description: "Creamy vanilla ice cream", image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/34F77344-5BD2-47B8-9213-2932E58C75FA/Derivates/D64A6A85-3934-4C3C-8DD4-7D54A4CA5A4F.jpg", category: "menu" },
    { name: "Chocolate Brownie", price: 89, rating: 4.8, ratingCount: 200, description: "Warm chocolate brownie with vanilla ice cream", image: "https://chocolatecoveredkatie.com/wp-content/uploads/2022/11/Vegan-Brownies.jpg", category: "menu" },
    { name: "Lemon Iced Tea", price: 69, rating: 4.2, ratingCount: 90, description: "Refreshing lemon iced tea", image: "https://recipes.net/wp-content/uploads/2020/06/mint-and-lemon-iced-tea-recipes.jpg", category: "menu" },
];

let cart = {};

function renderMenuItems(category = 'recommended') {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    
    const itemsToRender = category === 'recommended' 
        ? menuItems.slice(0, 5) 
        : menuItems.filter(item => item.category === category);

    itemsToRender.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-details">
                <h3>${item.name}</h3>
                <div>★${item.rating.toFixed(1)} (${item.ratingCount} ratings)</div>
                <div>₹${item.price}</div>
                <p>${item.description}</p>
                <div class="quantity-control" data-name="${item.name}" data-price="${item.price}">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity">0</span>
                    <button class="quantity-btn plus">+</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(menuItem);
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
            <div>${name} x ${item.quantity} - ₹${itemTotal}</div>
        `;
    }
    
    cartTotal.innerHTML = `Total: ₹${total}`;
    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();

    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderMenuItems(e.target.dataset.category);
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
});
