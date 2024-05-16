// test-mysql-connection.js

import mysql from 'mysql';

// Database configuration
const dbConfig = {
  host: 'mysql-2bec05d6-doctoras.k.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_8G5_fS6gUVDiuIexwFB',
  database: 'defaultdb',
  port: 28266
};

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Attempt to connect
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL successfully!');
  
  // Close the connection
  connection.end((endErr) => {
    if (endErr) {
      console.error('Error closing MySQL connection:', endErr);
      return;
    }
    console.log('MySQL connection closed.');
  });
});
