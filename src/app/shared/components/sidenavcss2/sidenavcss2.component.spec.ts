import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidenavcss2Component } from './sidenavcss2.component';

describe('Sidenavcss2Component', () => {
  let component: Sidenavcss2Component;
  let fixture: ComponentFixture<Sidenavcss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sidenavcss2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sidenavcss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
