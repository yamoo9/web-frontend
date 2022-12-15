const { resolve } = require('node:path');
const express = require('express');
const app = express();
const PORT = 4000;

const PUBLIC_DIR = resolve(__dirname, '../client/public');

app.use(express.static(PUBLIC_DIR));

// 비동기 요청(client) ← → 비동기 응답(server)
// CALLBACK, PROMISE, ASYNC FUNCTION

const users = [
  {
    id: 1,
    name: '야무',
    job: '강사',
    isAdmin: false,
  },
  {
    id: 2,
    name: '슬비',
    job: '강사',
    isAdmin: true,
  },
];

// RESTful API

// GET
app.get('/api/v1/users', (req, res) => {
  res.send(users);
});

// POST
// PUT
// DELETE

app.listen(PORT, () => {
  console.log(`Express 서버 구동: http://localhost:${PORT}`);
});
