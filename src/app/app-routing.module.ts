import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './cards/result/result.component';




const routes: Routes = [
  {
    path: 'result' , component: ResultComponent
  },
  { path: '', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
