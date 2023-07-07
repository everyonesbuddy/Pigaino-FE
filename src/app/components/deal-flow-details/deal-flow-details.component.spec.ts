import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFlowDetailsComponent } from './deal-flow-details.component';

describe('DealFlowDetailsComponent', () => {
  let component: DealFlowDetailsComponent;
  let fixture: ComponentFixture<DealFlowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealFlowDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealFlowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
