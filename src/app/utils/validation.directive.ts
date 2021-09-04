import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export const checkMatchPassword = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent || !control.parent.value) return { isMatchPassword: false }
    const isMatch = control.value === control.parent.get('password').value;
    return isMatch ? null : {isMatchPassword: {value: control.value}};
  };
}