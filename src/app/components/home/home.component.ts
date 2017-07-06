import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  result:{};
  holder: Array<any> = [];
  consolidated: Array<string> = [];
  constructor(private holidayservice : HolidaysService){}
  ngOnInit(){
    this.holidayservice.getallHolidays().subscribe(data => {
      this.result = data.holidays;
       for (var p in this.result) {
          if( this.result.hasOwnProperty(p) ) {
                this.holder.push(this.result[p]);
          }
        }

        //flatten array
        this.consolidated = this.holder.reduce(function(a,b){
          return a.concat(b);
        });
    })

  }
}