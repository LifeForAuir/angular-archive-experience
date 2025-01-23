import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuItemComponent } from '../sidebar-menu-item/sidebar-menu-item.component';
import {SidBarMenuItem} from "../../model/tab.interface";

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, SidebarMenuItemComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent {
  @Input() menuItems: SidBarMenuItem[] = [];
  @Input() activeItem: string | null = null;
  @Output() activeItemChange = new EventEmitter<string>();

  setActive(item: string) {
    this.activeItemChange.emit(item);
  }
}



