import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFieldDialogData, ISectionLookup, Types } from 'src/app/interfaces/dynamic-form';


//--- this data are sending after closing dialog ---
interface IDialogData {
  title: string ,
  inputLabel: string,
  fieldType: Types,
  sections: ISectionLookup[],
  withSections?: boolean,
  isOption?: boolean,
  options: string[],
  withOtherOption: boolean,
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
  tooltipContent: string = "Add 'Other' option ... By checking this option it will create a new field that takes a user value";

// --------------------------------------------------------------------------------------

  constructor(  @Inject(MAT_DIALOG_DATA) public data: IDialogData,
                private dialoRef: MatDialogRef<GetLabelDialogComponent>
             ) {
                  this.dialoRef.addPanelClass('dialog-class');
                }

  ngOnInit() {
    this.fieldData = { label: '', section: this.data.sections[0], type: this.data!.fieldType, options: this.data.options || [] };
    this.options = this.data.options || [];
  }

// -------------------------------------- Functions -------------------------------------

  addSelectOption() {
    this.options.push(this.option.trim().toLowerCase());
    this.option = '';
    this._updateSelectOptions();
  }

  addOtherOption() {
    this.options.push('other');
    this.fieldData.withOtherOption = true;
    this._updateSelectOptions();
  }

  deleteSelectOption( optionIndex: number ) {
    const optionValue = this.options[optionIndex];
    optionValue === 'other' && (this.fieldData.withOtherOption = false);
    this.options = this.options.filter((_, index) => optionIndex !== index);
    this._updateSelectOptions();
  }

  private _updateSelectOptions() {
    this.fieldData = { ...this.fieldData, options: this.options };
  }
}
