const users = require('../models/user');

exports.createUser = (req, res) => {
  const { name, job, isAdmin } = req.body;

  const newUser = {
    id: String(users.length + 1),
    isAdmin: isAdmin ?? false,
    name,
    job,
  };

  users.push(newUser);
  res.send(newUser);
};

exports.getUsers = (req, res) => {
  res.send(users);
};

exports.getUserById = (req, res) => {
  let { userId } = req.params;

  const foundUser = users.find((user) => user.id === userId);

  if (!foundUser) {
    res.status(404).send({ message: '사용자가 없습니다.' });
  } else {
    res.status(200).send(foundUser);
  }
};

exports.updateUserById = (req, res) => {
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
};

exports.deleteUserById = (req, res) => {
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
};
