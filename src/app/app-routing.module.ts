import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RoomsListComponent} from './pages/rooms-list/rooms-list.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rooms-list', component: RoomsListComponent},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
