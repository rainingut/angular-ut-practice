import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncCardComponent } from './func-card/func-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [FuncCardComponent,],
  exports: [FuncCardComponent,],
  imports: [
    CommonModule,
    NzCardModule,
    NzIconModule,
    NzSkeletonModule,
    NzAvatarModule,
    NzNotificationModule,
  ]
})
export class CommonComponentModule { }
