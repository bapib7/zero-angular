import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  baseurl="https://zero-node.herokuapp.com/";
  //baseurl="http://localhost:3000/";
}
