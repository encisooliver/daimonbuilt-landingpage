import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';
import { ProjectsComponent } from './project/projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { ResordAndResidencesComponent } from './project/resord-and-residences/resord-and-residences.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: LandingpageComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'resorts-and-residences', component: ResordAndResidencesComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingpageRoutingModule { }
