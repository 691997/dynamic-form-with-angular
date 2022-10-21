


// Form
export interface IDynamicForm {
  id: string;
  label: string;
  sections: IDynamicFormSections[];
}

export interface IDynamicFormSections {
  label: string;
  order: number;
  isVisible: boolean;
  fields: IDynamicFormField[];
}

export interface IDynamicFormField {
  label: string;
  htmlNameProperty: string;
  type: string;                            // checkbox, radio, text, number, datapicker, select, html
  options: string[] | null;
  htmlCode: string;
  style: string;
  validations: string[];
  isVisible: boolean;
  visibleIf: string;                      //"fieldToDependOn:action:value"
  defaultValue: string | number | null;
  order: number;
  result?: any;
  resultObjectArray?: any;
  children: IDynamicFormField[];
}


export interface IDialogResult {
  label: string;
  htmlNameProperty: string;
  result: any;
}

// =========== [RESULTS] ===========

export interface IDynamicFormResult {
  id: string | null;
  label: string;
  formId: string;
  visitId: string;
  createdBy?: string;
  creationDate?: string;
  sections: IDynamicFormSections[];
}


// ---------------------------------------------------------------------------------------------------

export enum Types {
  text = 'text',
  number = 'number',
  checkbox = 'checkbox',
  checkboxGroup = 'checkbox group',                       // Not A Input Type
  radio = 'radio',
  radioGroup = 'radio Group',                             // Not A Input Type
  date = 'datapicker',                                    // The Correct HTML Element Typt is 'time'
  time = 'datapicker',                                    // The Correct HTML Element Typt is 'date'
  datetime = 'datapicker',                                // The Correct HTML Element Typt is 'datetime-local'
  select = 'select',                                      // Not A Input Type
  html = 'html',                                          // Not A Input Type
  dialog = 'dialog button',                               // Not A Input Type
  section = 'section',                                    // Not A Input Type
}

 export interface IFieldDialogData {
  label: string,
  type: string,
  options?: string[],
  section?: ISectionLookup,
  description?: string,
  img?: string,
 }

 export interface ISectionLookup {
  label: string,
  index: number,
 }

// ---------------------------------------------------------------------------------------------------

// {
//   "id": "61f761500b03084d69c00681",
//   "label": "form 1",
//   "sections": [
//     {
//       "label": "form section 1",
//       "order": 0,
//       "isVisible": true,
//       "fields": [
//         {
//           "label": "radio field 1",
//           "htmlNameProperty": "field-1",
//           "type": "radio",
//           "options": ["option1", "option2", "option3", "other"],
//           "validations": ["required"],
//           "isVisible": true,
//           "defaultValue": "option1",
//           "order": 3,
//           "result": null,
//           "resultObjectArray": null,
//           "children": [
//                        {
//                          "label": "text nested field 1.1",
//                          "htmlNameProperty": "nested-field-1_1",
//                          "type": "text",
//                          "options": null,
//                          "validations": [],
//                          "isVisible": true,
//                          "visibleIf": "field-1:selected:other",
//                          "defaultValue": "",
//                          "order": 0,
//                          "result": null,
//                          "resultObjectArray": null,
//                          "children": []
//                        }
//                      ]
//         },
//         {
//           "label": "checkbox field 2",
//           "htmlNameProperty": "field-2",
//           "type": "checkbox",
//           "options": ["option1", "option2", "option3", "option3"],
//           "validations": [],
//           "isVisible": true,
//           "defaultValue": "option1",
//           "order": 1,
//           "result": null,
//           "resultObjectArray": null,
//           "children": [
//             {
//               "label": "text nested field 2.1",
//               "htmlNameProperty": "nested-field-2_1",
//               "type": "text",
//               "options": null,
//               "validations": [],
//               "isVisible": true,
//               "visibleIf": "field-2:selected:option2",
//               "defaultValue": "",
//               "order": 0,
//               "result": null,
//               "resultObjectArray": null,
//               "children": []
//             }
//           ]
//         },
//         {
//           "label": "html Code 1",
//           "htmlNameProperty": "htmlCode1",
//           "type": "html",
//           "style": "color: red",
//           "htmlCode": "<div style=\"margin: 50px;\"> Hello div </div>"
//         },
//         {
//           "label": "select field 6",
//           "htmlNameProperty": "field-6",
//           "type": "select",
//           "options": [
//             "option1",
//             "option2",
//             "option3",
//             "option3"
//           ],
//           "validations": [],
//           "isVisible": true,
//           "defaultValue": "option1",
//           "order": 1,
//           "result": null,
//           "resultObjectArray": null,
//           "children": []
//         },
//         {
//           "label": "text field 3",
//           "htmlNameProperty": "field-3",
//           "type": "text",
//           "options": null,
//           "validations":["required"],
//           "isVisible": true,
//           "defaultValue": "default text",
//           "order": 2,
//           "result": null,
//           "resultObjectArray": null,
//           "children": []
//         },
//         {
//           "label": "number field 4",
//           "htmlNameProperty": "field-4",
//           "type": "number",
//           "options": null,
//           "validations": ["required"],
//           "isVisible": true,
//           "defaultValue": "12",
//           "order": 0,
//           "result": null,
//           "resultObjectArray": null,
//           "children": []
//         },
//         {
//           "label": "datepicker field 5",
//           "htmlNameProperty": "field-5",
//           "type": "datepicker",
//           "options": null,
//           "validations": ["required"],
//           "isVisible": true,
//           "defaultValue": "Mon Jan 24 2022 14:54:26 GMT+0200",
//           "order": 5,
//           "result": null,
//           "resultObjectArray": null,
//           "children": []
//         }
//       ]
//     }
//   ]
// }
