import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ComponentsComponent } from './components.component';



const routes: Routes = [
  {
    path: 'components', component: ComponentsComponent, children: [
      { path: '', component: ComponentsComponent},
      { path: 'calendario', component: CalendarioComponent },
      { path: 'tareas', component: ListaTareasComponent },
      // Otras rutas de tu aplicación
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
