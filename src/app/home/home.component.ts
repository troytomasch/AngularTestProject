import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
import { StoreItem } from '../interfaces/storeitem';
import { StoreItemsService } from '../storeitemsservice.service';
import { SuggestionComponent } from '../suggestion/suggestion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, SuggestionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items: StoreItem[] = [];
  storeItemsService: StoreItemsService = inject(StoreItemsService);

  constructor() {
    this.items = this.storeItemsService.getAllItems();
  }
}
