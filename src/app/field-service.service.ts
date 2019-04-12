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
      })
    ];

    return fields.sort((a, b) => a.order - b.order);
  }
}
