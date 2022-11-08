import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./controllers/UserRoute.js";
import ParkingLotRoute from "./controllers/ParkingLotRoute.js";
import BikeRoute from "./controllers/BikeRoute.js";
import LotHistoryRoute from "./controllers/LotHistoryRoute.js";
import RentRoute from "./controllers/RentRoute.js";
import TransactionRoute from "./controllers/TransactionRoute.js"
import AuthRoute from "./controllers/AuthRoute.js"

dotenv.config();

const app = express();

// Sinkronisasi data model ke database
// (async()=>{
//     await db.sync();
// })();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

// Sinkronisasi session store ke database
// store.sync();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ParkingLotRoute);
app.use(BikeRoute);
app.use(LotHistoryRoute);
app.use(RentRoute);
app.use(TransactionRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running at port ' + process.env.APP_PORT.toString());
});