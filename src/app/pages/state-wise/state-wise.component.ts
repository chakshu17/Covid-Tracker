import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.scss'],
})
export class StateWiseComponent implements OnInit {
  constructor(private http: HttpClient) {}

  apiData: any;
  stateName: string[] = [];
  toatlCases: number[]=[];
  stateData: any = [];
  ngOnInit(): void {
    this.http
      .get('https://api.covidindiatracker.com/state_data.json')
      .subscribe((re) => {
        this.apiData = re;
        console.log('Inside',this.apiData);
        this.apiData.map((data) => {
            //  console.log(data);
             this.stateName.push(data.state);

             this.toatlCases.push(data.confirmed);
             console.log(this.toatlCases);

           });
      });
      console.log('Outside',this.apiData);
    // this.apiData.map((data) => {
    //   //console.log(data);
    //   this.stateName.push(data.state);

    //   this.toatlCases = data.confirmed;
    // });

    // console.log(this.stateName);

  }

  updateValues(country) {
    console.log(country.target.value);

  }
}
