import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  results: object;
  searchTerm$ = new Subject<any>();

  constructor(private searchService: SearchService) {
    console.log('%c AppComponent', 'color: green; font-weight: bold');
    this.searchTerm$.subscribe(inputData => {
      console.log('=> searchTerm$ inputData: ', inputData);
    });
    this.searchService.search(this.searchTerm$).subscribe(results => {
      const resArr=[];
      Object.keys(results).forEach(value=>{
        console.log('ari val ', results[value]);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const count = Object.values(results[value]).reduce(reducer);
        resArr.push(`${count} in ${value}`);
      });
      console.log('aritra logs ', resArr);
      this.results = [...resArr];
      // this.results = results;
      console.log('%c AppComponent', 'color: green; font-weight: bold');
      console.log('=> results: ', this.results);
    });
  }

}
