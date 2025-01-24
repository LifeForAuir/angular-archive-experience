import { Component, Input, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';


@Component({
  selector: 'app-example-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.css']
})
export class ExampleViewerComponent implements AfterViewInit, OnInit, OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() code: string = '';
  @Input() sourceUrl: string = '';

  protected safeDescription: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  async ngOnInit() {
    this.generateSafeDescription(this.description);
 }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['description']) {
        this.generateSafeDescription(changes['description'].previousValue);
    }
  }

  private async generateSafeDescription(description: string) {
    const html = await marked.parse(description);
    this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

