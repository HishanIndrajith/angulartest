import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContractWindowComponent } from './new-contract-window.component';

describe('NewContractWindowComponent', () => {
  let component: NewContractWindowComponent;
  let fixture: ComponentFixture<NewContractWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContractWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContractWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
