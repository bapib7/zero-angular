import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private config:ConfigService,private http:HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  }; 
  
   postx(url,data)
   {
     return this.http.post(this.config.baseurl+url,data,this.httpOptions);
   }
   getx(url)
   {
    return this.http.get(this.config.baseurl+url);
   }
   delx(url)
   {
    return this.http.delete(this.config.baseurl+url);
   }
   putx(url,data)
   {
    return this.http.put(this.config.baseurl+url,data,this.httpOptions);
   }

}
