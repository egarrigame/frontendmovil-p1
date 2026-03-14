import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class DetailComponent {
  @Input() jugador: Jugador | null = null;

  
  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x200?text=Sin+foto';
  }
}