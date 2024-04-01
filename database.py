import sqlite3

# Function to create a new SQLite database
def create_database():
    conn = sqlite3.connect('tasks.db')  # Connect to or create the database file
    c = conn.cursor()  # Create a cursor object to execute SQL commands

    # Create a table to store tasks
    c.execute('''CREATE TABLE IF NOT EXISTS tasks
                 (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, due_date TEXT)''')

    conn.commit()  # Save changes
    conn.close()  # Close the connection

# Function to add a new task to the database
def add_task_to_db(task_name, due_date):
    conn = sqlite3.connect('tasks.db')
    c = conn.cursor()

    # Insert the task into the database
    c.execute('''INSERT INTO tasks (name, due_date) VALUES (?, ?)''', (task_name, due_date))

    conn.commit()
    conn.close()

# Function to retrieve all tasks from the database
def get_all_tasks_from_db():
    conn = sqlite3.connect('tasks.db')
    c = conn.cursor()

    # Retrieve all tasks from the database
    c.execute('''SELECT * FROM tasks''')
    tasks = c.fetchall()

    conn.close()
    return tasks

# Function to delete a task from the database
def delete_task_from_db(task_id):
    conn = sqlite3.connect('tasks.db')
    c = conn.cursor()

    # Delete the task from the database
    c.execute('''DELETE FROM tasks WHERE id=?''', (task_id,))

    conn.commit()
    conn.close()
