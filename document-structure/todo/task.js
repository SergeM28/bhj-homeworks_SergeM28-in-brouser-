let btn = document.getElementById("tasks__add");
let input = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

btn.addEventListener("click", e => {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
});

function addTask(value) {
    if (value) {
        let task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML += `<div class="task__title">${value}</div>
                                <a href="#" class="task__remove">&times;</a>`;
        addRemove(task);
        tasksList.appendChild(task);
    }
}

function addRemove(task) {
    let removeTask = task.querySelector(".task__remove")
    removeTask.addEventListener("click", e => {
        e.preventDefault();
tasksList.removeChild(e.target.parentElement);
    })
}