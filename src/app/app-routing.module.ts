import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'item/:id',
    component: DetailsComponent,
    title: 'Item Details',
  },
  {
    path: 'suggest',
    component: SuggestionComponent,
    title: 'Suggestion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
