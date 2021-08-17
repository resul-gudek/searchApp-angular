import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';




@Injectable({
  providedIn: 'root'
})
export class SearchService {

  cards!: Card[];
  filteredCards!: Card[];
  resultCards!:Card[]
  
  private _url: string = "https://jsonplaceholder.typicode.com/users"


  constructor(private http: HttpClient) { }

  getCards(): void {
    this.http.get<Card[]>(this._url)
      .subscribe((res: Card[]) => {
        this.cards = this.filteredCards = res;
      });


  }
  


}