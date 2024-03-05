import differentprojects from "."
import { addBtnFunc } from "./addBtnFunc";
import { addProjectBtnFunc } from "./addProjectBtnFunc";

let eventlistenersadded = false;

export function deleteProjectFunc() {
    if (!eventlistenersadded) {
        let projectdeletebutton = document.getElementById("projectdeletebutton");

        projectdeletebutton.addEventListener("click", function(){
            let projectName = document.getElementById("projectmodalname").innerText;
            let visibleprojectmodal = document.getElementById("visibleprojectmodal");

            console.log("Deleting project:", projectName);
            delete differentprojects[projectName];
            console.log(differentprojects, "dit zijn de differentprojects!");
            visibleprojectmodal.innerHTML = "";
            
            addProjectBtnFunc()
        });

        eventlistenersadded = true;
        
    }
}
