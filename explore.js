document.addEventListener('DOMContentLoaded', function() {
    // Food items data
    const foodItems = [
        {
            id: 1,
            name: 'Prince Charles',
            price: 3.25,
            image: 'https://img.icons8.com/color/96/000000/hamburger.png',
            category: 'Fast Food'
        },
        {
            id: 2,
            name: 'Bobo',
            price: 2.35,
            image: 'https://img.icons8.com/color/96/000000/cake.png',
            category: 'Dessert'
        },
        {
            id: 3,
            name: 'Isha',
            price: 5.35,
            image: 'https://img.icons8.com/color/96/000000/salad.png',
            category: 'Healthy'
        }
    ];

    // Current selected food
    let selectedFood = foodItems.find(item => item.name === 'Isha');
    let quantity = 2;
    updateTotalPrice();

    // Get DOM elements
    const quantityElement = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decrease-quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const buyNowBtn = document.getElementById('buy-now');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    const foodCategories = document.querySelectorAll('.food-category');

    // Add event listeners
    decreaseBtn.addEventListener('click', decreaseQuantity);
    increaseBtn.addEventListener('click', increaseQuantity);
    buyNowBtn.addEventListener('click', handleBuyNow);
    prevSlideBtn.addEventListener('click', slidePrev);
    nextSlideBtn.addEventListener('click', slideNext);

    // Add click event for food categories
    foodCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            foodCategories.forEach(cat => cat.classList.remove('active'));
            // Add active class to clicked category
            this.classList.add('active');
            
            // Update selected food
            const foodName = this.querySelector('h4').textContent;
            selectedFood = foodItems.find(item => item.name === foodName);
            
            // Update UI to reflect selected food
            updateFoodDisplay();
            updateTotalPrice();
        });
    });

    // Functions
    function decreaseQuantity() {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    }

    function increaseQuantity() {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }

    function updateTotalPrice() {
        const totalPrice = (selectedFood.price * quantity).toFixed(2);
        document.querySelector('.total-price').textContent = `$${totalPrice}`;
    }

    function updateFoodDisplay() {
        // Update the main image and details
        const foodImage = document.querySelector('.food-image');
        const foodName = document.querySelector('.food-details h3').childNodes[0];
        
        // Update food name
        foodName.textContent = selectedFood.name + ' ';
        
        // Use different background images based on selected food
        if (selectedFood.name === 'Burger') {
            foodImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')";
        } else if (selectedFood.name === 'Cake') {
            foodImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')";
        } else if (selectedFood.name === 'Salad') {
            foodImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')";
        }
    }

    function handleBuyNow() {
        alert(`Thank you for your order!\n\nItem: ${selectedFood.name}\nQuantity: ${quantity}\nTotal: $${(selectedFood.price * quantity).toFixed(2)}`);
    }

    function slidePrev() {
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.prepend(sliderContainer.lastElementChild);
    }

    function slideNext() {
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.appendChild(sliderContainer.firstElementChild);
    }

    // Add simple animations for UI elements
    const decorElements = document.querySelectorAll('.deco-item');
    
    // Random movement animation for decoration elements
    decorElements.forEach(elem => {
        setInterval(() => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            const randomRotate = Math.random() * 20 - 10;
            
            elem.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        }, 2000);
    });

    // Mobile menu handling
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            // Add active class to clicked menu item
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        alert('Search functionality will be implemented here');
    });

    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    
    cartBtn.addEventListener('click', function() {
        alert('Cart contains 2 items');
    });
});
