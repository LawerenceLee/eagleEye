import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class HttpService {

    constructor(private _http: HttpClient) {}

    getPets() {
        return this._http.get("/server");
    }

    getPet(petId) {
        return this._http.get(`/server/${petId}`)
    }

    postPet(petObj) {
        return this._http.post("/server", petObj)
    }

    putPet(petId, petObj) {
        return this._http.put(`/server/${petId}`, petObj)
    }
    
    deletePet(petId) {
        return this._http.delete(`/server/${petId}`)
    }

}