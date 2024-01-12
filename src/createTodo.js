class todo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completionStatus = false
    }
}
const defaultTodo = new todo("Default Todo", "Default description", "Default due date", "low", "Default notes");
export { todo, defaultTodo };
