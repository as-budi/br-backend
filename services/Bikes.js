import Bikes from "../models/BikeModel.js";

export const createBike = async(req, res) =>{
    const {tag, parkingLotId} = req.body;
    try {
        await Bikes.create({
            tag: tag,
            parkingLotId: parkingLotId,
            status: 0,
            userId: req.userId
        });
        res.status(201).json({msg: "Bike registered"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateBike = async(req, res) =>{
    const bike = await Bikes.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!bike) return res.status(404).json({msg: "Bike can not be found"});
    const {tag, parkingLotId, status} = req.body;
    let newLot;
    if(parkingLotId === "" || parkingLotId === null){
        newLot = bike.parkingLotId
    }else{
        newLot = parkingLotId;
    }
    try {
        await Bikes.update({
            tag: tag,
            parkingLotId: parkingLotId,
            status: status,
            userId: req.userId
        },{
            where:{
                id: bike.id
            }
        });
        res.status(200).json({msg: "Bike has been updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteBike = async(req, res) =>{
    const bike = await Bikes.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!bike) return res.status(404).json({msg: "Bike can not be found"});
    try {
        await Bikes.destroy({
            where:{
                id: bike.id
            }
        });
        res.status(200).json({msg: "Bike has been deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getBikeById = async(req, res) =>{
    try {
        const response = await Bikes.findOne({
            attributes:['uuid', 'tag', 'parkingLotId', 'status'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBikes = async(req, res) =>{
    try {
        const response = await Bikes.findAll({
            attributes:['uuid', 'tag', 'parkingLotId', 'status']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}