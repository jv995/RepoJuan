//importacion de modulos
const express = require('express');
const engine = require('ejs-mate');
const path = require('path')
const  socketIO =  require('socket.io');
const http = require('http')
//inicializaciones
const app = express();
//conexion con el cliente a servidor socket 
const server = http.createServer(app);
const io = socketIO(server);

//configurar el servidor settings
app.engine('ejs', engine); //configuracion del motor de plantilla
app.set('view engine','ejs');//establecer un motor de pantillas
app.set('views', path.join(__dirname,'views'));

//app.set('views', '')

//rutas
app.use(require('./routes/'));

//sockets
require('./sockets')(io);

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//inica el servidor
server.listen(4000, () =>{
    console.log('Servidor puerto 4000');
});