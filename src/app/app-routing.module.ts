import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'segunda', loadChildren: './pages/segunda/segunda.module#SegundaPageModule' },
  { path: 'segunda/:id', loadChildren: './pages/segunda/segunda.module#SegundaPageModule' },
  //{ path: 'segunda/:nombre/:apellido/:email/:fecha/:gender/:respuesta1/:respuesta2/:respuesta3/:respuesta4/:respuesta5', loadChildren: './pages/segunda/segunda.module#SegundaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
