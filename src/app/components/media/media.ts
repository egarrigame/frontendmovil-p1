import { Component, Input, ViewChild, ElementRef } from '@angular/core'; // Añadimos ViewChild y ElementRef para buscar el elemento en el html y poder manipularlo (equivalente adoc.getElementById de JS)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media {
  @Input() videoUrl?: string; // Recibimos la url del video desde el componente Detail, recibimos la string y lo guardamos como videoUrl
  @ViewChild('reproductor') videoElement!: ElementRef<HTMLVideoElement>; // Buscamos el elemento 'reproductor' en el html de detail y lo guardamos en la variable videoElement. Referenciamos con el tipo VideoElment de html para poder usarlo
  
  // Funciones para el control del vídeo
  play() {
    this.videoElement.nativeElement.play(); // Llamamos a la variable videoElement definida antes y con natuiveElement podemos acceder al html y aplicarle los métodos
  }
  pause() {
    this.videoElement.nativeElement.pause();
  }
}
