import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRoomResultComponent } from './find-room-result.component';

describe('FindRoomResultComponent', () => {
  let component: FindRoomResultComponent;
  let fixture: ComponentFixture<FindRoomResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRoomResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRoomResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
