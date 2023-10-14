import { Injectable } from '@angular/core';
import { StoreItem } from './interfaces/storeitem';

@Injectable({
  providedIn: 'root',
})
export class StoreItemsService {
  items: StoreItem[] = [
    {
      id: 1,
      name: 'Odd Thomas Book',
      price: 11,
      available: true,
      image:
        'https://m.media-amazon.com/images/M/MV5BMjI1MDE2NjI1OV5BMl5BanBnXkFtZTgwMzEyMTMxMTE@._V1_.jpg',
      quantity: 5,
    },
    {
      id: 2,
      name: 'Trail Mix',
      price: 5,
      available: true,
      image: 'https://m.media-amazon.com/images/I/61d94TceAiS.jpg',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Headphones',
      price: 100,
      available: false,
      image:
        'https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_US?$jpglarge$&wid=960',
      quantity: 0,
    },
    {
      id: 4,
      name: 'Mouse',
      price: 2,
      available: true,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6265/6265133_sd.jpg',
      quantity: 2,
    },
  ];

  getAllItems(): StoreItem[] {
    return this.items;
  }

  constructor() {}
}
