

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
};


module.exports = UserStorage;
