
export function addTodoBtnFunc() {
    let addTodoBtn = document.getElementById("addTodoBtn")
    let todoDialog = document.getElementById("todoDialog")
    let todoDialogCloseBtn = document.getElementById("todoDialogCloseButton")
    let todoTitle = document.getElementById("todoTitle")
    let todoDescription = document.getElementById("todoDescription")
    let todoDueDate = document.getElementById("dueDate")
    let todoPriority = document.getElementById("priority")
    let todoNotes = document.getElementById("notes")
    addTodoBtn.addEventListener("click", function(){
        todoDialog.showModal()
    })

    todoDialogCloseBtn.addEventListener("click", function() {
        todoDialog.close()
        todoTitle.value = ""
        todoDescription.value = ""
        todoDueDate.value = ""
        todoPriority.value = ""
        todoNotes.value = ""
    })
}