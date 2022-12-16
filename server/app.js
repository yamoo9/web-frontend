require('dotenv/config');

const { API_URL, PORT: INITIAL_PORT } = process.env;

const { resolve } = require('node:path');
const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = INITIAL_PORT ?? 4000;

/* Serving Statics ---------------------------------------------------------- */

const PUBLIC_DIR = resolve(__dirname, '../client/public');

app.use(express.static(PUBLIC_DIR));

/* Middlewares -------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

/* Routing ------------------------------------------------------------------ */

// const userRoutes = require('./routes/users');
app.use(`${API_URL}/users`, require('./routes/users'));

/* Listening ---------------------------------------------------------------- */

app.listen(PORT, () => {
  console.log(`Express 서버 구동: http://localhost:${PORT}`);
});
