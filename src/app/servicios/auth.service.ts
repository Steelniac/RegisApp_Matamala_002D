import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiURL}/usuarios`);
  }


  GetUserById(codigo: any): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiURL}/usuarios/?n_usuario=${codigo}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('n_usuario')!=null;
  }

  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
}
