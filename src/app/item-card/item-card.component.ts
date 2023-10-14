import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItem } from '../interfaces/storeitem';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() item!: StoreItem;
}
