import { Field } from './Field';

export class Template {
  Name = '';
  Fields: Field[];
  // @ts-ignore
  constructor() {
  }
  // @ts-ignore
  constructor(Name: string) {
    this.Name = Name;
  }
}


