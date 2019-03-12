import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindRoomWindowComponent } from './find-room-window/find-room-window.component';
import { FindRoomFormComponent } from './find-room-form/find-room-form.component';
import { NewContractWindowComponent } from './new-contract-window/new-contract-window.component';


const routes: Routes = [
  { path: '', component: FindRoomWindowComponent },
  { path: 'new', component: NewContractWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
