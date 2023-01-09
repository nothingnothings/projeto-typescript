

namespace App {

export interface Validatable {
  value: string | number; //é o 'actual value' de um determinado field.
  // inputField: string;

  required?: boolean; ///são as 'validation properties' de um determinado field (pq um field NÃO PRECISA TER TODAS EM SI... alguns fields podem ter só 'minLength', outros só 'min' com 'required', etc etc..)
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable): boolean {
  let isValid = true;

  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim() !== ""; ////talvez esta expressão seja válida como a de baixo, também...
    // isValid = isValid && validatableInput.value.trim().length !== 0; ///esta expressão foi a adotada pelo professor....
  }

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid &&
      validatableInput.value.toString().length > validatableInput.minLength; ////check de MINIMUM LENGTH.
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid &&
      validatableInput.value.toString().length < validatableInput.maxLength; ////check de MINIMUM LENGTH.
  }

  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value < validatableInput.max;
  }

  return isValid;
}


   }