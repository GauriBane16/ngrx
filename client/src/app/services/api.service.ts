import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIResponse } from '../models/apiResponse';
import { User } from '../models/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService:HttpService) { }
  
  getAllUser() : Observable<APIResponse>{
    return this.httpService.get('/users')
      .pipe(map(data=> data as APIResponse));
  }

  deleteUser(id:number) : Observable<APIResponse>{
    return this.httpService.delete(`/users/${id}`)
      .pipe(map(data=> data as APIResponse));
  }

  resetAllUser() : Observable<APIResponse>{
    return this.httpService.get(`/users/reset`)
      .pipe(map(data=> data as APIResponse));
  }
}
