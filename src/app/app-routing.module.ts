import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.AlertPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then( m => m.ClimaPageModule),
    canActivate: [AutorizadoGuard]
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
