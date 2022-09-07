

class UserStorage {
     static #users = {
        id : ['vkdl','kcjco','1111'],
        pw : ['1111', '1111', '1111'],
        name : ['1', '2', '3'],
    };

    static getUsers = (...fileds) =>{
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);//로그인 시도한 아이디값 위치
        const userKeys = Object.keys(users);
        const UserInfo = userKeys.reduce((newUser, Info) =>{
            newUser[Info] = users[Info][idx];
            return newUser;
        },{});
        return UserInfo;
    }

    static save(UserInfo){
        const user = this.#users;
        user.name.push(UserInfo.name);
        user.id.push(UserInfo.id);
        user.pw.push(UserInfo.pw);
        console.log(user);
        return {success : true};
    }
};


module.exports = UserStorage;
