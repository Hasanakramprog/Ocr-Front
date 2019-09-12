import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {


  public API_ENDPOINT;

  constructor() {
    this.API_ENDPOINT = 'http://127.0.0.1:5000/';
  }
}
