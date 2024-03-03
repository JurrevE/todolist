import { closeModal } from "./projectBtnFunc";
let eventlisteneradded = false;

export function addexpandbtnfunc() {
    let expandtodobuttons = document.getElementsByClassName("expand-todo-btn");
    let expandtodospace = document.getElementById("todos")

    for (let i = 0; i < expandtodobuttons.length; i++) {
        if (!eventlisteneradded) {
            expandtodobuttons[i].addEventListener("click", function() {
                closeModal()
                let todoinformationdiv = document.createElement("div");
                todoinformationdiv.classList.add("expand-todo-div")
                todoinformationdiv.innerHTML = "kanker";
                expandtodospace.appendChild(todoinformationdiv);
                eventlisteneradded = true;
            });
        }
    }
}
