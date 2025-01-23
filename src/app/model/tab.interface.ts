import { Type } from "@angular/core";

export interface Tab {
    label: string;
    component?: Type<any>;
    content?: string;
    active?: boolean;
    children?: Tab[];
}