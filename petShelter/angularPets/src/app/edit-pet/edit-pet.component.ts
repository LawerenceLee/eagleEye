import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  editedPet = {
    name: "",
    type: "",
    desc: "",
    skills: {
      skill1: "",
      skill2: "",
      skill3: "",
    }
  }
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getPet(params['petId']).subscribe(data => {
        if (data["message"] === "error") { this.errors.push("That Pet Id does not exist") }
        else { this.editedPet = data['data']; }
      })
    });
  }

  // UPON SUBMISSION OF EDIT FORM, PASS EDITED Pet ALONG W/ ITS ID TO SERVICE
  onEdit(petId) {
    this._httpService.putPet(this.editedPet["_id"], this.editedPet).subscribe(data => {
        if (data["message"] === "error") { this.errors.push(data["error"]) }
        else { 
            this.editedPet = {
              name: "",
              type: "",
              desc: "",
              skills: {
                skill1: "",
                skill2: "",
                skill3: "",
              }
            }; 
            this._router.navigate([`/pets/${petId}`]);
        }
    })
  }

  toAdoptRoute(petId) {
    this._router.navigate([`/pets/${petId}`])
  }

}
