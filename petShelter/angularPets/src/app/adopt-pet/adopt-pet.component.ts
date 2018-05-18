import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-adopt-pet',
  templateUrl: './adopt-pet.component.html',
  styleUrls: ['./adopt-pet.component.css']
})
export class AdoptPetComponent implements OnInit {
  currentPet = {
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
        else { this.currentPet = data['data']; }
      })
    });
  }

  adopted(petId) {
    this._httpService.deletePet(petId).subscribe(data => {
      if (data["message"] === "error") { this.errors.push(data["error"]) }
        else { 
          this.currentPet = {
            name: "",
            type: "",
            desc: "",
            skills: {
              skill1: "",
              skill2: "",
              skill3: "",
            }
          }; 
          this._router.navigate(["/pets"]);
        }
    })
  }

}
