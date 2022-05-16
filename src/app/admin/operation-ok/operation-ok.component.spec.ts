import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationOkComponent } from './operation-ok.component';

describe('OperationOkComponent', () => {
  let component: OperationOkComponent;
  let fixture: ComponentFixture<OperationOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
