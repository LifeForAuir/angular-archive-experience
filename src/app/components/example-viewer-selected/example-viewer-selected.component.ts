import { Component } from '@angular/core';
import { ExampleViewerComponent } from '../example-viewer/example-viewer.component';
import { Example, TypescriptExample } from '../../model/example.interface';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-viewer-selected',
  standalone: true,
  imports: [ExampleViewerComponent, CommonModule],
  templateUrl: './example-viewer-selected.component.html',
  styleUrl: './example-viewer-selected.component.css'
})
export class ExampleViewerSelectedComponent {
  examples = TypescriptExample;
  selectedExample: Example | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params:ParamMap) => {
        const selectedId = Number(params.get('id'));
        this.updateSelectedExample(selectedId);
      });
      this.updateSelectedExample();
  }

   private updateSelectedExample(selectedId?: number): void {
    if (selectedId) {
      this.selectedExample = this.examples.find(example => example.id === selectedId);
    } else {
         this.selectedExample = this.examples[0];
         this.router.navigate(['/typescript', this.selectedExample.id]);
    }
   }
}
