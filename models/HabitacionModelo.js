import mongoose from 'mongoose'

//constante para crear modelo de datos
const Schema=mongoose.Schema
//construyo Esquema Habitacion
const Habitacion= new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
})
export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)