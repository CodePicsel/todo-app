const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/add', (req, res) => {
    todos.push({ task: req.body.task, completed: false });
    res.redirect('/');
});

app.get('/toggle/:index', (req, res) => {
    const index = req.params.index;
    todos[index].completed = !todos[index].completed;
    res.redirect('/');
});

app.get('/delete/:index', (req, res) => {
    todos.splice(req.params.index, 1);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
