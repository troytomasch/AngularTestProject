import { Injectable } from '@angular/core';
import { StoreItem } from './interfaces/storeitem';
import { Suggestion } from './interfaces/suggestion';

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
      description: "It's a book about a guy named Odd Thomas",
    },
    {
      id: 2,
      name: 'Trail Mix',
      price: 5,
      available: true,
      image: 'https://m.media-amazon.com/images/I/61d94TceAiS.jpg',
      quantity: 1,
      description: "It's nutty and sweet",
    },
    {
      id: 3,
      name: 'Headphones',
      price: 100,
      available: false,
      image:
        'https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_US?$jpglarge$&wid=960',
      quantity: 0,
      description: 'You can listen to music',
    },
    {
      id: 4,
      name: 'Mouse',
      price: 2,
      available: true,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6265/6265133_sd.jpg',
      quantity: 2,
      description: 'Is it for a computer or does it eat cheese?',
    },
  ];

  getAllItems(): StoreItem[] {
    return this.items;
  }

  getItemById(id: Number): StoreItem | undefined {
    return this.items.find((storeItem) => storeItem.id === id);
  }

  submitSuggestion(suggestion: Suggestion) {
    console.log(
      `${suggestion.name} commented that ${suggestion.comment} and they rated the website a ${suggestion.websiteRating}`
    );
  }

  constructor() {}
}
