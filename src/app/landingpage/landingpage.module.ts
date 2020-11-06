import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ProjectsComponent } from './project/projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { ResordAndResidencesComponent } from './project/resord-and-residences/resord-and-residences.component';
import { BonHeurDeLaVilleComponent } from './project/bon-heur-de-la-ville/bon-heur-de-la-ville.component';



@NgModule({
  declarations: [ 
    LandingpageComponent,
     ProjectsComponent, 
     LayoutComponent, ResordAndResidencesComponent, BonHeurDeLaVilleComponent 
  ],
  imports: [
    ScrollToModule.forRoot(),
    CommonModule,
    LandingpageRoutingModule,
    
  ]
})
export class LandingpageModule { }
