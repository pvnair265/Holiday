import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HolidaysService {
  private baseUrl = 'https://holidayapi.com/v1/holidays?key=9b3ca7c7-87d1-4993-af35-071fb6e8e819&country=US&year=2015&pretty=true';
  constructor(private http: Http) {}

  getallHolidays() {
     return this.http
     .get(this.baseUrl)
     .map((res:Response)=>res.json()||[]);
  }

}
