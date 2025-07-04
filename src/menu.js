export default function write() {
    content.innerHTML = "";

    function makeItem(name, image, text, price) {
        const pizza = document.createElement("article");
        pizza.classList.add("menu-item");

        const pizzaName = document.createElement("h2");
        pizzaName.textContent = name;

        const pizzaImage = document.createElement("img");
        pizzaImage.setAttribute("src", image);

        const pizzaDesc = document.createElement("p");
        pizzaDesc.textContent = text;

        const pizzaPrice = document.createElement("button");
        pizzaPrice.textContent = price + " sins";

        pizza.appendChild(pizzaName);
        pizza.appendChild(pizzaImage);
        pizza.appendChild(pizzaDesc);
        pizza.appendChild(pizzaPrice);

        return pizza;
    }

    const menuArea = document.createElement("section");
    menuArea.classList.add("menu-area");

    menuArea.appendChild(makeItem("Paimon Pepperoni", "https://placehold.co/200", "Hottest slices you've ever seen.", 5));
    menuArea.appendChild(makeItem("Paimon Pepperoni", "https://placehold.co/200", "Hottest slices you've ever seen.", 5));

    content.appendChild(menuArea);
}