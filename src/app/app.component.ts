// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {SidebarMenuComponent} from "./components/sidebar-menu/sidebar-menu.component";
import {MainMenuItems} from "./model/menu.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, SidebarMenuComponent]
})
export class AppComponent {
  activeItem: string | null = null;
  menuItems = MainMenuItems;

  setActiveItem(item: string) {
    this.activeItem = item;
  }
}


