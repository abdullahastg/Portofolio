// Scroll buttons

document.getElementById('HomeBtn').addEventListener('click', ()=> {
    console.log('Clicked')
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

document.getElementById('ProjBtn').addEventListener('click', ()=> {
    console.log('Clicked')
    // Scroll to the Projects section smoothly
    document.getElementById('Projects').scrollIntoView({
        behavior: 'smooth'
    });
})

document.getElementById('AboutBtn').addEventListener('click', ()=> {
    console.log('Clicked')
    // Scroll to the About me section smoothly
    document.getElementById('AboutMe').scrollIntoView({
        behavior: 'smooth'
    });
})

document.getElementById('ContactBtn').addEventListener('click', ()=> {
    console.log('Clicked')
    // Scroll to the Contact me section smoothly
    document.getElementById('ContactMe').scrollIntoView({
        behavior: 'smooth'
    });
})

// Function to handle navbar positioning
function handleNavbarPosition() {
    const navbar = document.querySelector('nav');
    const heroHeight = document.querySelector('.Hero').offsetHeight;

    if (window.scrollY > heroHeight) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.zIndex = '1000';
    } else {
        navbar.style.position = 'static';
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleNavbarPosition);

// Call the function once on page load to set initial state
handleNavbarPosition();


