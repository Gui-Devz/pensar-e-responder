import { NgModule } from '@angular/core';
import { SecondPageComponent } from './second-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';

@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent],
  imports: [PagesRoutingModule, CommonModule],
})
export class PagesModule {}
