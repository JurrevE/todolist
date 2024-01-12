import { todo, screateTodo } from "./createTodo";
import { createProject } from "./createProject";
import { setPriorityToHigh, setPriorityToMedium, setPriorityToLow } from "./prioritySwitcher";


let { project, defaultProject } = createProject();


let todo1 = new todo("Homework", "right now", "before I die", "high", "heel moeilijk");
let todo2 = new todo("Monkey", "rn", "before I die", "low", "niet zo moeilijk");

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
console.log(defaultProject);

setPriorityToLow(todo1)
console.log(todo1)

