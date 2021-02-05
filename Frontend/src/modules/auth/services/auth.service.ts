import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthService {

    private host : string= "http://localhost:3000";
    private jwtToken;

    constructor(private http: HttpClient) {}

    login(user){
        return this.http.post(this.host+"/user/login",user,{observe:"response"}).pipe(catchError(this.errorHandler));
      }

    saveToken(jwt: string){
        this.jwtToken = jwt;
        localStorage.setItem('token',jwt);
    }

    getAuth$(): Observable<{}> {
        return of({});
    }
    errorHandler(error : HttpErrorResponse){
        return throwError(error.error|| "Server Error")
      }

}
