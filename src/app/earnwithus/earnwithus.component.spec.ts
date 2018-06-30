import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnwithusComponent } from './earnwithus.component';

describe('EarnwithusComponent', () => {
  let component: EarnwithusComponent;
  let fixture: ComponentFixture<EarnwithusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnwithusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
