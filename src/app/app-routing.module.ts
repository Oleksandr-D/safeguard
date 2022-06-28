import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'work', component:WhatWeDoComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
