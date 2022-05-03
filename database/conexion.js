import mongoose from 'mongoose'

export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito en la conexion con la BD")
    }catch(error){
        console.log("Error en la conexion con BD"+error)
    }
}