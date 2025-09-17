import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Axion } from './axion';

describe('Axion', () => {
  let component: Axion;
  let fixture: ComponentFixture<Axion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Axion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Axion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
