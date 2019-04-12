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
        label: 'DYNAMIC Flower Name',
        order: 1
      }),
      new FieldTextbox({
        key: 'price',
        label: 'DYNAMIC Flower Price',
        order: 2
      }),
      new FieldDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
