// src/app/layout/layout.component.ts
import {Component} from '@angular/core';
import {TabbedMenuComponent} from "../tabbed-menu/tabbed-menu.component";
import {ConditionalTypesComponent} from "../conditional-types/conditional-types.component";
import {RouterOutlet} from "@angular/router";
import {Tab} from "../../model/tab.interface";
import {GenericTypesComponent} from "../generic-types/generic-types.component";

const TABS: Tab[] = [
    {label: 'Home', content: 'Content for Home tab', active: true},
    { label: 'TypeScript Examples',
        children: [
            {label: 'Conditional Types', component: ConditionalTypesComponent},
            {label: 'Generic Types', component: GenericTypesComponent}
        ]},
    {label: 'Angular Examples', content: 'Content for Angular Examples tab'}
];

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [TabbedMenuComponent, RouterOutlet]
})
export class LayoutComponent {
    tabs = TABS;
}

