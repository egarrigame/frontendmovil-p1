import { Jugador } from '../models/jugador.model';

export const JUGADORES: Jugador[] = [
  {
    id: 1,
    nombre: 'Toni',
    apellidos: 'Kukoč',
    posicion: 'Alero',
    edad: 22,
    altura: 208,
    numero: 7,
    puntosPorPartido: 18.6,
    imagen: 'assets/img/kukoc.jpg',      
    videoUrl:  'assets/videos/video.mp4.mp4',
    nacionalidad: 'Croacia'
  },
  {
    id: 2,
    nombre: 'Dražen',
    apellidos: 'Petrović',
    posicion: 'Escolta',
    edad: 25,
    altura: 196,
    numero: 10,
    puntosPorPartido: 22.4,
    imagen:  'assets/img/petrovic.webp',
    videoUrl: 'assets/videos/video.mp4.mp4',
    nacionalidad: 'Croacia'
  },
  {
    id: 3,
    nombre: 'Dino',
    apellidos: 'Rađa',
    posicion: 'Pívot',
    edad: 23,
    altura: 211,
    numero: 12,
    puntosPorPartido: 16.7,
    imagen: 'assets/img/radja.jpeg',
    videoUrl:'assets/videos/video.mp4.mp4',
    nacionalidad: 'Croacia'
  },
  {
    id: 4,
    nombre: 'Arvydas',
    apellidos: 'Sabonis',
    posicion: 'Pívot',
    edad: 26,
    altura: 221,
    numero: 11,
    puntosPorPartido: 16.0,
    imagen: 'assets/img/Arvydas_Sabonis.jpg',
    videoUrl:   'assets/videos/video.mp4.mp4',
    nacionalidad: 'Lituania'
  },
  {
    id: 5,
    nombre: 'Šarūnas',
    apellidos: 'Marčiulionis',
    posicion: 'Escolta',
    edad: 26,
    altura: 196,
    numero: 13,
    puntosPorPartido: 18.5,
    imagen: 'assets/img/marciulionis.jpeg',
    videoUrl: 'assets/videos/video.mp4.mp4',
    nacionalidad: 'Lituania'
  }
];