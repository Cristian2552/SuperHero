import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './blog/pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
{path:'',component: LayoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
