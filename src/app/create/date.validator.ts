import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const dateValidator = (
  matchFrom: string,
  matchTo: string
): ValidatorFn => {
  return (form: AbstractControl): ValidationErrors | null => {
    const controlFrom = form.get(matchFrom);
    const controlTo = form.get(matchTo);

    return !!controlFrom && !!controlTo && controlFrom.value < controlTo.value
      ? null
      : { matching: true };
  };
};
