require('dotenv/config');

const { API_URL, PORT: INITIAL_PORT } = process.env;

const { resolve } = require('node:path');
const express = require('express');
const app = express();
const PORT = INITIAL_PORT ?? 4000;

const PUBLIC_DIR = resolve(__dirname, '../client/public');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

const users = [
  {
    id: '1', // Number
    name: '야무',
    job: '강사',
    isAdmin: false,
  },
  {
    id: '2',
    name: '슬비',
    job: '강사',
    isAdmin: true,
  },
  {
    id: '3',
    name: '선범',
    job: '강사',
    isAdmin: false,
  },
];

// RESTful API

// GET (READ)

app.get(`${API_URL}/users`, (req, res) => {
  res.send(users);
});

app.get(`${API_URL}/users/:userId`, (req, res) => {
  let { userId } = req.params;

  const foundUser = users.find((user) => user.id === userId);

  if (!foundUser) {
    res.status(404).send({ message: '사용자가 없습니다.' });
  } else {
    res.status(200).send(foundUser);
  }
});

// POST (CREATE)
app.post(`${API_URL}/users`, (req, res) => {
  const { name, job, isAdmin } = req.body;

  const newUser = {
    id: String(users.length + 1),
    isAdmin: isAdmin ?? false,
    name,
    job,
  };

  users.push(newUser);
  res.send(newUser);
});

// PUT (UPDATE)

// DELETE

app.listen(PORT, () => {
  console.log(`Express 서버 구동: http://localhost:${PORT}`);
});
