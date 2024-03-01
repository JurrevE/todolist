let projectcounter = 0;

class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
        this.data = "proj" + projectcounter; // Assign data attribute
        projectcounter++;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}

export { Project };
