import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

import {map, catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {AppError} from '../../shared/error/app-error';
import {NotFoundError} from '../../shared/error/not-found-error';
import {AccessDeniedError} from '../../shared/error/access-denied-error';
import {ServerError} from '../../shared/error/server-error';
import {Succed} from '../../shared/error/succed';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  login(credentials): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, credentials, {observe: 'response'}).pipe(
      map(res => res),
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  create(user): Observable<any> {
    return this.http.post(`${environment.apiUrl}/user`, user).pipe(
      map(res => res),
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // update(user) {
  //   return this.http.post(`${environment.apiUrl}/user`, user).pipe(
  //     // map(),
  //     catchError((error: Response) => {
  //       this.getErrorType(error);
  //     }),
  //   );
  // }

  // delete(id): Observable<> {
  //   return this.http.delete(`${environment.apiUrl}/user`, id).pipe(
  //     catchError((error: Response) => {
  //       this.getErrorType(error);
  //     }),
  //   );
  // }

  // isLogged() {}
  // logout() {}

  private getErrorType(error) {
    if (error.status === 0 || 200) {
      return throwError(new Succed(error));
    }
    if (error.status === 403) {
      return throwError(new AccessDeniedError(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    if (error.status === 500 || 503 || 504) {
      return throwError(new ServerError(error));
    }
    return throwError(new AppError(error));
  }
}
