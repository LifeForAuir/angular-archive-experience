import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTypesComponent } from './generic-types.component';

describe('GenericTypesComponent', () => {
  let component: GenericTypesComponent;
  let fixture: ComponentFixture<GenericTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
