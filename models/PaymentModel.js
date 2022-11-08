import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Transactions from "./TransactionModel.js";
import Rents from "./RentModel.js";

const {DataTypes} = Sequelize;

const Payments = db.define('payments',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    transactionId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    rentId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Rents.hasOne(Payments);
Payments.belongsTo(Rents, {foreignKey: 'rentId'});
Transactions.hasOne(Payments);
Payments.belongsTo(Transactions, {foreignKey: 'transactionId'});


export default Payments;