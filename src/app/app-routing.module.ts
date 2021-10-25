import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('../app/features/home/home.module').then(m => m.HomeModule)},
  {path: 'home', redirectTo: '' , pathMatch: 'full'},
  {path: 'cars', loadChildren:()=> import('../app/features/cars/cars.module').then(m => m.CarsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
