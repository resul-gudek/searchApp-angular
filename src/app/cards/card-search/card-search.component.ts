import { Component} from '@angular/core';
import { Card } from 'src/app/models/card';
import { SearchService } from 'src/app/services/search.service';



@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent  {

  constructor(public searchService :SearchService) { }

  search(searchText: string):void{
  searchText = searchText.toLowerCase();
    this.searchService.filteredCards = this.searchService.cards.filter((card : Card)=>{
           return card.company.name.toLowerCase().indexOf(searchText) > -1 
           || card.email.toLowerCase().indexOf(searchText) > -1 ||
             card.address.city.toLowerCase().indexOf(searchText) > -1;
    })
  
    
  }
 

}
