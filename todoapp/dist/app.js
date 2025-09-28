const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const filterAllBtn = document.querySelector("#filterAll");
const filterCompletedBtn = document.querySelector("#filterCompleted");
const filterPendingBtn = document.querySelector("#filterPending");
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let currentFilter = "all";
console.log("JS Loaded ✅");
// Save tasks to Local Storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Render tasks based on filter
function renderTasks() {
    taskList.innerHTML = "";
    const filtered = tasks.filter(task => {
        if (currentFilter === "completed")
            return task.completed;
        if (currentFilter === "pending")
            return !task.completed;
        return true;
    });
    filtered.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;
        if (task.completed)
            li.classList.add("completed");
        // Toggle complete on click
        li.addEventListener("click", () => toggleTask(task.id));
        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-btn");
        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        });
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}
// Add a new task
function addTask(event) {
    event?.preventDefault();
    const title = taskInput.value.trim();
    if (!title)
        return;
    const newTask = {
        id: Date.now(),
        title,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";
    saveTasks();
    renderTasks();
}
// Toggle task completion
function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTasks();
    renderTasks();
}
// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}
// Change filter
function setFilter(filter) {
    currentFilter = filter;
    [filterAllBtn, filterCompletedBtn, filterPendingBtn].forEach(btn => btn.classList.remove("active"));
    if (filter === "all")
        filterAllBtn.classList.add("active");
    if (filter === "completed")
        filterCompletedBtn.classList.add("active");
    if (filter === "pending")
        filterPendingBtn.classList.add("active");
    renderTasks();
}
// Event listeners
addBtn.addEventListener("click", (e) => addTask(e));
filterAllBtn.addEventListener("click", () => setFilter("all"));
filterCompletedBtn.addEventListener("click", () => setFilter("completed"));
filterPendingBtn.addEventListener("click", () => setFilter("pending"));
// Initial render
renderTasks();
export {};
