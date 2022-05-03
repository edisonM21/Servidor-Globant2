//importo el pquete express
//const express = require('express')
import express from 'express'
import { rutas } from '../routes/rutas.js'
import {conectar} from '../database/conexion.js'
import cors from 'cors'

export class Servidor {

    constructor(){
        //Atributo de almacenamiento de express
        this.app = express()
        this.conectarconBD()
        this.llamarAuxiliares()
        this.atenderServicios()
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT}`)
        })
    }
    atenderServicios(){
        this.app.use('/',rutas)
    }
    conectarconBD(){
        conectar()
    }

    llamarAuxiliares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

}