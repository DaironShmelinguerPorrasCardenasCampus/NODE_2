//habilita la lectura de los datos de las varables de entorno

import {config} from "dotenv";

config();// ya tengo habilitada la lectura

export default {
    host: process.env.HOST,
    database : process.env.DATABSE,
    user: process.env.USER,
    password: process.env.PASSWORD
}

