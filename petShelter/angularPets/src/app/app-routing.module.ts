import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdoptPetComponent } from "./adopt-pet/adopt-pet.component";
import { AllPetsComponent } from "./all-pets/all-pets.component";
import { CreatePetComponent } from "./create-pet/create-pet.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";

const routes: Routes = [
  { path: 'pets/new', component: CreatePetComponent },
  { path: 'pets/:petId/edit', component: EditPetComponent },
  { path: 'pets/:petId', component: AdoptPetComponent },
  { path: 'pets', component: AllPetsComponent },
  { path: '', pathMatch: 'full', redirectTo: "/pets" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }