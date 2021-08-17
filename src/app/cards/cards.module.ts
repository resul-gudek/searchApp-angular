import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { ResultComponent } from './result/result.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardSearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    NgxPaginationModule
  ]
})
export class CardsModule { }
