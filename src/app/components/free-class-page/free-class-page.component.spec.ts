import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeClassPageComponent } from './free-class-page.component';

describe('FreeClassPageComponent', () => {
  let component: FreeClassPageComponent;
  let fixture: ComponentFixture<FreeClassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeClassPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
