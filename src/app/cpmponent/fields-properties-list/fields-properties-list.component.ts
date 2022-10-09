import { Component, OnInit, Input } from '@angular/core';
import { IDynamicFormField, Types } from 'src/app/interfaces/dynamic-form';

@Component({
  selector: 'app-fields-properties-list',
  templateUrl: './fields-properties-list.component.html',
  styleUrls: ['./fields-properties-list.component.scss']
})

export class FieldsPropertiesListComponent implements OnInit {
// ------------------------------------- Froperties -------------------------------------

  @Input() itemProperties?: IDynamicFormField;
  Types = Types;

// --------------------------------------------------------------------------------------

  constructor() { }

  ngOnInit() {
  }

// -------------------------------------- Functions -------------------------------------

}
