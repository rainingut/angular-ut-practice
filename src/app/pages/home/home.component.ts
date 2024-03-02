import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  inputData = {
    id: 31887,
    site: 'WHQ',
    year: '2023',
    costCenter: '99GA10',
    allocationChargeTo: '',
    acctCode: '71221000',
    acctDesc: 'Repair',
    seq: 6,
    pLevel: 'P2',
    category: 'Repair MA',
    purchaseMonth: '5',
    type: 'Sustain',
    taskName:
      '[MA] Oracle license MA (2022/6/1  2023/5/31 : 2,595K/M ; 2023/6/1  2024/5/31 : 2,878K/M)',
    contract: null,
    contractFrom: null,
    contractTo: null,
    payment: '一次付',
    currency: 'NTD',
    uom: 'K',
    ntdPurchaseAmount: '33120',
    amortizedAmount: '33120',
    assetClass: '',
    usefulLife: 1,
    carryOver: false,
    pic: 'Allen Hsiao',
    addUser: null,
    addDate: '2023-04-12T11:59:40.197Z',
    budgetDetails: [
      {
        id: 15136,
        budgetId: 31887,
        month: 'jan',
        value: '2594',
        gapDetail: {
          id: 15136,
          year: '2023',
          month: 'jan',
          taskName:
            '[MA] Oracle license MA (2022/6/1  2023/5/31 : 2,595K/M ; 2023/6/1  2024/5/31 : 2,878K/M)',
          costCenter: '99GA10',
          accountCode: '71221000',
          accountDesc: 'Repair',
          budget: '2594',
          expense: '0',
          gap: '2594',
          stage: '短執行',
          reason: null,
          remark: null,
          updatedAt: null,
        },
      },
      {
        id: 15137,
        budgetId: 31887,
        month: 'feb',
        value: '2595',
        gapDetail: {
          id: 15137,
          year: '2023',
          month: 'feb',
          taskName:
            '[MA] Oracle license MA (2022/6/1  2023/5/31 : 2,595K/M ; 2023/6/1  2024/5/31 : 2,878K/M)',
          costCenter: '99GA10',
          accountCode: '71221000',
          accountDesc: 'Repair',
          budget: '2595',
          expense: '0',
          gap: '2595',
          stage: '短執行',
          reason: null,
          remark: null,
          updatedAt: null,
        },
      },
      {
        id: 15138,
        budgetId: 31887,
        month: 'mar',
        value: '2595',
        gapDetail: {
          id: 15138,
          year: '2023',
          month: 'mar',
          taskName:
            '[MA] Oracle license MA (2022/6/1  2023/5/31 : 2,595K/M ; 2023/6/1  2024/5/31 : 2,878K/M)',
          costCenter: '99GA10',
          accountCode: '71221000',
          accountDesc: 'Repair',
          budget: '2595',
          expense: '0',
          gap: '2595',
          stage: '短執行',
          reason: null,
          remark: null,
          updatedAt: null,
        },
      },
      {
        id: 15139,
        budgetId: 31887,
        month: 'apr',
        value: '2595',
      },
      {
        id: 15140,
        budgetId: 31887,
        month: 'may',
        value: '2595',
      },
      {
        id: 15141,
        budgetId: 31887,
        month: 'jun',
        value: '2878',
      },
      {
        id: 15142,
        budgetId: 31887,
        month: 'jul',
        value: '2878',
      },
      {
        id: 15143,
        budgetId: 31887,
        month: 'aug',
        value: '2878',
      },
      {
        id: 15144,
        budgetId: 31887,
        month: 'sep',
        value: '2878',
      },
      {
        id: 15145,
        budgetId: 31887,
        month: 'oct',
        value: '2878',
      },
      {
        id: 15146,
        budgetId: 31887,
        month: 'nov',
        value: '2878',
      },
      {
        id: 15147,
        budgetId: 31887,
        month: 'dec',
        value: '2878',
      },
    ],
  };
  selectedMonth = this.inputData.budgetDetails[3];

  data = [
    { name: 'John', age: 30, mail: 'john@example.com' },
    { name: 'Alice', age: 25, mail: 'alice@example.com' },
    { name: 'Bob', age: 35, mail: 'bob@example.com' },
  ];

  ngOnInit(): void {
    fetch('https://api.github.com/search/users?q=Andy')
    .then((response:any)=>response.json())
    .then((data:any)=>{
      this.data = data?.items
      ?.filter((_:any, index:number)=>index<3)
      ?.map((item:any)=>{
        return {
          name: item.login || '',
          age: item.id,
          mail: item.node_id
        };
      });
    })
  }

}
