import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDynamicForm, IDynamicFormField, IDynamicFormSections, Types, ISectionLookup, IFieldDialogData } from 'src/app/interfaces/dynamic-form';
import { GetLabelDialogComponent } from '../get-label-dialog/get-label-dialog.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {
// ------------------------------------- Froperties -------------------------------------

  fieldsReference: IDynamicFormField = <IDynamicFormField>{};
  formSections: IDynamicFormSections[] = [{ label: 'section 1', order: 1, isVisible: true, fields: [] }];     // Default Section
  sectionsLookup: ISectionLookup[] = [];
  Types = Types;

  // --- Field Details ---
  fieldProperties!: IDynamicFormField;
  sectionIndex?: number;
  fieldIndex?: number;
// --------------------------------------------------------------------------------------

  constructor( private dialog: MatDialog ) { }

  ngOnInit() {
    this.updateSectionLookup();
  }

// -------------------------------------- Functions -------------------------------------

  save() {
    const title = 'Form Name';
    const sections =  this.sectionsLookup;
    const dialogRef = this.dialog.open(GetLabelDialogComponent, { data: {title, sections} });

    dialogRef.afterClosed().subscribe((data: IFieldDialogData) => {
      if(data) {
        const sections = this.formSections.map((section, sIndex) => ({ ...section ,
                                                                       order: sIndex + 1,
                                                                       fields: section.fields.map((field, fIndex) => ({ ...field, order: fIndex + 1 })),
                                                                    }));

        const formObject: IDynamicForm = {id: '', label: data.label , sections };        // Will Post to APi
        console.log(formObject)
      }
    })
  }

  getNewElement( field: IFieldDialogData ) {
    const sectionElement = field.type == Types.section;
    sectionElement ? this.createNewSection(field.label) : this.createNewField(field);
  }

  createNewSection( sectionLabel: string) {
    const label = sectionLabel || `section ${this.formSections.length + 1}`;
    const newSection: IDynamicFormSections = {label , order: 0, isVisible: true, fields: []};
    this.formSections.push(newSection);
    this.updateSectionLookup();
  }

  createNewField( field: IFieldDialogData ) {
    const newField: IDynamicFormField = ({ ...this.fieldsReference,
                                            label: field.label,
                                            type: field.type,
                                            isVisible: true,
                                            htmlNameProperty: this.convertLabel(field.label),
                                          });

    this.formSections.map((section, index) => {
      (index === field.section?.index) && (section.fields.push(newField));
    })
  }

  deleteSection( sectionIndex: number ) {
    this.formSections = this.formSections.filter(( _, index) => index !== sectionIndex)
  }

  deleteField( sectionIndex: number, fieldIndex: number ) {
    this.formSections[sectionIndex].fields = this.formSections[sectionIndex].fields
                                             .filter(( _, index) => index !== fieldIndex );
    this.sendFieldDetails(<IDynamicFormField>{}, fieldIndex, sectionIndex);
  }

  sectionVisibility( sectionIndex: number ) {
    const visibility = this.formSections[sectionIndex].isVisible;
    this.formSections[sectionIndex].isVisible = !visibility;
  }

  fieldVisibility( field: IDynamicFormField, fieldIndex: number, sectionIndex: number ) {
    const visibility = this.formSections[sectionIndex].fields[fieldIndex].isVisible;
    this.formSections[sectionIndex].fields[fieldIndex].isVisible = !visibility;
    this.sendFieldDetails({...field, isVisible: !visibility }, fieldIndex, sectionIndex);
  }

  addOptions( field: IDynamicFormField, fieldIndex: number, sectionIndex: number ) {
    const options = this.formSections[sectionIndex].fields[fieldIndex].options;
    const title = 'add options';
    const isOption = true;
    const dialogRef = this.dialog.open(GetLabelDialogComponent, {data: {title, options, isOption, sections: {}}});

    dialogRef.afterClosed().subscribe(data => {
      if(data) {
        this.formSections[sectionIndex].fields[fieldIndex].options = data.options ;
        data.withOtherOption && this._addFieldChildren( field, fieldIndex, sectionIndex );
        this.sendFieldDetails({...field, options: data.options }, fieldIndex, sectionIndex);
      }
    })
  }

  _addFieldChildren( field: IDynamicFormField, fieldIndex: number, sectionIndex: number ) {
    const label = `other ${field.label}`;
    const type = 'text';
    const isVisible = true;
    const htmlNameProperty = this.convertLabel(label);
    const visibleIf = `${htmlNameProperty}:selected:other`;
    const chiledField = { ...this.fieldsReference, label, type, isVisible, htmlNameProperty, visibleIf };
    this.formSections[sectionIndex].fields[fieldIndex].children = [chiledField];
  }

  updateSectionLookup() {
    this.sectionsLookup = this.formSections.map((item, index) => ({index , label: item.label}));
  }

  getFieldStyle( field: any ) {
    this.formSections[field.sectionIndex].fields[field.fieldIndex].style = field.style;
  }

  sendFieldDetails( field: IDynamicFormField, fieldIndex: number, sectionIndex: number ) {
    this.fieldProperties = field;
    this.fieldIndex = fieldIndex;
    this.sectionIndex = sectionIndex;
  }

  convertLabel(label: string) {
    const item = label.trim().replace(/\s+/g,'-').replace('.','_').toLowerCase();
    return item;
  }

  dragAndDrop( event: CdkDragDrop<IDynamicFormField[]> ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
