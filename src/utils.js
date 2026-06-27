function formatearDisco(disco) {
  return `${disco.artista} — ${disco.album} (${disco.año})`;
}

function estadosValidos() {
  return ['Nuevo', 'Bueno', 'Regular'];
}

function validarEstado(estado) {
  return estadosValidos().includes(estado);
}

module.exports = { formatearDisco, estadosValidos, validarEstado };
