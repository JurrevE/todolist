import { SubmitBtnFunc } from "./submitBtnFunc";

export function addBtnFunc() {
  let projects = document.getElementById("projects");
  let addProjectBtn = document.createElement("button");
  addProjectBtn.id = "addProjectBtn";
  addProjectBtn.textContent = "Add Project";
  projects.append(addProjectBtn);
  let projectDialog = document.getElementById("projectdialog")
  let projectDialogCloseBtn = document.getElementById("projectDialogCloseButton")
  
  addProjectBtn.addEventListener("click", function() {
    projectDialog.showModal()
    SubmitBtnFunc()
  })

  projectDialogCloseBtn.addEventListener("click", function() {
    projectDialog.close()
  })
}

