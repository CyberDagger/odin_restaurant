import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const content = document.querySelector("#content");
const navHome = document.querySelector("#button-home");
const navMenu = document.querySelector("#button-menu");
const navContact = document.querySelector("#button-contact");

navHome.addEventListener("click", home);
navMenu.addEventListener("click", menu);
navContact.addEventListener("click", contact);

home();