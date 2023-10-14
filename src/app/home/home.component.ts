import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
import { StoreItem } from '../interfaces/storeitem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items: StoreItem[] = [
    {
      name: 'Odd Thomas Book',
      price: 11,
      available: true,
      image:
        'https://m.media-amazon.com/images/M/MV5BMjI1MDE2NjI1OV5BMl5BanBnXkFtZTgwMzEyMTMxMTE@._V1_.jpg',
    },
    {
      name: 'Trail Mix',
      price: 5,
      available: true,
      image: 'https://m.media-amazon.com/images/I/61d94TceAiS.jpg',
    },
    {
      name: 'Headphones',
      price: 100,
      available: false,
      image:
        'https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_US?$jpglarge$&wid=960',
    },
    {
      name: 'Mouse',
      price: 2,
      available: true,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6265/6265133_sd.jpg',
    },
  ];
}
