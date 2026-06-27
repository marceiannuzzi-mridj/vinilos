const fs = require('fs');
const path = require('path');

const rutaColeccion = path.join(__dirname, '..', 'data', 'coleccion.json');

function cargarColeccion() {
  const datos = fs.readFileSync(rutaColeccion, 'utf-8');
  return JSON.parse(datos);
}

function guardarColeccion(coleccion) {
  fs.writeFileSync(rutaColeccion, JSON.stringify(coleccion, null, 2), 'utf-8');
}

function listarDiscos() {
  const coleccion = cargarColeccion();
  console.log(`\nTu colección (${coleccion.length} discos):\n`);
  coleccion.forEach(disco => {
    const fotoEstado = disco.foto ? '📷' : '○';
    console.log(`  ${fotoEstado} ${disco.id}. ${disco.artista} — ${disco.album} (${disco.año}) [${disco.estado}]`);
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

function sinFoto() {
  const coleccion = cargarColeccion();
  return coleccion.filter(d => !d.foto);
}

function agregarFoto(id, urlDrive) {
  const coleccion = cargarColeccion();
  const disco = coleccion.find(d => d.id === id);
  if (!disco) {
    console.log(`No se encontró el disco con id ${id}`);
    return;
  }
  disco.foto = urlDrive;
  guardarColeccion(coleccion);
  console.log(`Foto guardada para: ${disco.artista} — ${disco.album}`);
}

module.exports = {
  listarDiscos,
  buscarPorArtista,
  buscarPorGenero,
  buscarPorBpm,
  buscarPorTono,
  sinFoto,
  agregarFoto
};

listarDiscos();
