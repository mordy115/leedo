import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {EMPLOYEES_URL} from '../utils/api-utils';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
//  make  api by front end
  EMPLOYEES_URL = `${EMPLOYEES_URL}`;
  _EMPLOYEES =[]
  constructor(private http:HttpClient) { }
  ALL_EMPLOYEES():Observable<any>{
    return this.http.get(this.EMPLOYEES_URL).pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    let errorMessage = "";
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage = `Error Code: ${error.status}\n MEssage: ${error.message}`
    }
  return throwError(errorMessage);
}

}
