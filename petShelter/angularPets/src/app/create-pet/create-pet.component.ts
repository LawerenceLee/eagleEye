import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  newPet = {
    name: "",
    type: "",
    desc: "",
    skills: {
      skill1: "",
      skill2: "",
      skill3: "",
    }
  };
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
  }

      // AFTER SUMBIT, SEND NEW Pet TO SERVER TO BE CREATED
  onSubmit() {
    this._httpService.postPet(this.newPet).subscribe(data => {
        if (data["message"] === "error") { this.errors.push(data["error"]) }
        else { 
          this.newPet = {
            name: "",
            type: "",
            desc: "",
            skills: {
              skill1: "",
              skill2: "",
              skill3: "",
            }
          };; 
          this._router.navigate(['/pets']);
        }
    })
  }

}
