import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHorarios } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IHorario } from '../pages/interfaces/interfaces';
import { User } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarHorarios():Observable<IHorarios>{
    return this.httpclient.get<IHorarios>(`${environment.apiURL}/horarios`);
  }

  CrearUsuario(newUser: User): Observable<User>{
    return this.httpclient.post<User>(`${environment.apiURL}/usuarios`, newUser);
  }

  BuscarUsuarioID(id:number):Observable<User>{
    return this.httpclient.get<User>(`${environment.apiURL}/usuarios/?id=${id}`);
  }

  BuscarHorarioID(id:number):Observable<IHorarios>{
    return this.httpclient.get<IHorarios>(`${environment.apiURL}/horarios/?id=${id}`);
  }
}
