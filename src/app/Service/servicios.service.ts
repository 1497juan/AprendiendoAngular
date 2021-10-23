import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/Ejemplo01/personas'

  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }
}
