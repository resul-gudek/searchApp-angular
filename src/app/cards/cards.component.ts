import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  currentCard! : Card;
  constructor(public searchService:SearchService) { }

  ngOnInit(): void {
    this.searchService.getCards();
  }
  
  
}
