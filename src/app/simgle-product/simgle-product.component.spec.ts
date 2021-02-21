import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimgleProductComponent } from './simgle-product.component';

describe('SimgleProductComponent', () => {
  let component: SimgleProductComponent;
  let fixture: ComponentFixture<SimgleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimgleProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimgleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
