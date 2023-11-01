const dotenv= require('dotenv')
dotenv.config();

module.exports={
    PORT:process.env.PORT,
    saltRounds:process.env.saltRounds,
    JWT_Token:process.env.JWT_Token,
    DB_SYNC:process.env.DB_SYNC
}