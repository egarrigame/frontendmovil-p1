import { Component, Input } from '@angular/core'; // Añdimos input para que se pueda usar
import { CommonModule } from '@angular/common'; // Necesario para *ngFor *ngIf

//Importar modelo de datos de players 
import { Player } from '../../models/player';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  @Input() player?: Player; // Aquí le decimos a Angular que la información (la variable) vendrá de otro componente (un player de players). El html lee la variable y puede recibir datos desde players.
}
