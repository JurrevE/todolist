import { addProjectBtnFunc } from "./projectBtnFunc";
import { closeModal } from "./closeModal";
import { displaytodos } from "./displaytodos";
import { projectName } from "./projectBtnFunc";
import differentprojects from ".";

let eventlisteneradded = false;

export function deleteTodoButtonFunc() {
    let project = differentprojects[projectName]
    let expandtodobuttons = document.getElementsByClassName("expand-todo-btn");
    let expandtodospace = document.getElementById("todos")

    for (let i = 0; i < expandtodobuttons.length; i++) {
        if (!eventlisteneradded) {
            expandtodobuttons[i].addEventListener("click", function() {
                closeModal()
                let todoinformationdiv = document.createElement("div");
                let todoinformationclosebutton = document.createElement("button")

                todoinformationdiv.classList.add("expand-todo-div")
                todoinformationclosebutton.classList.add("close-todo-button")

                todoinformationdiv.innerHTML = "kanker";
                todoinformationclosebutton.innerHTML = "close this todo"
                todoinformationclosebutton.addEventListener("click", function(){ 
                    expandtodospace.innerHTML = ""
                    addProjectBtnFunc(projectName)
                    displaytodos(project)
                })
                
                todoinformationdiv.appendChild(todoinformationclosebutton)
                expandtodospace.appendChild(todoinformationdiv);
                
                eventlisteneradded = true;
            });
        }
    }
}
