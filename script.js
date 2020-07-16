const navSlide = () => {
    console.log("executed")
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")
    
    burger.addEventListener("click", () => {
        console.log("Cliucked")
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`
        })
    });

    
}

navSlide();