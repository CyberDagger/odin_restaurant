export default function write() {
    content.innerHTML = "";

    const pizza = document.createElement("div");
    pizza.classList.add("menu-item");

    const pizzaImage = document.createElement("img");
    pizzaImage.setAttribute("src", "https://placehold.co/400");

    const pizzaName = document.createElement("h2");
    pizzaName.textContent ="Paimon Pepperoni";

    const pizzaDesc = document.createElement("p");
    pizzaDesc.textContent = "Hottest slices you've ever seen.";

    pizza.appendChild(pizzaImage);
    pizza.appendChild(pizzaName);
    pizza.appendChild(pizzaDesc);

    content.appendChild(pizza);
}