import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  card!: Card;
  constructor(public searchService: SearchService) { }
  totalLength: any;
  page: number = 1;
  ngOnInit(): void {
    this.searchService.resultCards;
   

  }

}
