import {Sequelize} from "sequelize";
import Rents from "../models/RentModel.js";

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

}

export const deleteRent = async(req, res) =>{

}

export const getRentById = async(req, res) =>{

}

export const getRents = async(req, res) =>{

}