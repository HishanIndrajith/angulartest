import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRoomWindowComponent } from './find-room-window.component';

describe('FindRoomWindowComponent', () => {
  let component: FindRoomWindowComponent;
  let fixture: ComponentFixture<FindRoomWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRoomWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRoomWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
