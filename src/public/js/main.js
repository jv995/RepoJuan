const map = L.map('map-template').setView([-25.4518556,-56.4373476,40], 13);//parametro de latitud y longitud , zoom

const socket = io();


const tileURL ='http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png';

L.tileLayer(tileURL).addTo(map);//estilos y importacion de imagen de tilelayer

map.locate({enableHighAccuracy: true});//activar localizacion
map.on('locationfound', e => {
    const coords = [e.latlng.lat, e.latlng.lng];
    const marker = L.marker(coords);
    marker.bindPopup('Tu estas aqui!');//mensaje
    map.addLayer(marker);//ubicacion
    socket.emit('coordenadas de usuario', e.latlng);
});

socket.on('nuevoUsuarioCoordenadas', (coords) => {
    console.log('nuevo usuario conectado');
    const marker = L.marker([coords.lat , coords.lng ]);
    marker.bindPopup('Tu estas aqui!');//mensaje
    map.addLayer(marker);//ubicacion
});

/*
const marker = L.marker([-25.4518556,-56.4373476,40]);
marker.bindPopup('Tu estas ha qui!');//mensaje
map.addLayer(marker);//ubicacion
*/
