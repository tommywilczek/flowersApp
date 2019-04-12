import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateFlowerService } from './create-flower.service';

@Component({
  selector: 'app-create-flower',
  templateUrl: './create-flower.component.html',
  styleUrls: ['./create-flower.component.css'],
  providers: [CreateFlowerService]
})
export class CreateFlowerComponent implements OnInit {

  constructor(private createFlowerService: CreateFlowerService) { }

  ngOnInit() {
  }

  add() {
    this.createFlowerService.addFlower('')
    document.getElementsByTagName('form')[0].reset();
  }

}
