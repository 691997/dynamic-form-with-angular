import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './cpmponent/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { GetLabelDialogComponent } from './cpmponent/get-label-dialog/get-label-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FieldsGeneratorListComponent } from './cpmponent/fields-generator-list/fields-generator-list.component';
import { FieldsPropertiesListComponent } from './cpmponent/fields-properties-list/fields-properties-list.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    GetLabelDialogComponent,
    FieldsGeneratorListComponent,
    FieldsPropertiesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
