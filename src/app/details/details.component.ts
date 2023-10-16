import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StoreItem } from '../interfaces/storeitem';
import { StoreItemsService } from '../storeitemsservice.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  storeItemService = inject(StoreItemsService);
  storeItem: StoreItem | undefined;

  constructor() {
    const itemId = Number(this.route.snapshot.params['id']);
    this.storeItem = this.storeItemService.getItemById(itemId);
  }
}
