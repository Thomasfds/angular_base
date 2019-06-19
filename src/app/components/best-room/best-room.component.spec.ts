import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRoomComponent } from './best-room.component';

describe('BestRoomComponent', () => {
  let component: BestRoomComponent;
  let fixture: ComponentFixture<BestRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
