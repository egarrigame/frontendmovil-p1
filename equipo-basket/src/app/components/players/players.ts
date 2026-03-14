import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Jugador } from '../../models/jugador.model';
import { FilterPlayersPipe } from '../../pipes/filter-players-pipe';
import { JUGADORES } from '../../data/jugadores.data';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterPlayersPipe
  ],
  templateUrl: './players.html',
  styleUrls: ['./players.css']
})
export class PlayersComponent {
  jugadores: Jugador[] = JUGADORES;
  filtroNombre: string = '';
  filtroPosicion: string = '';
  
  @Output() jugadorSeleccionado = new EventEmitter<Jugador>();

  seleccionarJugador(jugador: Jugador): void {
    this.jugadorSeleccionado.emit(jugador);
  }

  get posicionesUnicas(): string[] {
    return [...new Set(this.jugadores.map(j => j.posicion))];
  }
}