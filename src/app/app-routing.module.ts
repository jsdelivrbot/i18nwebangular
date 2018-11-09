import { Routes, RouterModule } from '@angular/router';
import { SoftwareDevelopmentServiceComponent } from './software-development-service/software-development-service.component';
import { HowWeExeComponent } from './how-we-exe/how-we-exe.component';
import { EsiComponent } from './esi/esi.component';
import { BiComponent } from './bi/bi.component';
import { DevComponent} from './dev/dev.component';
import { DataComponent}from './data/data.component';
import { BpasiComponent } from './bpasi/bpasi.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company.component';
import { GetInTouchComponent } from './getInTouch/getInTouch.component';
import { TechPracticeComponent } from './tech-practice/tech-practice.component';
import { VisionComponent } from './vision/vision.component';
import { IndustryComponent } from './industry/industry.component';
import { ElkComponent } from './elk/elk.component';


const appRoutes: Routes = [
 
  { path: 'software-development-service', component: SoftwareDevelopmentServiceComponent },
  { path: 'hw-we-exe', component: HowWeExeComponent },
  { path: 'esi', component: EsiComponent },
  { path: 'bi',component:BiComponent},
  { path: 'dev',component:DevComponent},
  {path:'data',component:DataComponent},
  { path:'elk',component:ElkComponent},
  { path: 'bpasi', component: BpasiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'get-in-touch', component: GetInTouchComponent},
  { path: 'tech-practice', component: TechPracticeComponent},
  { path: 'vision', component: VisionComponent},
  { path: 'industry', component:IndustryComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
       { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

//export const AppRoutes = RouterModule.forChild(appRoutes);
