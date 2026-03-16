import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importar esto es clave
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrls: ['./media.css']
})
export class MediaComponent {
  @Input() jugador: Jugador | null = null;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  isPlaying: boolean = false;
  volume: number = 1;

  // Inyectamos el sanitizer en el constructor
  constructor(private sanitizer: DomSanitizer) {}

  // Este método "limpia" la URL para que Angular confíe en ella
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  togglePlay(): void {
    if (!this.videoPlayer) return;
    const video = this.videoPlayer.nativeElement;
    
    if (this.isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  changeVolume(event: any): void {
    this.volume = event.target.value;
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.volume = this.volume;
    }
  }

  restartVideo(): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.currentTime = 0;
      if (!this.isPlaying) {
        this.togglePlay();
      }
    }
  }
}