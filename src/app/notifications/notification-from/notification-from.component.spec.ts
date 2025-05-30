import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFromComponent } from './notification-from.component';

describe('NotificationFromComponent', () => {
  let component: NotificationFromComponent;
  let fixture: ComponentFixture<NotificationFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
