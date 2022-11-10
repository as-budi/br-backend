import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const DATABASE = process.env.DATABASE.toString();
const USER = process.env.USER.toString();
const PASSWORD = process.env.PASSWORD.toString();
const HOST = process.env.HOST.toString();
const DIALECT = process.env.DIALECT.toString();

const db = new Sequelize(DATABASE, USER, PASSWORD,{
    host: HOST,
    dialect: DIALECT
});

export default db;