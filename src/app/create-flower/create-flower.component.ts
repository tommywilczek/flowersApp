import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldBase } from "../dynamic-fields/field-base";
import { CreateFlowerService } from './create-flower.service';
import { FieldControlService } from '../dynamic-fields/field-control.service';
import { FieldServiceService } from '../dynamic-fields/field-service.service';

@Component({
  selector: 'app-create-flower',
  templateUrl: './create-flower.component.html',
  styleUrls: ['./create-flower.component.css'],
  providers: [CreateFlowerService, FieldControlService, FieldServiceService]
})
export class CreateFlowerComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private createFlowerService: CreateFlowerService, private fieldControlService: FieldControlService, service: FieldServiceService) {
    this.fields = service.getFields();
   }

  ngOnInit() {
    this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.createFlowerService.addFlower('')
    document.getElementsByTagName('form')[0].reset();
  }

  add() {

  }

}
