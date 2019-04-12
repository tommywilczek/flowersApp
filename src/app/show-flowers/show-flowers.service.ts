import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowFlowersService {

  constructor(private http: HttpClient) { }

  getAllFlowers() {
    return this.http.get('/api/flowers');
    }
  
  deleteFlower(flower) {
    return this.http.delete('/api/flowers/' + flower._id);
  }

}
