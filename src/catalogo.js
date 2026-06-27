const fs = require('fs');
const path = require('path');

const rutaColeccion = path.join(__dirname, '..', 'data', 'coleccion.json');

function cargarColeccion() {
  const datos = fs.readFileSync(rutaColeccion, 'utf-8');
  return JSON.parse(datos);
}

function listarDiscos() {
  const coleccion = cargarColeccion();
  console.log(`\nTu colección (${coleccion.length} discos):\n`);
  coleccion.forEach(disco => {
    console.log(`  ${disco.id}. ${disco.artista} — ${disco.album} (${disco.año}) [${disco.estado}]`);
  });
}

function buscarPorArtista(nombre) {
  const coleccion = cargarColeccion();
  return coleccion.filter(d => d.artista.toLowerCase().includes(nombre.toLowerCase()));
}

function buscarPorGenero(genero) {
  const coleccion = cargarColeccion();
  return coleccion.filter(d => d.genero.toLowerCase() === genero.toLowerCase());
}

function buscarPorBpm(bpmMin, bpmMax) {
  const coleccion = cargarColeccion();
  return coleccion.filter(d => d.bpm >= bpmMin && d.bpm <= bpmMax);
}

function buscarPorTono(tono) {
  const coleccion = cargarColeccion();
  return coleccion.filter(d => d.tono.toLowerCase() === tono.toLowerCase());
}

module.exports = { listarDiscos, buscarPorArtista, buscarPorGenero, buscarPorBpm, buscarPorTono };

listarDiscos();
