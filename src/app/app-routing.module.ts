import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EarnwithusComponent } from './earnwithus/earnwithus.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BarComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'earnwithus', component: EarnwithusComponent }

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}