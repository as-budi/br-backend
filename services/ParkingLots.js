import ParkingLots from "../models/ParkingLotModel.js";
 
export const createParkingLot = async(req, res) =>{
    const {location} = req.body;
    try {
        await ParkingLots.create({
            location: location,
            status: 0,
            userId: req.userId
        });
        res.status(201).json({msg: "Parking lot registered"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateParkingLot = async(req, res) =>{
    const parkingLot = await ParkingLots.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!parkingLot) return res.status(404).json({msg: "Parking lot can not be found"});
    const {location, status} = req.body;
    let newLocation;
    if(location === "" || location === null){
        newLocation = parkingLot.location
    }else{
        newLocation = location;
    }
    try {
        await ParkingLots.update({
            location: newLocation,
            status: status,
            userId: req.userId
        },{
            where:{
                id: parkingLot.id
            }
        });
        res.status(200).json({msg: "Parking lot has been updated"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteParkingLot = async(req, res) =>{
    const parkingLot = await ParkingLots.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!parkingLot) return res.status(404).json({msg: "Parking lot can not be found"});
    try {
        await ParkingLots.destroy({
            where:{
                id: parkingLot.id
            }
        });
        res.status(200).json({msg: "Parking lot has been deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getParkigLotById = async(req, res) =>{
    try {
        const response = await ParkingLots.findOne({
            attributes:['uuid','location','status'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getParkingLots = async(req, res) =>{
    try {
        const response = await ParkingLots.findAll({
            attributes:['uuid','location','status']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}