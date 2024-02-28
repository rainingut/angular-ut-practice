import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncCardComponent } from './func-card.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const mockNotification = jasmine.createSpyObj('NzNotificationService', [
  'info'
]);

describe('FuncCardComponent', () => {
  let component: FuncCardComponent;
  let fixture: ComponentFixture<FuncCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncCardComponent],
      imports: [
        BrowserAnimationsModule,
        NzCardModule,
        NzIconModule,
        NzSkeletonModule,
        NzAvatarModule,
        NzNotificationModule,
      ],
      providers: [
        { private: NzNotificationService, useValue: mockNotification }
      ]
    });
    fixture = TestBed.createComponent(FuncCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    // fake data for dest
    component.person = {
      name: 'Ahh',
      age: 123,
      mail: 'ooxx@example.com'
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting button clicked', () => {
    const settingHandlerSpy = spyOn(component, 'settingHandler');
    component.btnOnClick('setting');
    expect(settingHandlerSpy).toHaveBeenCalled();
  });
  it('edit button clicked', () => {
    const editHandlerSpy = spyOn(component, 'editHandler');
    component.btnOnClick('edit');
    expect(editHandlerSpy).toHaveBeenCalled();
  });
  it('more button clicked', () => {
    const moreHandlerSpy = spyOn(component, 'moreHandler');
    component.btnOnClick('more');
    expect(moreHandlerSpy).toHaveBeenCalled();
  });

  it('setting handler', () => {
    component.settingHandler();
  });
  it('edit handler', () => {
    component.editHandler();
  });
  it('more handler', () => {
    component.moreHandler();
  });
});
