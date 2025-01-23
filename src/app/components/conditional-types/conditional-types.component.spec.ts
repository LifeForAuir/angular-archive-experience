import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalTypesComponent } from './conditional-types.component';

describe('ConditionalTypesComponent', () => {
  let component: ConditionalTypesComponent;
  let fixture: ComponentFixture<ConditionalTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
