import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaCetakComponent } from './harga-cetak.component';

describe('HargaCetakComponent', () => {
  let component: HargaCetakComponent;
  let fixture: ComponentFixture<HargaCetakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HargaCetakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaCetakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
