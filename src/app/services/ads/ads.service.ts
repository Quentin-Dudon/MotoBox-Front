import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AccessDeniedError } from '../../shared/error/access-denied-error';
import { NotFoundError } from '../../shared/error/not-found-error';
import { ServerError } from '../../shared/error/server-error';
import { AppError } from '../../shared/error/app-error';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }


  // -------------- GET AD BY ID -------------- //
  getAd(id) {
    return this.http.get(`${environment.apiUrl}/ads/${id}`).pipe(
      map(res => res),
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }
  // -------------- GET ALL ADS -------------- //
  getAds() {
    return this.http.get(`${environment.apiUrl}/ads`).pipe(
      map(res => res),
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- GET USER ADS -------------- //
  getUserAds() {
    return this.http.get(`${environment.apiUrl}/user/ads`).pipe(
      map(res => res),
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- CREATE AD -------------- //
  create(ad) {
    return this.http.post(`${environment.apiUrl}/user/ad`, ad).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- UPDATE AD -------------- //
  update(id, ad) {
    return this.http.post(`${environment.apiUrl}/user/ad/${id}`, ad).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- DELETE AD -------------- //
  delete(id) {
    return this.http.delete(`${environment.apiUrl}/user/ad/${id}`).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  private getErrorType(error) {
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
