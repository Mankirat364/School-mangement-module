# Student Management System

This is a RESTful API built with Express.js and Prisma ORM for managing student records.

1 Features
- Add, Retrieve, Update, and Delete Students
- Soft Deletion (Optional)
- MongoDB Database Connection
- Prisma ORM Integration

2 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/<your-username>/<your-repo>.git
   cd school-management-system
3.install dependencies
npm install

4.Set up environment variables:

Create a .env file in the root folder and add:
DATABASE_URL="your_mongodb_connection_string"

5.Push Schema to MongoDB:

npx prisma db push
npm start


API Endpoints
Method	Endpoint	Description
POST	/students	Create a new student
GET	/students	Get all students
GET	/students/:regNo	Get a student by registration number
PUT	/students/:regNo	Update student details
DELETE	/students/:regNo	Delete (or soft delete) a student



Technologies Used
Node.js

Express.js

MongoDB

Prisma ORM

Nodemon (for development)
