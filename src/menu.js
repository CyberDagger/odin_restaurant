export default function write() {
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Paimon Pepperoni";

    const blurb = document.createElement("p");
    blurb.textContent = "Hottest slices you've ever seen.";

    content.appendChild(headline);
    content.appendChild(blurb);
}