import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateFlowerService {

  constructor(private http: HttpClient) { }

  addFlower(flower) {
    console.log('Attempting to add flower');
    return this.http.post('/api/flowers', {
      name: "Hola from Angular"
    }).subscribe(res => {
      console.log(res);
    });
  }
}
