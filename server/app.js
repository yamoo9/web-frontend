const { resolve } = require('node:path');
const express = require('express');
const app = express();
const PORT = 4000;

// /Users/yamoo9/Documents/PROJECT/web-frontend/client/public
const PUBLIC_DIR = resolve(__dirname, '../client/public');

// app.use(middleware_function)
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Express 서버 구동: http://localhost:${PORT}`);
});
