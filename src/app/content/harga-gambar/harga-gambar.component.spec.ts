import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaGambarComponent } from './harga-gambar.component';

describe('HargaGambarComponent', () => {
  let component: HargaGambarComponent;
  let fixture: ComponentFixture<HargaGambarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HargaGambarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaGambarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
