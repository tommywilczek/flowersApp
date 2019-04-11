import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateFlowerService {

  constructor() { }

  addFlower(flower) {
    console.log(flower);
  }

}
