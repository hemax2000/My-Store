import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemCartComponent } from './product-item-cart.component';

describe('ProductItemCartComponent', () => {
  let component: ProductItemCartComponent;
  let fixture: ComponentFixture<ProductItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
