import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsRoutingModule } from './components/components.routing.module';
import { PagesRoutingModule } from './pages/pages.routing.module';
import { AuthRoutingModule } from './auth/auth.routing.module';

const routes: Routes = [
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },

  {
    path: 'pages',loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  // Otras rutas de tu aplicación si las tienes

  // Ruta por defecto o redireccionamiento si se requiere
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }, // Redireccionar a dashboard en caso de rutas no encontradas
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComponentsRoutingModule,
    PagesRoutingModule,
    AuthRoutingModule

  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
