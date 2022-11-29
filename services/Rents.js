import {Sequelize} from "sequelize";
import Rents from "../models/RentModel.js";
import User from "../models/UserModel.js";

export const createRent = async(req, res) =>{
    const {bikeId} = req.body;
    try {
        await Rents.create({
            bikeId: bikeId,
            userId: req.userId,
            startedAt: Sequelize.fn('NOW')
        });
        res.status(201).json({msg: "Rent success"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateRent = async(req, res) =>{
    const rent = await Rents.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!rent) return res.status(404).json({msg: "Rent can not be found"});
    const {bikeId, userId, startedAt, finishAt} = req.body;
    
    let newBikeId;
    if(bikeId === "" || bikeId === null){
        newBikeId = rent.bikeId
    }else{
        newBikeId = bikeId;
    }
    
    let newUserId;
    if(userId === "" || userId === null){
        newUserId = rent.userId
    }else{
        newUserId = userId;
    }
    
    let newStartedAt;
    if(startedAt === "" || startedAt === null){
        newStartedAt = rent.startedAt
    }else{
        newStartedAt = startedAt;
    }

    let newFInishAt;
    if(finishAt ==="" || finishAt === null){
        newFInishAt = rent.finishAt
    }else{
        newFInishAt = finishAt;
    }
    try {
        await ParkingLots.update({
            bikeId: bikeId,
            userId: userId,
            startedAt: startedAt,
            finishAt: finishAt
        },{
            where:{
                id: rent.id
            }
        });
        res.status(200).json({msg: "Rent has been updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteRent = async(req, res) =>{
    const rent = await Rents.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!rent) return res.status(404).json({msg: "Rent can not be found"});
    try {
        await Rents.destroy({
            where:{
                id: rent.id
            }
        });
        res.status(200).json({msg: "Rent has been deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getRentById = async(req, res) =>{
    try {
        const rent = await Rents.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!rent) return res.status(404).json({msg: "Rent can not be found"});
        let response;
        if(req.role === "admin"){
            response = await Rents.findOne({
                attributes:['uuid', 'bikeId', 'userId', 'startedAt', 'finishAt'],
                where:{
                    id: rent.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Rents.findOne({
                attributes:['uuid', 'bikeId', 'userId', 'startedAt', 'finishAt'],
                where:{
                    [Op.and]:[{id: rent.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getRents = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Rents.findAll({
                attributes:['uuid', 'bikeId', 'userId', 'startedAt', 'finishAt'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Rents.findAll({
                attributes:['uuid', 'bikeId', 'userId', 'startedAt', 'finishAt'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const rentRequest = async(req, res) =>{

}

export const rentConfirm = async(req, res) =>{

}

export const rentStart = async(req, res) =>{

}

export const rentFinish = async(req, res) =>{

}

export const rentFinishConfirm = async(req, res) =>{

}