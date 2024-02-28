import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncCardComponent } from './func-card/func-card.component';



@NgModule({
  declarations: [
    FuncCardComponent,
  ],
  exports: [
    FuncCardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CommonComponentModule { }
