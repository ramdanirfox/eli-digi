import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaStikerComponent } from './harga-stiker.component';

describe('HargaStikerComponent', () => {
  let component: HargaStikerComponent;
  let fixture: ComponentFixture<HargaStikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HargaStikerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaStikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
