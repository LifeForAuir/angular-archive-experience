import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ExampleViewerSelectedComponent } from './components/example-viewer-selected/example-viewer-selected.component';

export const routes: Routes = [
  { path: 'Typescript',
    children: [
        {
            path:"Generic/:id", component: ExampleViewerSelectedComponent, title: 'Typescript Examples'
        },
    ],
    },
  { path: '', component: LayoutComponent },
  { path: 'Angular', component: LayoutComponent },
  { path: 'Other', component: LayoutComponent },
];

