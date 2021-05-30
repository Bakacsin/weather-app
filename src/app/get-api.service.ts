import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }
  
  apiCall(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=5faf5aa8c0c1cf068892095434e387d7');
  }

}
