import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {AccessDeniedError} from '../../shared/error/access-denied-error';
import {NotFoundError} from '../../shared/error/not-found-error';
import {ServerError} from '../../shared/error/server-error';
import {AppError} from '../../shared/error/app-error';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  // -------------- GET CART BY (USER) ID -------------- //
  get(userId) {
    return this.http.get(`${environment.apiUrl}/cart/${userId}`).pipe(
      map(res => res),
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------------------------------------------------- //
  // ------------------ USER IS CONNECTED ------------------- //
  // -------------------------------------------------------- //

  // -------------- CREATE CART -------------- //
  create(userId) {
    return this.http.post(`${environment.apiUrl}/cart/${userId}`).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- DELETE CART -------------- //
  delete(userId) {
    return this.http.delete(`${environment.apiUrl}/cart/${userId}`).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- ADD ITEM TO CART -------------- //
  addProduct(idProduct) {
    // Envoyer le token utilisateur a chaque requete
    return this.http.post(`${environment.apiUrl}/cart/${idProduct}`, userToken).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- REMOVE ITEM TO CART -------------- //
  deleteProduct(idProduct) {
    // Envoyer le token utilisateur a chaque requete
    return this.http.delete(`${environment.apiUrl}/cart/${idProduct}`, userToken).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------------------------------------------------- //
  // ---------------- USER IS NOT CONNECTED ----------------- //
  // -------------------------------------------------------- //

  // -------------- GET CART FROM LOCALSTORAGE -------------- //
  public localGet(): any {
    const cart = JSON.parse(localStorage.getItem('motobox-card'));

    if (cart.length > 0) {
      return cart;
    } else {
      return null;
    }
  }
  // -------------- CREATE CART ON LOCALSTORAGE -------------- //
  localCreate() {
    const cart = [];
    localStorage.setItem('motobox-card', JSON.stringify(cart));
  }

  // -------------- DELETE CART FROM LOCALSTORAGE -------------- //
  localDelete() {
    localStorage.removeItem('motobox-card');
  }

  // -------------- ADD ITEM TO CART TO LOCALSTORAGE -------------- //
  localAddProduct(product) {  // -------------- CREATE CART -------------- //
      const cart = [];
      cart.push(JSON.parse(localStorage.getItem('motobox-card')), product);
      localStorage.setItem('motobox-card', JSON.stringify(cart));
  }

  // -------------- REMOVE ITEM TO CART FROM LOCALSTORAGE -------------- //
  localDeleteProduct(id) {
    const previousCart = JSON.parse(localStorage.getItem('motobox-card'));
    const index = previousCart.findIndex( product => product.id === id);
    const nextCart = previousCart.splice(index, 1);
    localStorage.setItem('motobox-card', JSON.stringify(nextCart));
  }

  // -------------- GET ERRORS TYPE -------------- // (DEL)
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
