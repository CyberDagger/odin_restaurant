export default function write() {
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Infernal Pizza";

    const blurb = document.createElement("p");
    blurb.textContent = "The spiciest, meanest pizzeria in this world and the next. Get a taste of traditional demonic pizza cooked in hell's own flames.";

    content.appendChild(headline);
    content.appendChild(blurb);
}