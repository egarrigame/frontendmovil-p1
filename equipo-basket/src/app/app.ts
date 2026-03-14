import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './components/players/players';
import { DetailComponent } from './components/detail/detail';
import { MediaComponent } from './components/media/media';
import { Jugador } from './models/jugador.model';

@Component({
  selector: 'app-root',
  standalone: true,  // ← IMPORTANTE: AÑADE ESTO
  imports: [         // ← IMPORTANTE: AÑADE ESTO
    CommonModule,    // Para *ngIf, *ngFor
    PlayersComponent,
    DetailComponent,
    MediaComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'equipo-basket';
  jugadorSeleccionado: Jugador | null = null;

  onJugadorSeleccionado(jugador: Jugador): void {
    this.jugadorSeleccionado = jugador;
  }
}