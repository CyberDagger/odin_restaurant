export default function write() {
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Work for Us";

    const blurb = document.createElement("p");
    blurb.textContent = "Just need your soul first.";

    content.appendChild(headline);
    content.appendChild(blurb);
}