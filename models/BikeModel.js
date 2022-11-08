import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import ParkingLots from "./ParkingLotModel.js";

const {DataTypes} = Sequelize;

const Bikes = db.define('bikes',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    tag:{
        type: DataTypes.STRING,
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

ParkingLots.hasOne(Bikes);
Bikes.belongsTo(ParkingLots, {foreignKey: 'parkingLotId'});


export default Bikes;