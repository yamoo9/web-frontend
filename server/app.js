// ES 모듈 vs. CommonJS 모듈
// import '모듈경로'    | require('모듈경로')
// export default 모듈 | module.exports = 모듈
// export 모듈         | exports.모듈

const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send(/* html */ `
    <!DOCTYPE html>
      <html lang="ko-KR">
      <head>
        <meta charset="UTF-8" />
        <title>안녕 Express 😃</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div class="container">
          <h1>Express 서버 애플리케이션</h1>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Express 서버 구동: http://localhost:${PORT}`);
});
