import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
//El controlador tiene la logica del negocio
export class ControladorHabitacion{

    constructor(){}

    async insert(request,response){
        let datosPeticion=request.body
        let servicio=new ServicioHabitacion()
        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error en el ingreso de datos"+error,
                datosIngresados:[],
                estado:false
            })
        }    
    }
    async buscarTodos(request,response){
        let servicio=new ServicioHabitacion()
        try{
            response.status(200).json({
                mensaje:"Exito buscando la informacion",
                datos:await servicio.buscartodos(),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando la informcion",
                datos:[],
                estado:false
            })
        }
    }
    async buscarPorId(request,response){
        let servicio=new ServicioHabitacion()
        let Id=request.params.Id
        try{  
            response.status(200).json({
                mensaje:"Exito buscando la Habitacion por ID",
                datos:await servicio.buscarPorId(Id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando la Habitacion por Id",
                datos:[],
                estado:false
           })
        }      
    }
    async editar(request,response){
        let servicio=new ServicioHabitacion()
        let Id=request.params.Id
        let datosPeticion=request.body

        try {
            await servicio.editar(Id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la Habitacion por ID",
                datos:"Datos del id: "+Id,
                estado:true
            })
            
        } catch(error){
            response.status(400).json({
                mensaje:"Errot editando la Habitacion por ID",
                datos:[],
                estado:false
            })
        }
    }
    async eliminar(request,response){
        let servicio=new ServicioHabitacion()
        let Id=request.params.Id
        try {
            await servicio.eliminar(Id)
            response.status(200).json({
                mensaje:"Exito eliminando la Habitacion por ID",
                datos:"Datos del id: "+Id,
                estado:true
            })           
        }catch(error){
            response.status(400).json({
                mensaje:"Error eliminando la Habitacion por ID",
                datos:[],
                estado:false
            })
        }
    }
}