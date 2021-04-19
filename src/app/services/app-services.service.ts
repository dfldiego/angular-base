import { Injectable } from '@angular/core';
//importamos el json aqui

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor() {
    console.log("servicio listo para usar");
  }
}
