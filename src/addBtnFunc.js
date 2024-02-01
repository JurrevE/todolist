export function addBtnFunc() {
    let projects = document.getElementById("projects");
    let addProjectBtn = document.createElement("button");
    addProjectBtn.id = "addProjectBtn";
    addProjectBtn.textContent = "Add Project";
    projects.append(addProjectBtn);
  
    addProjectBtn.addEventListener("click", function () {
      let projectdialog = document.createElement("dialog");
      projectdialog.id = "projectdialog";

      let projectDialogCloseButton = document.createElement("button")
      projectDialogCloseButton.id = "projectDialogCloseButton"
      projectDialogCloseButton.innerHTML = "X"
  
      let projectform = document.createElement("form");
      projectform.setAttribute("method", "post");
  
      let projectTitleLabel = document.createElement("label");
      projectTitleLabel.innerHTML = "New Project Name";
  
      let projectTitle = document.createElement("input");
      projectTitle.setAttribute("placeholder", "Enter project name");
      projectTitle.setAttribute("name", "projectTitle");
  
      let submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
  
      // Append the input to the form
      projectform.append(projectTitle);
  
      // Append elements to the dialog
      projectdialog.append(projectDialogCloseButton, projectTitleLabel, projectform, submitButton);
  
      // Append the dialog to the document
      document.body.appendChild(projectdialog);
  
      // Show the dialog
      projectdialog.showModal();
        
      projectDialogCloseButton.addEventListener("click", function() {
        projectdialog.close();
        projectdialog.style.display = "none"
        console.log("dialog closed!")
      })
      submitButton.addEventListener("click", function () {
        // Handle the form submission logic here
        console.log("Submitted project title:", projectTitle.value);
  
        // Close the dialog
        projectdialog.close();
      });
    });
  }
  