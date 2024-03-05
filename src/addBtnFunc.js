
export function addBtnFunc() {
  //verkrijg projects div
  let projects = document.getElementById("projects");
  //create addProjectButton
  let addProjectBtn = document.createElement("button");
  addProjectBtn.id = "addProjectBtn";
  addProjectBtn.textContent = "Add Project";
  //append die button aan projects div.
  projects.append(addProjectBtn);

  //maak button om dialog te closen van het maken van projecten en zorg ervoor dat hij werkt. 
  let projectDialog = document.getElementById("projectdialog")
  let projectDialogCloseBtn = document.getElementById("projectDialogCloseButton")
  let projectTitle = document.getElementById("projectTitle")
  addProjectBtn.addEventListener("click", function() {
    projectDialog.showModal()
  })

  //zorg er voor dat de dialog ook weer geclosed kan worden. 
  projectDialogCloseBtn.addEventListener("click", function() {
    projectDialog.close()
    projectTitle.value = ""
  })
}

