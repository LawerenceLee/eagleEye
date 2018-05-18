import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppComponent } from "../app.component"

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {

  pets = []
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _appComponent: AppComponent,
  ) { }

  ngOnInit() {
    this.getPets()
  }

  toEditRoute(petId) {
    this._router.navigate([`/pets/${petId}/edit`])
  }

  getPets() {
    this._httpService.getPets().subscribe(data => {
        if (data["message"] === "error") { console.log(data["error"]) }
        else { this.pets = data["data"] };
    })
  }

  toAdoptRoute(petId) {
    this._router.navigate([`/pets/${petId}`])
  }

}
