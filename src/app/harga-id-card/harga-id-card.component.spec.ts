import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaIdCardComponent } from './harga-id-card.component';

describe('HargaIdCardComponent', () => {
  let component: HargaIdCardComponent;
  let fixture: ComponentFixture<HargaIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HargaIdCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
