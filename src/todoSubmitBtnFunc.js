import { todo } from "./createTodo";
import { newProject } from "./SubmitBtnFunc";

export function todoSubmitBtnFunc() {
    let todosubmitbutton = document.getElementById("todosubmitbutton")
    let tododialog = document.getElementById("todoDialog")
    let todoTitle = document.getElementById("todoTitle")
    let todoDescription = document.getElementById("todoDescription")
    let todoDueDate = document.getElementById("dueDate")
    let todoPriority = document.getElementsByName("priority") 
    let todoNotes = document.getElementById("notes")

    todosubmitbutton.addEventListener("click", function(event){
        event.preventDefault()

        let title = todoTitle.value
        let description = todoDescription.value
        let dueDate = todoDueDate.value
        let priority = null; 
        let notes = todoNotes.value

    
        for (let i = 0; i < todoPriority.length; i++) {
            if (todoPriority[i].checked) {
                priority = todoPriority[i].value;
                break; 
            }
        }

 
        if (priority === null) {
            console.error("No priority selected");
            
            
            return; 
        }
        
        let newTodo = new todo(title, description, dueDate, priority, notes)
        console.log(newTodo)
        newProject.todos.push(newTodo)
        for (let i = 0; i <= newProject.todos.length; i++) {
        console.log("nigger")
        let todospace = document.getElementById("projectmodaltodos")
        let todo = document.createElement("div")
        todo.innerText = "krijg kanker"
        todospace.append(todo)

}
        tododialog.close()
    });
}
