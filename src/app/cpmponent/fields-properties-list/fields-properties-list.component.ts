import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDynamicFormField, Types } from 'src/app/interfaces/dynamic-form';

@Component({
  selector: 'app-fields-properties-list',
  templateUrl: './fields-properties-list.component.html',
  styleUrls: ['./fields-properties-list.component.scss']
})

export class FieldsPropertiesListComponent implements OnInit {
// ------------------------------------- Froperties -------------------------------------

  @Input() fieldIndex?: number;
  @Input() sectionIndex?: number;
  @Input() set fieldProperties( field: IDynamicFormField) {
    this.field = field;
    this.style = field?.style ? this.convertStyleToObject(field?.style)
                              : {color: '#000000', bgColor:'#ffffff', fontSize: 16};
  };

  @Output() fieldStyles: EventEmitter<any> = new EventEmitter<any>();

  field?: IDynamicFormField;
  Types = Types;
  style: any;
  colors = ['#ffffff','#eeeeee', '#dddddd', '#aaaaaa', '#005e7d', '#f0681c', '#ff0000', '#6495ed', '#3b829a', '#000000'];
  fontSizes = Array.from({ length: 30 }, (_, i)=> i+1 ).filter(size => size >= 14 );

// --------------------------------------------------------------------------------------

  constructor() { }

  ngOnInit() {
  }

// -------------------------------------- Functions -------------------------------------

  convertStyleToObject( style: any ) {
    if( style ) {
      const values = style.replaceAll(':', '').replaceAll(';', '').replaceAll('px', '').split(' ');
      const styles = { color: values[1], bgColor: values[3], fontSize: +values[5] };
      return styles;
    }
    return;
  }

  emitFieldStyle() {
    const style = `color: ${this.style.color}; background-color: ${this.style.bgColor}; font-size: ${this.style.fontSize}px;`;
    const data = {style, sectionIndex: this.sectionIndex , fieldIndex: this.fieldIndex};
    this.fieldStyles.emit(data);
  }
}
