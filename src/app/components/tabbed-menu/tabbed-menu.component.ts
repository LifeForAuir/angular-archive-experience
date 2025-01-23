import {Component, Input, OnInit} from '@angular/core';
import {NgFor, NgIf, NgComponentOutlet} from "@angular/common";
import {Type} from "@angular/core";
import {Tab} from "../../model/tab.interface";

@Component({
    selector: 'app-tabbed-menu',
    standalone: true,
    templateUrl: './tabbed-menu.component.html',
    styleUrls: ['./tabbed-menu.component.scss'],
    imports: [NgFor, NgIf, NgComponentOutlet]
})
export class TabbedMenuComponent implements OnInit {
    @Input() tabs: Tab[] = [];
    selectedTab: Tab | undefined;

    constructor() {
    }

    ngOnInit(): void {
        this.selectTab(this.tabs.find(tab => tab.active === true) ?? this.tabs[0]);
    }

    selectTab(tab: Tab): void {
        this.selectedTab = tab;
        this.tabs.forEach(t => t.active = false);
        tab.active = true;
    }

    getSelectedTab(): Tab | undefined {
        return this.selectedTab
    }

    isTabActive(tab: Tab): boolean {
        return tab.active === true;
    }

    selectSubTab(subTab: Tab, parent: Tab) {
        if (parent.children) {
            parent.children.forEach(t => t.active = false);
            parent.children.forEach(t => {
                t.active = t.label === subTab.label;
            });
        }
    }

    getSubSelectedTab(tab: Tab): Tab | undefined {
        return tab.children?.find(subTab => subTab.active === true);
    }
}