# Vinilos 🎵

Catálogo personal de discos de vinilo.

## ¿Qué es esto?

Una app sencilla para registrar y explorar tu colección de vinilos: artista, álbum, año, género y estado del disco.

## Funcionalidades

- Agregar discos a tu colección
- Ver el catálogo completo
- Filtrar por artista o género
- Buscar por BPM (rango) o tono musical
- Marcar el estado del disco (Nuevo, Bueno, Regular)

## Estructura del proyecto

```
vinilos/
├── data/
│   └── coleccion.json   # Tu colección de discos
├── src/
│   ├── catalogo.js      # Lógica principal
│   └── utils.js         # Funciones auxiliares
└── README.md
```

## Cómo empezar

```bash
node src/catalogo.js
```

## Formato de un disco

```json
{
  "id": 1,
  "artista": "Soda Stereo",
  "album": "Signos",
  "año": 1986,
  "genero": "Rock",
  "sello": "CBS",
  "bpm": 120,
  "tono": "Am",
  "estado": "Bueno"
}
```
