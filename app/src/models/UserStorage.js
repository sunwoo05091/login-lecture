const { userInfo } = require("os");

const fs = require("fs").promises;

class UserStorage {
    static getUsers = (...fileds) =>{
       // const users = this.#users;
        const newUsers = fileds.reduce((newUsers, filed) =>{
           if(users.hasOwnProperty(filed)){
            newUsers[filed] = users[filed];
            console.log("newUsers : " + filed);
           } 
           return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
      return fs.readFile("./src/databases/USERS.json")
        .then((data) =>{
            const users = JSON.parse(data);// 볼 수 있는 형태로 구현
            const idx = users.id.indexOf(id);//로그인 시도한 아이디값 위치
            const userKeys = Object.keys(users);
            const UserInfo = userKeys.reduce((newUser, Info) =>{
            newUser[Info] = users[Info][idx];
            return newUser;
           },{});
           //console.log(UserInfo)
           return UserInfo;
        }) // 로직 성공시
        .catch((err) =>{console.error}); // 실패 에러시
    }

    static save(UserInfo){
      //  const user = this.#users;
        user.name.push(UserInfo.name);
        user.id.push(UserInfo.id);
        user.pw.push(UserInfo.pw);
        console.log(user);
        return {success : true};
    }
};


module.exports = UserStorage;
