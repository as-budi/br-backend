import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ParkingLots from "./ParkingLotModel.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const LotHistories = db.define('lotHistories',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    parkingLotId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    status:{
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
    }
},{
    freezeTableName: true
});

ParkingLots.hasMany(LotHistories);
LotHistories.belongsTo(ParkingLots, {foreignKey: 'parkingLotId'});
Users.hasMany(LotHistories);
LotHistories.belongsTo(Users, {foreignKey: 'userId'});


export default LotHistories;