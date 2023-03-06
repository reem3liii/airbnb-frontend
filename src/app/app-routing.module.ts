import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { PlaceListComponent } from './Components/place/place-list/place-list.component';

const routes: Routes = [
  {path:"",component:PlaceListComponent},
  {path:"places",component:PlaceListComponent},
  {path:"**",component:ErrorComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
