import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardsComponent } from './home-cards.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[HomeCardsComponent]
})
export class HomeCardsModule { }
