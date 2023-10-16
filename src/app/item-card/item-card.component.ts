import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItem } from '../interfaces/storeitem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() item!: StoreItem;
}
