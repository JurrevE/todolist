import { newProject } from "./SubmitBtnFunc"
import { newTodo } from "./todoSubmitBtnFunc"

export function displaytodos() {
    for ( let i = 0; i < newProject.todos.length; i++) {
        let projectmodaltododiv = document.getElementById("projectmodaltodos")
        let tododiv = document.createElement("div")
        tododiv.classList.add("tododiv")
        tododiv.innerHTML = newTodo.title
        projectmodaltododiv.append(tododiv)
        
    }

}