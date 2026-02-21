/* Comportamiento del componente con TS, se importa en app/app.ts para que se pueda mostrar.
Desde aquí importamos el modelo y los datos a datos/players-data.ts y se guarda en una variable para que luego el html pueda leerlo.  */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo para poder usar ngFor y ngIf
import { Player } from '../../models/player'; // Modelo de los datos de players
import { PLAYERS } from '../../datos/players-data'; // Datos de los players

@Component({
  selector: 'app-players',
  imports: [CommonModule], // Para que el componente pueda usar html (html puede entender los comandos ngFor y ngIf para bucles y visibilidad de elementos)
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players {
  listaPlayers: Player[] = PLAYERS; // Variable con los players definidos en datos, para que el html pueda leer a los jugadores que contiene.
}
