import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewerSelectedComponent } from './example-viewer-selected.component';

describe('ExampleViewerSelectedComponent', () => {
  let component: ExampleViewerSelectedComponent;
  let fixture: ComponentFixture<ExampleViewerSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleViewerSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleViewerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
