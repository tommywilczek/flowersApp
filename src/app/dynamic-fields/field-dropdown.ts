import { FieldBase } from "./field-base";

export class FieldDropdown extends FieldBase<string>{
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];
  
    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }
}
