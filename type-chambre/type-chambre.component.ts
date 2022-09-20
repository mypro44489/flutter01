import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {TypeChambreService} from "./services/type-chambre.service";
import {map} from "rxjs";
import {TypeChambreModel} from "./models/type-chambre.model";

@Component({
  selector: 'app-type-chambre',
  templateUrl: './type-chambre.component.html',
  styleUrls: ['./type-chambre.component.css'],

})
export class TypeChambreComponent implements OnInit {

  typeChambres! : TypeChambreModel[]   ;

  constructor(private primengConfig: PrimeNGConfig,private typeChambreService:TypeChambreService) { }
  position!: string;
  displayResponsive!: boolean;


  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.OnGetAllTypeChambre();
  }

  showResponsiveDialog() {
    this.displayResponsive = true;
  }

  OnGetAllTypeChambre(){
    this.typeChambreService.getAllTypeChambre().pipe(map(data =>this.typeChambres = data)).subscribe()
  }

  OnSaveTypeChambre(){}

  OnGetTypeChambre(){}

  OnDeleteTypeChambre(){}

}
