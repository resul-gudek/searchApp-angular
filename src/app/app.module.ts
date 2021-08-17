import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchService } from './services/search.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
