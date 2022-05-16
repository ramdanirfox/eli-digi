import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcssComponent } from './sidenavcss.component';

describe('SidenavcssComponent', () => {
  let component: SidenavcssComponent;
  let fixture: ComponentFixture<SidenavcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
