import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.scss'],
})
export class StateWiseComponent implements OnInit {
  constructor(private http: HttpClient) {}

  apiData:any[];
  stateName:string[] =[];
  stateData:any=[]
  ngOnInit(): void {
    this.http
      .get('https://api.covidindiatracker.com/state_data.json')
      .subscribe((re) => {
          console.log(re);
        this.apiData===re;

        // this.apiData.map(data=>{
        //   // console.log(data);
        //   this.stateName.push(data.state);
        //   this.stateData=data;
        // })

      });
      // console.log(this.stateName);
        console.log(this.apiData);

  }

  updateValues(country:string){
      console.log(country);

  }

}
