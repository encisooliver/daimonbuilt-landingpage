import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landingpage/landingpage.module#LandingpageModule' },
  { path: '*', loadChildren: './landingpage/landingpage.module#LandingpageModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
