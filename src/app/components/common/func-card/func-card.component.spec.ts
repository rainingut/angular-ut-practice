import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncCardComponent } from './func-card.component';

describe('FuncCardComponent', () => {
  let component: FuncCardComponent;
  let fixture: ComponentFixture<FuncCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncCardComponent]
    });
    fixture = TestBed.createComponent(FuncCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
