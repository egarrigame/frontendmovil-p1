import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  
  isPlaying: boolean = false;  //
  volume: number = 1;

  togglePlay(): void {
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
    this.videoPlayer.nativeElement.volume = this.volume;
  }

  restartVideo(): void {
    this.videoPlayer.nativeElement.currentTime = 0;
    if (!this.isPlaying) {
      this.togglePlay();
    }
  }
}