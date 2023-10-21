import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page.component';
import { FirstPageComponent } from './first-page.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
  },
  {
    path: 'page02',
    component: SecondPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
