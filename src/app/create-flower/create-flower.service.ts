import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateFlowerService {

  constructor(private http: HttpClient) { }

  addFlower(flower) {
    const name = flower.name;
    const price = flower.price;
    const extraFields = this.codifyFlower(flower);
    console.log('price:', price);
    console.log('Attempting to add flower,', flower);
    return this.http.post('/api/flowers', {
      name, price, extraFields
    }).subscribe(res => {
      console.log(res);
    });
  }

  codifyFlower(flower) {
    delete flower.name;
    delete flower.price;
    return flower;
  }
}
