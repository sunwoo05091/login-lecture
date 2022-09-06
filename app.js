//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");
const PORT = 3000;

app.set("views", './views');
app.set("view engine", 'ejs');

app.use("/", home); // 미들 웨어 등록해주는 메서드   

module.exports = app;


