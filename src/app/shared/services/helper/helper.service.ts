import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { _DoesControlHasError, _MatchPassword } from '../../../core/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements _DoesControlHasError, _MatchPassword {

  constructor() { }

  matchPassword(form: FormGroup): boolean {
    return form.get('password')!.value === form.get("confirm_password")!.value ? true : false;
  }

  doesControlHasError(form: FormGroup, controlName: string): boolean {
    return (form.get(controlName)!.invalid &&
      form.get(controlName)!.errors &&
      (form.get(controlName)!.dirty || form.get(controlName)!.touched)) || false;
  }
}
