import mysql from "promise-mysql";
import config from "../config.js";

const connetion = mysql.createConnection({
    host: config.host,
    database : config.database,
    user : config.user,
    password : config.password
});

const getConnetion = () =>{
    return connetion;
}

export default getConnetion;