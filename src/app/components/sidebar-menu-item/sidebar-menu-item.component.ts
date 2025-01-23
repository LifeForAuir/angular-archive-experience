import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {SidBarMenuItem} from "../../model/tab.interface";

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.css'],
})
export class SidebarMenuItemComponent {
  @Input() item!: SidBarMenuItem;
  @Input() activeItem: string | null = null;
  @Output() activeItemChange = new EventEmitter<string>();


  toggleSubmenu(item: SidBarMenuItem) {
    item.open = !item.open;
  }

  setActive(item: string) {
    this.activeItemChange.emit(item);
  }
}
