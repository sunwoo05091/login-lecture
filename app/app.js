//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");
const PORT = 3000;

app.set("views", './src/views');
app.set("view engine", 'ejs');
app.use(express.static(`${__dirname}/src/public`)); //정적 경로 추가
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글 및 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));

app.use("/", home); // 미들 웨어 등록해주는 메서드   

module.exports = app;


