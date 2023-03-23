import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/table-component',
  pathMatch: 'full'
},
  { path: 'table-component', component: TableComponent },
  { path: 'table-component/detail', component: DetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
