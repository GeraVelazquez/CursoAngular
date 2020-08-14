import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';
import { AutoComponent } from '../autos/components/auto/auto.component';
import { AutosComponent } from './components/autos/autos.component';

@NgModule({
  declarations: [AutosComponent, AutoComponent],
  imports: [CommonModule, AutosRoutingModule],
})
export class AutosModule {}
