import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import ErrorList from './error.json';

@Injectable({
  providedIn: 'root',
})
export class ErrorFormService {
  private _errorList: { [key: string]: string } = ErrorList;
  constructor() {}

  public getErrorMessage(errors: ValidationErrors): string {
    let errorMessage: string = '';
    for (let key in errors) {
      let errorKey: string = key;
      if (errorKey) {
        errorMessage = this._errorList[errorKey];
      }
    }
    return errorMessage;
  }
}
