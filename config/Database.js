import {Sequelize} from "sequelize";

const db = new Sequelize('br_db','root','aaaaa',{
    host: "localhost",
    dialect: "mysql"
});

export default db;