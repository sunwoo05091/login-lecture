"use strict";

const view = {
    home : (req, res)=>{
        res.render("./home/index");
    },
    login : (req, res)=>{
        res.render("./home/login");
    }
}

const users = {
    id : ['sunwoo','kcjco','1111'],
    pw : ['1111', '1111', '1111'],
}

const process = {
    login : (req, res) =>{
        const id = req.body.id,
              pw = req.body.pw;

        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] == pw){
                return res.json({
                    success : true,
                })
            }
        }
        return res.json({
            success : false,
        })
    }

    
}

module.exports = {
    view,
    process,
}