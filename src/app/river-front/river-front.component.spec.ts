import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverFrontComponent } from './river-front.component';

describe('RiverFrontComponent', () => {
  let component: RiverFrontComponent;
  let fixture: ComponentFixture<RiverFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
