export function displaytodos(project) {
    let differenttodos = project.todos

    for (let i = 0; i < differenttodos.length; i++) {
        console.log(differenttodos[i])
    }
}