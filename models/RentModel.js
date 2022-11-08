import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Bikes from "./BikeModel.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Rents = db.define('rents',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    bikeId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    startedAt:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    finishAt:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: false
        }
    }
},{
    freezeTableName: true
});

Bikes.hasMany(Rents);
Rents.belongsTo(Bikes, {foreignKey: 'bikeId'});
Users.hasMany(Rents);
Rents.belongsTo(Users, {foreignKey: 'userId'});


export default Rents;