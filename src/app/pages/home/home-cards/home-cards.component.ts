import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FINANCIAL_DATA } from './home-cards.constants';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent {
  @Input() inputData: any;
  @Input() selectedMonth: any;
  financialDatas: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(111)
    const data = changes?.['inputData']?.currentValue;
    const selectedMonth = changes?.['selectedMonth']?.currentValue;
    if (data) {
      this.inputData = data;
      this.setFinancial();
    }
    if (selectedMonth) {
      this.selectedMonth = selectedMonth;
    }
    // console.log(this.inputData, this.selectedMonth)
  }

  setFinancial (){
    this.financialDatas = [...(FINANCIAL_DATA.map(data => {
      data.checked = false;
      return data;
    }))];
    console.log(this.financialDatas)
  }
  
  checkHandler(event: any){
    console.log(event)
  }
}
