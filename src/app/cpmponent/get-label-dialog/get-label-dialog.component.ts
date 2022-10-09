import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFieldDialogData, ISectionLookup, Types } from 'src/app/interfaces/dynamic-form';

interface IDialogData {
  title: string ,
  inputLabel: string,
  fieldType: Types,
  sections: ISectionLookup[],
  withSections?: boolean,
  isOption?: boolean,
  options: string[],
}

@Component({
  selector: 'app-get-label-dialog',
  templateUrl: './get-label-dialog.component.html',
  styleUrls: ['./get-label-dialog.component.scss']
})

export class GetLabelDialogComponent implements OnInit {
// ------------------------------------- properties -------------------------------------

  fieldData: IFieldDialogData = <IFieldDialogData>{};
  options: string[] = [] ;
  option: string = '';
  Types = Types;

// --------------------------------------------------------------------------------------

  constructor(  @Inject(MAT_DIALOG_DATA) public data: IDialogData,
                private dialoRef: MatDialogRef<GetLabelDialogComponent>
             ) {
                  this.dialoRef.addPanelClass('dialog-class');
                }

  ngOnInit() {
    this.fieldData = { label: '', section: this.data.sections[0], type: this.data!.fieldType };
    this.options = this.data.options || [];
  }

// -------------------------------------- Functions -------------------------------------

  addOption() {
    this.options.push(this.option);
    this.option = '';
    this.updateOptions();
  }

  deleteOption( optionIndex: number ) {
    this.options = this.options.filter((_, index) => optionIndex !== index);
    this.updateOptions();
  }

  updateOptions() {
    this.fieldData = { ...this.fieldData, options: this.options };
  }
}
