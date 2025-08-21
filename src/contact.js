export default function write() {
    content.innerHTML = "";

    let headline = document.createElement("h1");
    headline.textContent = "Contact";
    content.appendChild(headline);

    let blurb = document.createElement("p");
    blurb.textContent = "Just wish for it. We'll get in touch with you, not the other way around.";
    content.appendChild(blurb);

    headline = document.createElement("h1");
    headline.textContent = "Work for Us";
    content.appendChild(headline);

    blurb = document.createElement("p");
    blurb.textContent = "Just sign a contrant granting us the rights to your soul, and your career at Infernal Pizza can begin.";
    content.appendChild(blurb);
}