
export function deleteTodoButtonFunc(){
    let deleteTodoButtons = document.getElementsByClassName("delete-todo-btn")

    for (let i = 0; i < deleteTodoButtons.length; i++) {
        deleteTodoButtons[i].addEventListener("click", function(event){
            let buttondata = event.target.getAttribute("data-delete-button")
            console.log(buttondata)
        })
    }
    

}