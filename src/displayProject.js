export function displayProject(name) {
    let projectdiv = document.getElementById("projects")
    let projectbutton = document.createElement("button")
    projectbutton.classList.add("projectbuttons")
    projectbutton.innerText = name;

    projectdiv.append(projectbutton)
    
}