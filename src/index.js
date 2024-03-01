import "./styles.css"
import { todo } from "./createTodo";

import { setPriorityToHigh, setPriorityToMedium, setPriorityToLow } from "./prioritySwitcher";
import { toggleCompletionStatus } from "./completionSwitcher";
import { displayProject } from "./displayProject";
import { addBtnFunc } from "./addBtnFunc";
import { SubmitBtnFunc } from "./SubmitBtnFunc.js";
import { addProjectBtnFunc } from "./projectBtnFunc.js";
import { displaytodos } from "./displaytodos.js";
import { addTodoBtnFunc } from "./AddTodoBtnFunc.js";
import { todoSubmitBtnFunc } from "./todoSubmitBtnFunc.js";


addBtnFunc()
SubmitBtnFunc()

let differentprojects = []
export default differentprojects
console.log(differentprojects, "Dit is de array met standaard projects erin")

// let todo1 = new todo("Homework", "right now", "before I die", "high", "heel moeilijk");
// let todo2 = new todo("Monkey", "rn", "before I die", "low", "niet zo moeilijk");
// let todo3 = new todo("Get money", "always", "2024", "high", "best lastig", false)















