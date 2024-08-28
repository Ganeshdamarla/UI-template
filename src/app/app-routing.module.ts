import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoWebpageComponent } from './demo-webpage/demo-webpage.component'
import { WebpageComponent } from './webpage/webpage.component';

const routes: Routes = [
  {path:'',component:DemoWebpageComponent},
  {path:'webpage',component:WebpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
