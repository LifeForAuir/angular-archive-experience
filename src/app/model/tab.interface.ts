import { Type } from "@angular/core";
import {MenuItem} from "./menu.interface";

export interface Tab {
    label: string;
    component?: Type<any>;
    content?: string;
    active?: boolean;
    children?: Tab[];
}

export interface SidBarMenuItem extends MenuItem{
    open?: boolean;
}