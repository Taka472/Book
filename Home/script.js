const starfield = document.getElementById("starfield");

function createStars() {
    const numberOfStars = 300; // Adjust the number of stars
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Loop to create the stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        
        // Random position and size
        const size = Math.random() * 2 + 1.5; // Star size between 1px and 3px
        const xPos = Math.random() * width; // Random X position
        const yPos = Math.random() * height; // Random Y position
        const animationDelay = Math.random() * 5 + "s"; // Random animation delay
        
        // Apply styles to the star element
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.position = "absolute";
        star.style.top = `${yPos}px`;
        star.style.left = `${xPos}px`;
        star.style.backgroundColor = "white";
        star.style.borderRadius = "50%"; // Circular shape
        star.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity for variation
        star.style.animation = `twinkle ${Math.random() * 3 + 1}s infinite alternate`;
        star.style.animationDelay = animationDelay;

        // Append the star to the starfield container
        starfield.appendChild(star);
    }
}

createStars();

// Optional: Resize stars if the window is resized
window.addEventListener("resize", function () {
    starfield.innerHTML = "";
    createStars();
});

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const navs = document.querySelectorAll('nav a');

navs.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        const targetId = link.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the section with an offset
        window.scrollTo({
            top: targetElement.offsetTop - 50, // 50px offset to make it appear lower
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});