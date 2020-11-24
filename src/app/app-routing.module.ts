import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverViewPageComponent } from 'src/app/over-view-page/over-view-page.component';
import { AddToCartComponent } from 'src/app/add-to-cart/add-to-cart.component';

import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: OverViewPageComponent },
  { path: "cart", component: AddToCartComponent},
  { path: "details/:id", component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
