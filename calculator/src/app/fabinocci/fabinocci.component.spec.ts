import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabinocciComponent } from './fabinocci.component';

describe('FabinocciComponent', () => {
  let component: FabinocciComponent;
  let fixture: ComponentFixture<FabinocciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabinocciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabinocciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
