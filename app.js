//importando el paquete dotenv
//require('dotenv').config()
import 'dotenv/config'

//importo la clase servidor
import {Servidor}from './Server/Servidor.js'

//creo un objeto de la clase servidor
let servidor=new Servidor()

//llamo al metodo encender servidor 
servidor.encenderServidor()

