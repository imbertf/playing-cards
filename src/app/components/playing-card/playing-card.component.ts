import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  monster: InputSignal<Monster> = input(new Monster());
}
