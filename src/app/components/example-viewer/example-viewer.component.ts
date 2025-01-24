import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';


@Component({
  selector: 'app-example-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.css']
})
export class ExampleViewerComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() sourceUrl: string = '';

    ngAfterViewInit() {
    Prism.highlightAll();
  }
}

