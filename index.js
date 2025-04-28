document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.className = 'hamburger-menu';
    hamburgerMenu.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const navLinks = document.querySelector('.nav-links');
    const labels = document.querySelector('.labels');
    
    // Insert hamburger menu after the logo
    labels.insertBefore(hamburgerMenu, navLinks);
    
    // Create overlay for mobile menu
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking on navigation links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);

            if (dropdown) {
                if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                    dropdown.style.display = 'block';
                    dropdown.focus();
                } else {
                    dropdown.style.display = 'none';
                }
            }
        });
    });


    const OrderNow = document.querySelector(".order-now")
    const ModalContainer = document.querySelector(".modal-container")
    const Overlay = document.querySelector(".overlay");

    OrderNow.addEventListener("click", () => {
        ModalContainer.style.display = "flex";
        Overlay.style.display = "block";
    })

    Overlay.addEventListener("click", () => {
        console.log("I have been clicked")
        ModalContainer.style.display = "none";
        Overlay.style.display = "none";
    })

    setTimeout(() => {
        document.querySelector('.line1').classList.add('finished');
      }, 3000); // after 3s typing line1
    
      setTimeout(() => {
        document.querySelector('.line2').classList.add('finished');
      }, 7000);

});
