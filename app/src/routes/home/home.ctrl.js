"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const view = {
    home : (req, res)=>{
        res.render("./home/index");
    },
    login : (req, res)=>{
        res.render("./home/login");
    },

    register : (req, res) =>{
        res.render("./home/register");
    }
}


const process = {
    login : (req, res) =>{
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    //     const id = req.body.id,
    //           pw = req.body.pw;

    //     const response = {};
       
    //   const users =  UserStorage.getUsers("id", "pw");

    //     if(users.id.includes(id)){
    //         const idx = users.id.indexOf(id);
    //         if(users.pw[idx] == pw){
    //             response.success = true;
    //             return res.json(response);
    //         }
    //     }

    //      response.success = false;
    //      response.msg = "로그인 실패"

    //      return res.json(response);
    }

    
}

module.exports = {
    view,
    process,
}