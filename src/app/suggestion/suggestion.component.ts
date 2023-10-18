import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StoreItemsService } from '../storeitemsservice.service';
import { Suggestion } from '../interfaces/suggestion';

@Component({
  selector: 'app-suggestion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent {
  storeitemservice: StoreItemsService = inject(StoreItemsService);

  suggestionForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
    websiteRating: new FormControl(1),
    repeatVisitor: new FormControl(false),
  });

  submitSuggestion() {
    this.storeitemservice.submitSuggestion({
      name: this.suggestionForm.value.name,
      comment: this.suggestionForm.value.comment,
      websiteRating: this.suggestionForm.value.websiteRating,
      repeatVisitor: this.suggestionForm.value.repeatVisitor,
    });
    this.suggestionForm.reset();
  }
}
