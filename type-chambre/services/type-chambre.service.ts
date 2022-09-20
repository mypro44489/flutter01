import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeChambreModel} from "../models/type-chambre.model";
import {environment} from "../../../../environments/environment.prod";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeChambreService {

  constructor(private httpClient: HttpClient) { }

  public getAllTypeChambre():Observable<TypeChambreModel[]>{
    return this.httpClient.get<TypeChambreModel[]>(`${environment.backendHost}type-chambre/all`)
  }

  public getTypeChambre(id:number){
    return this.httpClient.get(`${environment.backendHost}type-chambre/edite/${id}`)
  }

  public saveTypeChambre(typeChambre:TypeChambreModel){
    return this.httpClient.post(`${environment.backendHost}type-chambre/save`,typeChambre,{observe:'response'})
      .pipe(map(data =>{}))
  }

  public deleteTypeChambre(id:number){
    this.httpClient.delete(`${environment.backendHost}type-chambre/delete/${id}`)
  }

}

