import { IFieldDialogData, Types } from "src/app/interfaces/dynamic-form";


export const fildesMenuArray: IFieldDialogData[] = [
  { label: 'text'          , type: Types.text     , img: 'assets/imgs/name.png'     , description: "Used to receive text data" },
  { label: 'number'        , type: Types.number   , img: 'assets/imgs/num.png'      , description: "Used to receive numeric data" },
  { label: 'date'          , type: Types.date     , img: 'assets/imgs/date.png'     , description: "Used to select a specific date" },
  { label: 'time'          , type: Types.time     , img: 'assets/imgs/time.png'     , description: "Used to select a specific time" },
  { label: 'date and time' , type: Types.datetime , img: 'assets/imgs/date-time.png', description: "Used to select both date and time together" },
  { label: 'checkbox'      , type: Types.checkbox , img: 'assets/imgs/check.png'    , description: "Used to select many of items" },
  { label: 'radio'         , type: Types.radio    , img: 'assets/imgs/radio.png'    , description: "Used to select just one item using values ( Yes / No )" },
  { label: 'drop down'     , type: Types.select   , img: 'assets/imgs/drop.png'     , description: "Used to select a single value from a drop-down list of values" },
  { label: 'html'          , type: Types.html     , img: 'assets/imgs/html.png'     , description: "Used to create an HTML element" },
  { label: 'dialog button' , type: Types.dialog   , img: 'assets/imgs/popup.png'    , description: "Used to open a dialog containing a specific form" },
  { label: 'add Section'   , type: Types.section  , img: 'assets/imgs/section.png'  , description: "Used to create an new section as a group of fields" },
];

// const mainValidators   = ['required', 'read only', 'minimum characters', 'maximum characters'];
// const thirdValidators  = ['required', 'read only'];
// const fourthValidators = ['required'];
