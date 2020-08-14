import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasDetailComponent } from './components/marcas-detail/marcas-detail.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { MarcaRoutingModule } from './marcas-routing.module';

@NgModule({
  declarations: [MarcasDetailComponent, MarcaComponent, MarcasComponent],
  imports: [CommonModule, MarcaRoutingModule],
})
export class MarcasModule {}
