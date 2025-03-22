const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createStudent = async (req, res) => {
    try {
        const { registrationNumber, name, className, rollNo, contactNumber } = req.body;
        if (!registrationNumber || !name || !className || !rollNo || !contactNumber) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const student = await prisma.student.create({
            data: { registrationNumber, name, className, rollNo, contactNumber }
        });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Error creating student' });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await prisma.student.findMany();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching students' });
    }
};

exports.getStudentByRegNo = async (req, res) => {
    try {
        const { regNo } = req.params;
        const student = await prisma.student.findUnique({ where: { registrationNumber: regNo } });
        if (!student) return res.status(404).json({ error: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching student' });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { regNo } = req.params;
        const { name, className, rollNo, contactNumber } = req.body;
        const student = await prisma.student.findUnique({ where: { registrationNumber: regNo } });
        if (!student) return res.status(404).json({ error: 'Student not found' });
        const updatedStudent = await prisma.student.update({
            where: { registrationNumber: regNo },
            data: { name, className, rollNo, contactNumber }
        });
        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json({ error: 'Error updating student' });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const { regNo } = req.params;
        const student = await prisma.student.findUnique({ where: { registrationNumber: regNo } });
        if (!student) return res.status(404).json({ error: 'Student not found' });
        await prisma.student.update({
            where: { registrationNumber: regNo },
            data: { status: false }
        });
        res.json({ message: 'Student deactivated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting student' });
    }
};