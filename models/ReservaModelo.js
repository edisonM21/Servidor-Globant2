import mongoose from 'mongoose'
const Schema=mongoose.Schema
const Reserva= new Schema({
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    nombreCliente:{
        type:String,
        required:true
    },
    cedula:{
        type:String,
        required:true
    },
    precio:{
        type:String,
        required:true
    }
})
export const modeloReserva=mongoose.model('reservas',Reserva)