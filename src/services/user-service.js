const UserRepository = require("../repository/user-repository");

class UserSrevices{
    constructor(){
        this.userRepository= new UserRepository();
    }

    async createUser(data){
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("something went wrong in service layer ");
            throw(error)
        }
    }
    async destroyUser(userId){
        try {
            const response = await this.userRepository.destroyUser(userId);
            return response;
        } catch (error) {
            console.log("something went wrong in service layer ");
            throw(error)
        }
    }
}

module.exports=UserSrevices;