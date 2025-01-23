import {Routes} from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {MainMenuItems, MenuItem} from "./model/menu.interface";


function generateRoutes(menuItems: MenuItem[], parentPath: string = ''): Routes {
    let routes: Routes = [];

    for (const item of menuItems) {
        if (item.link) {
            const path = item.link.startsWith('/') ? item.link.substring(1) : item.link;
            const route = {
                path: `${parentPath}${path}`,
                component: LayoutComponent,
            };
            routes.push(route);
        }

        if (item.children) {
            routes = routes.concat(generateRoutes(item.children, `${parentPath}${item.link ? item.link.substring(1) + '/' : ''}`));
        }
    }
    return routes;
}


export const routes: Routes = generateRoutes(MainMenuItems);
