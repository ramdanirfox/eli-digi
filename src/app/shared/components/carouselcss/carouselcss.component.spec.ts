import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselcssComponent } from './carouselcss.component';

describe('CarouselcssComponent', () => {
  let component: CarouselcssComponent;
  let fixture: ComponentFixture<CarouselcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
