import img_incredible from "./images/incredible.png";

export default function write() {
    content.innerHTML = "";

    function makeItem(name, image, price) {
        const pizza = document.createElement("article");
        pizza.classList.add("menu-item");

        const pizzaName = document.createElement("h2");
        pizzaName.textContent = name;

        const pizzaImage = document.createElement("img");
        pizzaImage.setAttribute("src", image);

        const pizzaPrice = document.createElement("button");
        pizzaPrice.textContent = price + " sins";

        pizza.appendChild(pizzaName);
        pizza.appendChild(pizzaImage);
        pizza.appendChild(pizzaPrice);

        return pizza;
    }

    const menuArea = document.createElement("section");
    menuArea.classList.add("menu-area");

    menuArea.appendChild(makeItem("Paimon Pepperoni", "https://placehold.co/300", 5));
    menuArea.appendChild(makeItem("Barbatos Bacon", "https://placehold.co/300", 5));
    menuArea.appendChild(makeItem("Asmodeus Anchovy", "https://placehold.co/300", 5));
    menuArea.appendChild(makeItem("Forneus Feta", "https://placehold.co/300", 5));
    menuArea.appendChild(makeItem("Phenex Pineapple", img_incredible, 5));
    menuArea.appendChild(makeItem("Saleos Salami", "https://placehold.co/300", 5));

    content.appendChild(menuArea);
}