import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario/calendario.component';
import { FormularioTareasComponent } from './formulario-tareas/formulario-tareas.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ModalComponent } from './modal/modal.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { ComponentsComponent } from './components.component';



@NgModule({
  declarations: [
    CalendarioComponent,
    FormularioTareasComponent,
    ListaTareasComponent,
    ModalComponent,
ComponentsComponent
  ],
  imports: [
    CommonModule, ComponentsRoutingModule
  ],
  exports: [
    FormularioTareasComponent,
    ListaTareasComponent,
    ModalComponent,
    CalendarioComponent,
    ComponentsComponent


  ]
})
export class ComponentsModule { }
