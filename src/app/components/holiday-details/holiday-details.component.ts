import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolidaysService } from '../../services/holidays.service';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
 id: number;
  private sub: any;
  result:{};
  holder: Array<any> = [];
  consolidated: Array<string> = [];
  singleData;
  constructor(private holidayservice: HolidaysService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
    });

    //console.log(this.id);
    this.holidayservice.getallHolidays().subscribe(data => {
      this.result = data.holidays;

       for (var p in this.result) {
          if( this.result.hasOwnProperty(p) ) {
                this.holder.push(this.result[p]);
          } 
        }
        this.consolidated = this.holder.reduce(function(a,b){
          return a.concat(b);
        });
        this.singleData = this.consolidated[this.id];
        console.log(this.singleData);
    })
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  backtoList() {
    this.router.navigate(['']);
  }

}
