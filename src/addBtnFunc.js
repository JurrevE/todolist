export function addBtnFunc(){

let projects = document.getElementById("projects")
let addProjectBtn = document.createElement("button")
addProjectBtn.id = "addProjectBtn"
addProjectBtn.textContent = "Add Project"
projects.append(addProjectBtn)

addProjectBtn.addEventListener("click", function() {
    console.log("krijg kanker")
})
}