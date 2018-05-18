import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from "./http.service";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { AdoptPetComponent } from './adopt-pet/adopt-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    CreatePetComponent,
    AdoptPetComponent,
    EditPetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
//   providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
