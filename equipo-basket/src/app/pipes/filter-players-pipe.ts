import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../models/jugador.model';

@Pipe({
  name: 'filterPlayers',
  standalone: true
})
export class FilterPlayersPipe implements PipeTransform {
  transform(jugadores: Jugador[], nombreFiltro: string, posicionFiltro: string): Jugador[] {
    if (!jugadores) return [];
    
    let filtrados = [...jugadores];
    
    // Filtrar por nombre
    if (nombreFiltro) {
      filtrados = filtrados.filter(j => 
        j.nombre.toLowerCase().includes(nombreFiltro.toLowerCase()) ||
        j.apellidos.toLowerCase().includes(nombreFiltro.toLowerCase())
      );
    }
    
    // Filtrar por posición
    if (posicionFiltro) {
      filtrados = filtrados.filter(j => j.posicion === posicionFiltro);
    }
    
    return filtrados;
  }
}