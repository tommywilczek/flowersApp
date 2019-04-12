import { Component, OnInit } from '@angular/core';
import { ShowFlowersService } from './show-flowers.service';
import { async } from '@angular/core/testing';
import { DisplayFlower } from './display-flower';

@Component({
  selector: 'app-show-flowers',
  templateUrl: './show-flowers.component.html',
  styleUrls: ['./show-flowers.component.css'],
  providers: [ ShowFlowersService ]
})
export class ShowFlowersComponent implements OnInit {

  public flowers: any[];

  public displayFlower: DisplayFlower;

  public displayFlowers: any[];

  constructor(private showFlowersService: ShowFlowersService) { }

  ngOnInit() {
    this.getAllFlowers();
    
  }

  getAllFlowers() {
    this.showFlowersService.getAllFlowers().subscribe(res => {
      this.flowers = res;
      this.createDisplayFlowers(this.flowers);
    })
  }

  deleteFlower(flower) {
    console.log('deleting: ', flower.options);
    const flowerId = this.searchForId(flower.options);
    console.log('ID to send to delete API:', flowerId);
    this.showFlowersService.deleteFlower(flowerId).subscribe(res => {
      console.log('deleted:', flower);
      this.getAllFlowers();
    });
  }

  searchForId(flower) {
    let flowerId = ''
    Object.keys(flower).forEach(function(place) {
      Object.keys(flower[place]).forEach(function(fieldName, index) {
        console.log(flower[place][fieldName]);
        if (flower[place][fieldName] === '_id') {
          console.log('id to delete:', flower[place].value);
          flowerId = flower[place].value
        }
      })
    });
    return flowerId;
  }

  createDisplayFlowers(flowers) {
    let tempDisplayFlowers = [];
    for (var flower in flowers) {
      console.log(flowers[flower]);
      tempDisplayFlowers.push(this.convertToDisplayFlower(flowers[flower]));
    }
    this.displayFlowers = tempDisplayFlowers;
    console.log('DISPLAYFLLLLRRSS', this.displayFlowers);

  }

  convertToDisplayFlower(flower) {
    console.log(flower);
    let tempOptionsArray = [];
    Object.keys(flower).forEach(function(fieldName) {
      if (fieldName === '__v') {return;}
      if (fieldName === 'extraFields') {
        Object.keys(flower[fieldName]).forEach(function(extraFieldName) {
          console.table('Key : ' + extraFieldName + ', Value : ' + flower[fieldName][extraFieldName]);
          tempOptionsArray.push({key: extraFieldName,  value: flower[fieldName][extraFieldName]},);
        });
      } else {
        console.table('Key : ' + fieldName + ', Value : ' + flower[fieldName]);
        tempOptionsArray.push({key: fieldName,  value: flower[fieldName]},);
      }
    });
    let myDisplayFlower = (
      new DisplayFlower({
        options: tempOptionsArray
      })
    );
  console.log('DISPLAY', myDisplayFlower);
  return myDisplayFlower;


}

    // for (var index in flowers) {
    //   if (flowers.hasOwnProperty(index)) {
    //     console.log(flowers[index]);
    //     for(var jsonKey in flowers[index]) {
    //       if (jsonKey === 'extraFields') {
    //         for (var extraFieldsKey in flowers[jsonKey]) {
    //           console.log('extraFieldsKey: ', flowers[jsonKey][extraFieldsKey]);
    //         }
    //         console.log(flowers[jsonKey]);
    //       }
    //       console.log(jsonKey);
    //     }
    //   }

    // }

}
