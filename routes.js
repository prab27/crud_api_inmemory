const express = require('express');
const router = express.Router();
const students = require('./data');

// Create: Add new student
router.post('/students', (req, res) => {
    const { name, age } = req.body;
    const newStudent = {
        id: students.length + 1,
        name,
        age
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Read: Get all students
router.get('/students', (req, res) => {
    res.status(200).json(students);
});

// Read: Get student by ID
router.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student);
});

// Update: Update student by ID
router.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const { name, age } = req.body;
    student.name = name || student.name;
    student.age = age || student.age;

    res.status(200).json(student);
});

// Delete: Delete student by ID
router.delete('/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) return res.status(404).json({ message: 'Student not found' });

    students.splice(studentIndex, 1);
    res.status(200).json({ message: 'Student deleted successfully' });
});

module.exports = router;
