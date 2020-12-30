import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { Site_ROUTES } from './site/site.route.module';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        children: [...Site_ROUTES]
    },
    {
        path: 'PortaldeApoio',
        loadChildren: './intranet/intranet.module#IntranetModule',
    },       
    { 
        path: '**', 
        redirectTo: ''
    } 
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(ROUTES, { useHash: false } ) 
    ],
    exports: [ RouterModule ]
})

export class AppRouteModule { }

