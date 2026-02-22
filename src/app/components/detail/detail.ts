import { Component, Input } from '@angular/core'; // Añdimos input para que se pueda usar
import { CommonModule } from '@angular/common'; // Necesario para *ngFor *ngIf

 
import { Player } from '../../models/player'; //Modelo de datos de players
import { Media } from '../media/media'; // Componente media para incluir el reproductor

@Component({
  selector: 'app-detail',
  imports: [CommonModule, Media], // Añadimos Media para poder usar el html de media en detail
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  @Input() player?: Player; // Aquí le decimos a Angular que la información (la variable) vendrá de otro componente (un player de players). El html lee la variable y puede recibir datos desde players.
}
