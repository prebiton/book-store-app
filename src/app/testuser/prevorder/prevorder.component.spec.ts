import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevorderComponent } from './prevorder.component';

describe('PrevorderComponent', () => {
  let component: PrevorderComponent;
  let fixture: ComponentFixture<PrevorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
