import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import  {Cases} from '../../interface/cases'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  totalCases:number;
  activeCases:number;
  totalDeaths:number;
  totalRecovered:number
  apiData:any=[];
  ngOnInit(): void {

    this.http.get('https://api.covidindiatracker.com/total.json').subscribe(re=>{
      console.log(re);
      this.apiData=re
      this.totalCases=this.apiData.confirmed
      this.activeCases=this.apiData.active
      this.totalDeaths=this.apiData.deaths
      this.totalRecovered=this.apiData.recovered
    })
  }

}
