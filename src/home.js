import img_devilChef from "./images/devilchef.png";

export default function write() {
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Infernal Pizza";
    content.appendChild(headline);

    const imageChef = document.createElement("img");
    imageChef.setAttribute("src", img_devilChef);
    imageChef.classList.add("chef");
    content.appendChild(imageChef);

    const blurb = document.createElement("p");
    blurb.textContent = "The spiciest, meanest pizzeria in this world and the next. Get a taste of a demonic twist on pizza, cooked in hell's own flames.";
    content.appendChild(blurb);
}