import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { FieldBase } from "../field-base";

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
