import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAboutUsComponent } from './pages/home-about-us/home-about-us.component';
import { HomeContactsComponent } from './pages/home-contacts/home-contacts.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: HomeAboutUsComponent },
  { path: 'contact', component: HomeContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
