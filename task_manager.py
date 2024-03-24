# Import necessary libraries
import datetime
from flask import Flask, request, jsonify, render_template
from database import create_database, add_task_to_db, get_all_tasks_from_db, delete_task_from_db

app = Flask(__name__)

# Initialize the database
create_database()

@app.route('/')
def index():
    return render_template('index.html')

# Function to prioritize tasks based on due dates
def prioritize_tasks():
    tasks = get_all_tasks_from_db()
    sorted_tasks = sorted(tasks, key=lambda x: datetime.datetime.strptime(x[2], '%Y-%m-%d'))  # Sort tasks by due date
    return sorted_tasks

# Route to add a new task
@app.route('/add_task', methods=['POST'])
def add_task():
    data = request.json
    task_name = data['name']
    due_date = data['due_date']
    add_task_to_db(task_name, due_date)
    return jsonify({'message': 'Task added successfully'}), 200

# Route to get all tasks
@app.route('/get_tasks', methods=['GET'])
def get_tasks():
    tasks = prioritize_tasks()
    return jsonify(tasks), 200

if __name__ == '__main__':
    app.run(debug=True)
