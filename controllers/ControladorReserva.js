import{ServicioReserva} from '../services/ServicioReserva.js'
export class ControladorReserva{
    constructor(){}

    async insert(request,response){   
        let datosPeticion=request.body
        let servicio=new ServicioReserva()
        try {
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })          
        } catch (error) {
            response.status(400).json({
                mensaje:"Error en el ingreso de datos"+error,
                datosIngresados:[],
                estado:false
            })
        }
    }
    async buscarPorId(request,response){
        let servicio=new ServicioReserva()
        let Id=request.params.Id
        try {
            response.status(200).json({
                mensaje:"Exito buscando la Reserva por ID",
                datos:await servicio.buscarPorId(Id),
                estado:true
            })
        } catch (error) {
            response.status(400).json({
                mensaje:"Error buscando la Reserva por ID",
                datos:[],
                estado:false
            })
        }

    }
    async editar(request,response){
        let servicio=new ServicioReserva()
        let Id=request.params.Id
        let datosPeticion=request.body
        try {
            await servicio.editar(Id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la Reserva por ID",
                datos:"Datos del id: "+Id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"Error editando la Reserva por ID",
                datos:[],
                estado:false
            })
        }
    }
    async eliminar(request,response){
        let servicio=new ServicioReserva()
        let Id=request.params.Id
        try {
            await servicio.eliminar(Id)
            response.status(200).json({
                mensaje:"Exito eliminando la Reserva por ID",
                datos:"Datos del id: "+Id,
                estado:true
            }) 
        }catch(error){
            response.status(400).json({
                mensaje:"Error eliminando la Reserva por ID",
                datos:[],
                estado:false
            }) 
        }
    }
}