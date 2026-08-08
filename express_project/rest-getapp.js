const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API',
        status: 'Active',
        timestamp: new Date()
    });
});

app.get('/students', (req, res) => {
    const studentList = [
        { id: 1, name: 'Sai', course: 'AI&DS' },
        { id: 2, name: 'Anu', course: 'CSE' },
        { id: 3, name: 'Ravi', course: 'ECE' }
    ];
    res.json(studentList);
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.json({
        requestedId: productId,
        category: 'Electronics',
        inStock: true,
        tags: ['gadget', 'new-arrival']
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});