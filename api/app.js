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

// server configuration
const PORT = 3000;

// create a route for the app
app.post('/auth', (request, response) => {
  const post = request.body;
  const { login } = post;
  const { pass } = post;
  const sql = `select * from users where login='${login}' and password='${pass}'`;

  connection.query(sql, (err, rows) => {
    if (err) throw err;

    const user = rows[0];
    if (!user) response.send({});
    response.send(user);
  });
});

// connection.end();

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
