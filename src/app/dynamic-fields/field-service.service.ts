import { Injectable } from '@angular/core';

import { FieldBase } from "./field-base";
import { FieldTextbox } from "./field-textbox";
import { FieldDropdown } from "./field-dropdown";

@Injectable({
  providedIn: 'root'
})
export class FieldServiceService {

  getFields() {
    let fields: FieldBase<any>[] = [
      new FieldTextbox({
        key: 'name',
        label: 'Flower Name',
        required:true,
        order: 1
      }),
      new FieldTextbox({
        key: 'price',
        label: 'Flower Price',
        order: 2
      }),
      // new FieldDropdown({
      //   key: 'smell',
      //   label: 'Smell',
      //   options: [
      //     {key: 'sweet',  value: 'Sweet'},
      //     {key: 'floral',  value: 'Floral'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'bad', value: 'Bad'}
      //   ],
      //   order: 3
      // }),
      // new FieldTextbox({
      //   key: 'height',
      //   label: 'Height',
      //   order: 4
      // }),
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
