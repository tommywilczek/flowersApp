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
      console.log('this.flowers = ', this.flowers);
    })
  }

  deleteFlower(flower) {
    this.showFlowersService.deleteFlower(flower).subscribe(res => {
      console.log('deleted:', flower);
      this.getAllFlowers();
    });
  }

  createDisplayFlowers(flowers) {
    this.displayFlowers.push();
    flowers.forEach(function(flower) {
      this.convertToDisplayFlower(flower);
    })
  }

  convertToDisplayFlower(flowers) {
    console.log(flowers);
    Object.keys(flowers).forEach(function(index) {
      let tempOptionsArray = [];
      Object.keys(flowers[index]).forEach(function(fieldName) {
        if (fieldName === 'extraFields') {
          Object.keys(flowers[index][fieldName]).forEach(function(extraFieldName) {
            console.table('Key : ' + extraFieldName + ', Value : ' + flowers[index][fieldName][extraFieldName]);
            tempOptionsArray.push({key: extraFieldName,  value: flowers[index][fieldName][extraFieldName]},);
          });
        } else {
          console.table('Key : ' + fieldName + ', Value : ' + flowers[index][fieldName]);
          tempOptionsArray.push({key: fieldName,  value: flowers[index][fieldName]},);
        }
      });
      let myDisplayFlower = (
        new DisplayFlower({
          options: tempOptionsArray
        })
      );
    console.log('DISPLAY', myDisplayFlower);
    return myDisplayFlower;
  });

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

}
