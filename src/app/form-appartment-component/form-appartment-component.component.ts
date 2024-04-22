import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-appartment-component',
  templateUrl: './form-appartment-component.component.html',
  styleUrls: ['./form-appartment-component.component.css']
})
export class FormAppartmentComponentComponent implements OnInit {
  apartForm: FormGroup = this.formBuilder.group({
    appartNumber: ['', [Validators.required, this.onlyDigitsValidator()]], // Validation pour les chiffres uniquement
    floorNumber: ['', [Validators.required, this.onlyDigitsValidator()]], // Validation pour les chiffres uniquement
    surface: ['', Validators.required],
    terrace: ['yes', Validators.required],
    surfaceTerrace: [''],
    category: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
    residence: [1, Validators.required] // Default residence value
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Laissez la logique ngOnInit ici si nécessaire
  }

  onSubmit() {
    if (this.apartForm.valid) {
      console.log(this.apartForm.value);
      // Gérer la soumission du formulaire ici
    } else {
      this.apartForm.markAllAsTouched();
    }
  }

  // Getter pour récupérer la validation personnalisée du champ de description
  get isDescriptionInvalid() {
    const descriptionControl = this.apartForm.get('description');
    return descriptionControl?.invalid && (descriptionControl.dirty || descriptionControl.touched);
  }

  // Méthode pour vérifier si le champ Apartment Number est invalide
  isAppartNumberInvalid() {
    const appartNumberControl = this.apartForm.get('appartNumber');
    return appartNumberControl?.invalid && (appartNumberControl.dirty || appartNumberControl.touched);
  }

  // Méthode pour vérifier si le champ Floor Number est invalide
  isFloorNumberInvalid() {
    const floorNumberControl = this.apartForm.get('floorNumber');
    return floorNumberControl?.invalid && (floorNumberControl.dirty || floorNumberControl.touched);
  }

  // Validation personnalisée pour les chiffres uniquement
  onlyDigitsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value === null || value === undefined || /^\d+$/.test(value)) {
        return null; // Validation réussie
      } else {
        return { 'onlyDigits': true }; // Validation échouée
      }
    };
  }
}
