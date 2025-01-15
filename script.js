const starfield = document.getElementById("starfield");
const authorID = 'sthshadowhart';

const bookID = ['B0DRF6FCWC', 'B0DSZH3PGC']

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

function redirectToMarketplace(index) {
    const book1ID = bookID[index];

    const marketplaceUrls = {
        "US": "https://www.amazon.com/dp/" + book1ID,
        "CA": "https://www.amazon.ca/dp/" + book1ID,
        "UK": "https://www.amazon.co.uk/dp/" + book1ID,
        "DE": "https://www.amazon.de/dp/" + book1ID,
        "FR": "https://www.amazon.fr/dp/" + book1ID,
        "IN": "https://www.amazon.in/dp/" + book1ID,
        "IT": "https://www.amazon.it/dp" + book1ID,
        "JP": "https://www.amazon.co.jp/dp" + book1ID
    };

    const defaultURL = "https://www.amazon.com/dp/" + book1ID;

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country || "US";
            const redirectUrl = marketplaceUrls[countryCode] || defaultURL;
            window.location.href = redirectUrl;
        })
        .catch(() => {
            window.location.href = defaultURL;
        });
}

function redirectToAuthor() {
    const authorPageUrls = {
        "US": "https://www.amazon.com/author/" + authorID,
        "CA": "https://www.amazon.ca/author/" + authorID,
        "UK": "https://www.amazon.co.uk/author/" + authorID,
        "DE": "https://www.amazon.de/author/" + authorID,
        "FR": "https://www.amazon.fr/author/" + authorID,
        "IN": "https://www.amazon.in/author/" + authorID,
        "IT": "https://www.amazon.it/author/" + authorID,
        "JP": "https://www.amazon.co.jp/author/" + authorID,
    };

    const defaultUrl = "https://www.amazon.com/author/" + authorID;

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country || "US";
            const redirectUrl = authorPageUrls[countryCode] || defaultUrl;
            window.location.href = redirectUrl;
        })
        .catch(() => {
            window.location.href = defaultUrl;
        });
}