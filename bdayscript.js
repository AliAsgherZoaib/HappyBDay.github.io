window.addEventListener("load", () => {
    const poppersContainer = document.querySelector(".poppers");
    const popup = document.getElementById("birthdayPopup");
    const images = popup.querySelectorAll("img");
    const textContainer = document.querySelector(".typewriter-container");
    const colors = ["#FF6F61", "#FFC154", "#47B39C", "#A93F55", "#6B5B95", "#92A8D1"];

    // Show confetti and first image after 2 seconds
    setTimeout(() => {
        popup.style.display = "block";
        images[0].style.display = "block";

        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("popper-piece");
            confetti.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
            const x = Math.random() * window.innerWidth;
            const delay = Math.random() * 2;
            confetti.style.left = `${x}px`;
            confetti.style.animationDelay = `${delay}s`;

            poppersContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000 + delay * 1000);
        }
    }, 2000);

    // Show second image after 6 seconds
    setTimeout(() => {
        images[0].style.display = "none";
        images[1].style.display = "block";
    }, 6000);

    // Show typewriter text after 6 seconds
    setTimeout(() => {
        textContainer.style.display = "block";
    }, 6000);
});
