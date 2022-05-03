import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'
export let rutas=express.Router()

//creo un objeto de la clase controladorH
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()


//RUTAS PARA LOS SERVICION DE HABITACION
rutas.post('/api/v1/habitaciones/',controladorHabitacion.insert)
rutas.get('/api/v1/habitaciones/',controladorHabitacion.buscarTodos)
rutas.get('/api/v1/habitaciones/:Id/',controladorHabitacion.buscarPorId)
rutas.put('/api/v1/habitaciones/:Id/',controladorHabitacion.editar)
rutas.delete('/api/v1/habitaciones/:Id/',controladorHabitacion.eliminar)

//RUTAS PARA LOS SERVICIOS DE RESERVAS
rutas.post('/api/v1/reserva/', controladorReserva.insert)
rutas.get('/api/v1/reserva/:Id/', controladorReserva.buscarPorId)
rutas.put('/api/v1/reserva/:Id/',controladorReserva.editar)
rutas.delete('/api/v1/reserva/:Id/', controladorReserva.eliminar)