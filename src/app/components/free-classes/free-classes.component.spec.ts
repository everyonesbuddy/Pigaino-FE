import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeClassesComponent } from './free-classes.component';

describe('FreeClassesComponent', () => {
  let component: FreeClassesComponent;
  let fixture: ComponentFixture<FreeClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
