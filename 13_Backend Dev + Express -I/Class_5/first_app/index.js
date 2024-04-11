
const express = require('express');
const app = express();

const PORT = 3000;

// adding MIDDLEWARE
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

// POST request
app.post('/api/users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.status(201).send('User created');
})

// mounting to middleware
// app.use('/api/users', usersRouter);

// mounting a route - addition to base route
// const usersRouter = require('./routes/users');



