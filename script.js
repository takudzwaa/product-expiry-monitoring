// Function to extract importance and urgency from task name
function extractPriority(taskName) {
    // Placeholder NLP processing
    if (taskName.toLowerCase().includes('urgent')) {
        return { importance: 'High', urgency: 'High' };
    } else if (taskName.toLowerCase().includes('important')) {
        return { importance: 'High', urgency: 'Medium' };
    } else {
        return { importance: 'Medium', urgency: 'Low' };
    }
}

// Function to fetch tasks from the backend and display them on the page
function fetchTasks() {
    fetch('/get_tasks')  // Send a GET request to /get_tasks endpoint
        .then(response => response.json())  // Parse the JSON response
        .then(tasks => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";  // Clear existing tasks

            tasks.forEach(task => {
                const taskElement = document.createElement("div");
                taskElement.classList.add("task");

                // Extract importance and urgency from task name
                const { importance, urgency } = extractPriority(task.name);

                taskElement.innerHTML = `<strong>${task.name}</strong> - Due Date: ${task.due_date} - Importance: ${importance}, Urgency: ${urgency}`;
                taskList.appendChild(taskElement);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Event listener for form submission
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from form fields
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;

    // Send a POST request to /add_task endpoint to add the task
    fetch('/add_task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: taskName, due_date: dueDate }),
    })
    .then(response => {
        if (response.ok) {
            console.log("Task added successfully!");
            // Clear form fields
            document.getElementById("taskName").value = "";
            document.getElementById("dueDate").value = "";
            // Refresh task list
            fetchTasks();
        } else {
            throw new Error('Failed to add task');
        }
    })
    .catch(error => console.error('Error adding task:', error));
});

// Fetch tasks when the page loads
window.onload = fetchTasks;
