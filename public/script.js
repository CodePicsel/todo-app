document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const themeToggle = document.getElementById('theme-toggle');
    const datetimeDisplay = document.getElementById('datetime');

    // Load tasks from localStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    };

    // Save tasks to localStorage
    const saveTasks = () => {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Add task to DOM
    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = task.text;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        if (task.completed) {
            li.classList.add('completed');
        }

        taskList.appendChild(li);
    };

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const task = { text: taskText, completed: false };
            addTaskToDOM(task);
            saveTasks();
            taskInput.value = '';
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.toggleAttribute('data-theme', 'dark');
    });

    // Display date and time
    const updateDateTime = () => {
        const now = new Date();
        datetimeDisplay.textContent = now.toLocaleString();
    };
    setInterval(updateDateTime, 1000);

    // Initialize
    loadTasks();
    updateDateTime();
});
