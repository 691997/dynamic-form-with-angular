import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFieldDialogData, ISectionLookup, Types } from 'src/app/interfaces/dynamic-form';
import { fildesMenuArray,  } from 'src/assets/fields-mnue/fields-mnue';  //IDynamicFormMainFields
import { GetLabelDialogComponent } from '../get-label-dialog/get-label-dialog.component';

@Component({
  selector: 'app-fields-generator-list',
  templateUrl: './fields-generator-list.component.html',
  styleUrls: ['./fields-generator-list.component.scss']
})

export class FieldsGeneratorListComponent implements OnInit {
// ------------------------------------- properties -------------------------------------

  @Input() set sectionsLookup (data: ISectionLookup[]) {
    this._sectionsLookup = data;
  };
  @Output() newElement: EventEmitter<any> = new EventEmitter();

  _sectionsLookup: ISectionLookup[] = [];
  mainFieldsMnue!: IFieldDialogData[];

// --------------------------------------------------------------------------------------

  constructor( private dialog: MatDialog ) { }

  ngOnInit() {
    this.mainFieldsMnue = fildesMenuArray;
  }
// -------------------------------------- Functions -------------------------------------

  generateField(field: IFieldDialogData ) {
    const fieldType = field.type;
    const title = ( fieldType == Types.html ? 'Create new " HTML Element "' :
                    fieldType == Types.section ? 'Create new " Section "' :
                    fieldType == Types.dialog ? 'Create new " Button "' :
                    `Create new " ${field.label} " field`
                  );
    const withSections = true;
    const inputLabel = (fieldType == Types.html ? 'HTML Element' : 'Name');

    const dialogRef = this.dialog.open(GetLabelDialogComponent, { data: {title, inputLabel, fieldType, withSections, sections: this._sectionsLookup} });
    dialogRef.afterClosed().subscribe( data => {
      if(data) {
        const newElement = { ...field, ...data };
        this.newElement.emit( newElement );
      }
    })
  }
}
