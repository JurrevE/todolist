export function addProjectBtnFunc() {
    let projectbuttons = document.getElementsByClassName("projectbuttons");
    
    for (let i = 0; i < projectbuttons.length; i++) {
        projectbuttons[i].addEventListener('click', function() {
            console.log("krijg kanker");
            let showprojectdiv = document.createElement("div")
            showprojectdiv.setAttribute("id", "visibleprojectdiv") 
            let maincontent = document.getElementById("maincontent")
            maincontent.append(showprojectdiv)

            
        });
    }
}
