const DB_NAME = 'hacktory';
const DB_USER = 'hacktory';
const DB_PASS = 'Xvbrq>)N9G*7fGk<';


// import express (after npm install express)
const express = require('express');
const cors = require('cors');

// create new express app and save it as "app"
const app = express();
app.use(cors());
app.use(express.json());

// mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows) => {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


//

// server configuration
const PORT = 3000;

// create a route for the app
app.post('/auth', (request, response) => {
  const post = request.body;
  const { login } = post;
  const { pass } = post;
  const sql 
  console.log(request.body); // your JSON
  response.send(request.body); // echo the result back
});

connection.end();

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
