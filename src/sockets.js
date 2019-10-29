module.exports = io => {
    io.on('connection', (socket) => {
        console.log('New User connected');

        socket.on('coordenadas de usuario', coords => {
           // console.log(coords);
           socket.broadcast.emit('nuevoUsuarioCoordenadas', coords);
        });
    });
}