import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  // La methode est une interface de validation (voir "validatorfn" doc Angular.io)
  // On veux y acceder sans instanciation de la class donc => static
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    // Si on a un espace (indexOf(' ') dans la valeur a controller)
    if ((control.value as string).indexOf(' ') !== -1) {
      // On retourne une erreur (doc angular.io 'validationerr' est un tableau de nomDeLerreurAvalider : valeurs)
      return {cannotContainSpace: true};
    }
    // Sinon on retourne null
    return null;
  }
}
