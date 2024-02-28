import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subject } from 'rxjs';

type BtnType = 'setting' | 'edit' | 'more';
@Component({
  selector: 'app-func-card',
  templateUrl: './func-card.component.html',
  styleUrls: ['./func-card.component.scss']
})
export class FuncCardComponent implements OnInit, OnDestroy {
  constructor(
    private notification: NzNotificationService,
  ){}
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() person!: {name:string, age:number, mail:string};
  @Output() click = new EventEmitter();
  
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  btnOnClick(btnType: BtnType){
    switch(btnType){
      case 'setting': 
        this.settingHandler();
        break;
      case 'edit': 
        this.editHandler();
        break;
      case 'more': 
        this.moreHandler();
        break;
    }
    const emitData = {person: this.person,btnType};
    this.click.emit(emitData);
  }

  settingHandler(){
    this.notification.info('setting', 'setting button clicked');
  }
  editHandler(){
    this.notification.info('edit', 'edit button clicked');
  }
  moreHandler(){
    this.notification.info('more', 'more button clicked');
  }

}
