import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OscompComponent } from './oscomp/oscomp.component';
import { componentFactoryName } from '@angular/compiler';
import { PlcompComponent } from './plcomp/plcomp.component';
import { DbcompComponent } from './dbcomp/dbcomp.component';


const routes: Routes = [
  {path : 'os', component:OscompComponent},
  {path : 'pl' ,component:PlcompComponent},
  {path : 'db' ,component:DbcompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
