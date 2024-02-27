import { todo } from "./createTodo";
import { newProject } from "./SubmitBtnFunc";
import { displaytodos } from "./displaytodos";

let newTodo;
let listeneradded = false;

export function todoSubmitBtnFunc() {
    let todosubmitbutton = document.getElementById("todosubmitbutton");
    let tododialog = document.getElementById("todoDialog");
    let todoTitle = document.getElementById("todoTitle");
    let todoDescription = document.getElementById("todoDescription");
    let todoDueDate = document.getElementById("dueDate");
    let todoPriority = document.getElementsByName("priority");
    let todoNotes = document.getElementById("notes");

    if (!listeneradded) {
        todosubmitbutton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("eventlistener added!")

            let title = todoTitle.value;
            let description = todoDescription.value;
            let dueDate = todoDueDate.value;
            let priority = null;
            let notes = todoNotes.value;

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

            newTodo = new todo(title, description, dueDate, priority, notes);
            console.log(newTodo);
            if (newProject && Array.isArray(newProject.todos)) {
                newProject.todos.push(newTodo);
                console.log(newProject)
            } else {
                console.error("newProject or newProject.todos is not properly defined");
            }

            todoTitle.value = "";
            todoDescription.value = "";
            todoDueDate.value = "";
            todoNotes.value = "";
            todoPriority.forEach((radio) => (radio.checked = false));

            tododialog.close();
            displaytodos()
            
        });
      
        listeneradded = true; 
        console.log(listeneradded);
    }
}

export { newTodo };