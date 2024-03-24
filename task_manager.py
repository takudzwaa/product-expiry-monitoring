# Import database functions
from database import create_database, add_task_to_db, get_all_tasks_from_db, delete_task_from_db

# Function to add a new task
def add_task(task_name, due_date):
    add_task_to_db(task_name, due_date)
    print("Task added successfully!")

# Function to delete a task
def delete_task(task_id):
    delete_task_from_db(task_id)
    print("Task deleted successfully!")

# Function to update a task
def update_task(task_id, new_name, new_due_date):
    # Code to update the task in the database
    # You can print a message to confirm the task has been updated
    print("Task updated successfully!")

# Function to retrieve all tasks
def get_all_tasks():
    tasks = get_all_tasks_from_db()
    return tasks
