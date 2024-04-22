import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ResidenceComponent } from './residence/residence.component';
import { ApartementComponent } from './apartement/apartement.component';
import { FormComponent } from './form/form.component';
import { FormAppartmentComponentComponent } from './form-appartment-component/form-appartment-component.component'; // Importez le composant du formulaire d'ajout d'appartement

const routes: Routes = [
  // Chemins par défaut
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'login', component: FormComponent },

  // Chemins paramétrés
  { path: 'detail/:id', component: DetailProductComponent },
  { path: 'apartement/:id', component: ApartementComponent },

  // Nouvelle route pour le formulaire d'ajout d'appartement avec un paramètre d'ID de résidence
  { path: 'add-apartment/:id', component: FormAppartmentComponentComponent },

  // Chemin pour la page Not found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
