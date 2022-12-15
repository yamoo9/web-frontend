require('dotenv/config');

const { API_URL, PORT: INITIAL_PORT } = process.env;

const { resolve } = require('node:path');
const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = INITIAL_PORT ?? 4000;

const PUBLIC_DIR = resolve(__dirname, '../client/public');

app.use(express.static(PUBLIC_DIR));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('tiny'));

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

// PUT (UPDATE)
app.put(`${API_URL}/users/:userId`, (req, res) => {
  const { userId } = req.params;
  const index = users.findIndex((user) => user.id === userId);

  if (index > -1) {
    const updateUser = {
      ...users[index] /* { name, job, isAdmin, id } */,
      ...req.body /* { name } */,
    };
    users.splice(index, 1, updateUser);
    res.status(200).send(updateUser);
  } else {
    res
      .status(404)
      .send({ message: '업데이트 할 사용자가 없습니다.', sucess: false });
  }
});

// DELETE
app.delete(`${API_URL}/users/:userId`, (req, res) => {
  const { userId } = req.params;
  let index = users.findIndex((user) => user.id === userId);

  if (index > -1) {
    users.splice(index, 1);
    res
      .status(200)
      .send({ message: '요청한 사용자 삭제에 성공했습니다.', success: true });
  } else {
    res
      .status(404)
      .send({ message: '삭제 할 사용자가 없습니다.', sucess: false });
  }
});

app.listen(PORT, () => {
  console.log(`Express 서버 구동: http://localhost:${PORT}`);
});
