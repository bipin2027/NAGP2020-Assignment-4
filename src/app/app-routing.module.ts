import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { DistrictsComponent } from './states/districts/districts.component';
import { AdminComponent } from './admin/admin.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PostsComponent } from './admin/posts/posts.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { RouteGuardService } from './core/services/route-guard.service';


const routes: Routes = [
  {path:"", component:StatesComponent},
  {path:"states", component:StatesComponent},
  {path:"dashboard", component:StatesComponent},
  {path:"district", component:DistrictsComponent},
  {path:"district/:name", component:DistrictsComponent},
  {path:"admin/:name", component:AdminComponent,canActivate:[RouteGuardService]},
  {path:"adminDashboard",component:AdminComponent,canActivate:[RouteGuardService]},
  {path:"latestNews", component:LatestNewsComponent},
  {path:"post", component:PostsComponent, canActivate:[RouteGuardService]},
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:"precautions", component:PrecautionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
