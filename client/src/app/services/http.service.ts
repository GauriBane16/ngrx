import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl='http://localhost:8080';
  // private baseUrl='https://jsonplaceholder.typicode.com';
  AUTH_TOKEN='auth_token';
  constructor(private httpClient:HttpClient) { }

  get(url:string,params?:any):Observable<any>{
    const data={params,headers:this.getAuthHeader()};
   return this.httpClient
   .get(this.baseUrl+url,data).pipe(catchError(this.errorHandler.bind(this)))
  }
  post(url:string,params?:any):Observable<any>{
    const data={params,headers:this.getAuthHeader()};
   return this.httpClient
   .post(this.baseUrl+url,data).pipe(catchError(this.errorHandler.bind(this)))
  }
  put(url:string,params?:any):Observable<any>{
    const data={params,headers:this.getAuthHeader()};
   return this.httpClient
   .put(this.baseUrl+url,data).pipe(catchError(this.errorHandler.bind(this)))
  }
  delete(url:string,params?:any):Observable<any>{
    const data={params,headers:this.getAuthHeader()};
   return this.httpClient
   .delete(this.baseUrl+url,data).pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(response:any){
    const error=response.error;
    const keys=Object.keys(error);
    const msgKey=keys[0];
    let message=error[msgKey];
    if(response.status===401){
      // delete auth token from localstorage
      // redirect login page
    }

    if(error[msgKey] instanceof Array){
      let message=error[msgKey][0];
    }

    if(msgKey==='isTrusted'){
      // this will occue when not connected to internet
      // show msg on snackbar "Internet Not Connected"
    }else{
      message=`${msgKey} : ${message}`; 
    }
    // call snackbar and show error with message
    return throwError({mesages:message,error})
  }

  private getAuthHeader():{[header:string]:string | string[]; }{
    return {
      Authorization:`Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
    }
  }
}
