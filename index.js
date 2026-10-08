let cheese = document.querySelector('.cheese-cost')
let parsedCheese = parseFloat(cheese.innerHTML)

let petterCost = document.querySelector('.petter-cost')
let parsedPetterCost = parseFloat(petterCost.innerHTML)

/* increase cheese */

function incrementCheese() {
    parsedCheese += 1
    cheese.innerHTML = parsedCheese
}

function buyPetter() {
    if (parsedCheese >= parsedPetterCost) {
        parsedCheese -= parsedPetterCost
        cheese.innerHTML = parsedCheese
    }
}








/* fancy upgrade animations */
const upgrade = document.querySelector(".upgrade");

upgrade.addEventListener("mousemove", (e) => {
    const rect = upgrade.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = (e.clientY - rect.top) / rect.height * 2 - 1;

    const rotateY = x * 10;
    const rotateX = -y * 10;

    upgrade.style.setProperty("--rotate-x", `${rotateX}deg`);
    upgrade.style.setProperty("--rotate-y", `${rotateY}deg`);
});

upgrade.addEventListener("mouseleave", () => {
    upgrade.style.setProperty("--rotate-x", "0deg");
    upgrade.style.setProperty("--rotate-y", "0deg");
});




/* fancy goose animations */
const goose = document.querySelector(".gooseimg");

goose.addEventListener("mousemove", (e) => {
    const rect = goose.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = (e.clientY - rect.top) / rect.height * 2 - 1;

    const rotateY = x * 20;
    const rotateX = -y * 20;

    goose.style.setProperty("--rotate-x", `${rotateX}deg`);
    goose.style.setProperty("--rotate-y", `${rotateY}deg`);
});

goose.addEventListener("mouseleave", () => {
    goose.style.setProperty("--rotate-x", "0deg");
    goose.style.setProperty("--rotate-y", "0deg");
});




goose.addEventListener("click", () => {
    const rect = goose.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement("img");

        particle.src = "assets/feather.png";
        particle.classList.add("particle");

        particle.style.left = `${rect.left + rect.width / 2}px`;
        particle.style.top = `${rect.top + rect.height / 2}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 100;

        particle.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        particle.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 600);
    }
});