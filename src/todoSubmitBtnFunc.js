import { todo } from "./createTodo";

export function todoSubmitBtnFunc() {
    let todosubmitbutton = document.getElementById("todosubmitbutton")
    let tododialog = document.getElementById("todoDialog")
    let todoTitle = document.getElementById("todoTitle")
    let todoDescription = document.getElementById("todoDescription")
    let todoDueDate = document.getElementById("dueDate")
    let todoPriority = document.getElementsByName("priority") // changed to get all radio buttons with the name "priority"
    let todoNotes = document.getElementById("notes")

    todosubmitbutton.addEventListener("click", function(event){
        event.preventDefault()

        let title = todoTitle.value
        let description = todoDescription.value
        let dueDate = todoDueDate.value
        let priority = null; // Initialize priority to null
        let notes = todoNotes.value

        // Loop through each radio button to find the selected priority
        for (let i = 0; i < todoPriority.length; i++) {
            if (todoPriority[i].checked) {
                priority = todoPriority[i].value;
                break; // Exit loop once priority is found
            }
        }

        // Check if a priority is selected
        if (priority === null) {
            console.error("No priority selected");
            // Handle the case where no priority is selected
            // You can set a default priority or display an error message
            return; // Exit function if no priority is selected
        }

        let newTodo = new todo(title, description, dueDate, priority, notes)
        console.log(newTodo)

        tododialog.close()
    });
}
