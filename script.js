// Function to fetch tasks from the backend and display them on the page
function fetchTasks() {
    // Call a backend function to retrieve tasks (we'll implement this later)
    // For now, let's simulate some dummy tasks
    const tasks = [
        { id: 1, name: "Task 1", due_date: "2024-03-26" },
        { id: 2, name: "Task 2", due_date: "2024-03-27" },
        { id: 3, name: "Task 3", due_date: "2024-03-28" }
    ];

    const taskList = document.getElementById("taskList");

    // Clear existing tasks
    taskList.innerHTML = "";

    // Add each task to the taskList container
    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `<strong>${task.name}</strong> - Due Date: ${task.due_date}`;
        taskList.appendChild(taskElement);
    });
}

// Event listener for form submission
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from form fields
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;

    // Call a backend function to add the task (we'll implement this later)
    // For now, let's log the task details
    console.log("New Task:", taskName, "Due Date:", dueDate);

    // Clear form fields
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";

    // Refresh task list
    fetchTasks();
});

// Fetch tasks when the page loads
window.onload = fetchTasks;
