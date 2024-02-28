import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCardsModule } from './home-cards/home-cards.module';
import { CommonComponentModule } from 'src/app/components/common/common.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeCardsModule,

    CommonComponentModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
