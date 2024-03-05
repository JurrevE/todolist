import { displaytodos } from "./displaytodos";
import differentprojects from ".";
export function deleteTodoButtonFunc(){
    let deleteTodoButtons = document.getElementsByClassName("delete-todo-btn")
    let projectName = document.getElementById("projectmodalname").innerText;
    let project = differentprojects[projectName];
    let todos = project.todos

    //welke value zit vast aan welke knop
    for (let i = 0; i < deleteTodoButtons.length; i++) {
        deleteTodoButtons[i].addEventListener("click", function(event){
            let buttondata = event.target.getAttribute("data-delete-button")
            console.log(buttondata)
            todos.splice(buttondata, 1)
            console.log(todos)
            displaytodos()
        })
    }
    

}