import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
    {path: '', component: PortafolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', component: ItemComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''},
]

@NgModule({

})


export class AppRoutingModule {

}