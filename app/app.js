//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");
const PORT = 3000;

app.set("views", './src/views');
app.set("view engine", 'ejs');

app.use(express.static(`${__dirname}/src/public`)); //정적 경로 추가
app.use("/", home); // 미들 웨어 등록해주는 메서드   

module.exports = app;


