import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {AccessDeniedError} from '../../shared/error/access-denied-error';
import {NotFoundError} from '../../shared/error/not-found-error';
import {ServerError} from '../../shared/error/server-error';
import {AppError} from '../../shared/error/app-error';
import {Succed} from '../../shared/error/succed';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }

  // -------------- GET CART BY (USER) ID -------------- //
  get() {
    return this.http.get(`${environment.apiUrl}/cart`).pipe(
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
  create(body) {
    return this.http.post(`${environment.apiUrl}/cart`, body).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- DELETE CART -------------- //
  delete() {
    return this.http.delete(`${environment.apiUrl}/cart`).pipe(
      catchError((error: Response) => {
        return this.getErrorType(error);
      }),
    );
  }

  // -------------- ADD ITEM TO CART -------------- //
//   addProduct(idProduct) {
//     // Envoyer le token utilisateur a chaque requete
//     return this.http.post(`${environment.apiUrl}/cart/${idProduct}`, userToken).pipe(
//       catchError((error: Response) => {
//         return this.getErrorType(error);
//       }),
//     );
//   }

  // -------------- REMOVE ITEM TO CART -------------- //
//   deleteProduct(idProduct) {
//     // Envoyer le token utilisateur a chaque requete
//     return this.http.delete(`${environment.apiUrl}/cart/${idProduct}`, userToken).pipe(
//       catchError((error: Response) => {
//         return this.getErrorType(error);
//       }),
//     );
//   }

  // -------------------------------------------------------- //
  // ---------------- USER IS NOT CONNECTED ----------------- //
  // -------------------------------------------------------- //

  // -------------- GET CART FROM LOCALSTORAGE -------------- //
  public localGet(): any {
    const cart = JSON.parse(localStorage.getItem('motobox-card'));

    if (cart) {
      return cart;
    } else {
      return [];
    }
  }

  // -------------- ADD ITEM TO CART TO LOCALSTORAGE -------------- //
  public localAddProduct(product): void {
    if (!localStorage.getItem('motobox-card')) {
      const value = [];
      value.push(product);
      localStorage.setItem('motobox-card', JSON.stringify(value));
    }
    const lastCart = JSON.parse(localStorage.getItem('motobox-card'));
    const found = lastCart.map(cart => cart.id === product.id);
    if (found.includes(true)) {
      return;
    } else {
      const nextCart = lastCart;
      nextCart.push(product);
      localStorage.setItem('motobox-card', JSON.stringify(nextCart));
    }
  }


  // -------------- DELETE CART FROM LOCALSTORAGE -------------- //
  public localDelete(): void {
    localStorage.removeItem('motobox-card');
  }

  // -------------- REMOVE ITEM TO CART FROM LOCALSTORAGE -------------- //
  public localDeleteProduct(id, index): void {
    const nextCart = JSON.parse(localStorage.getItem('motobox-card'));
    nextCart.splice(index, 1);
    localStorage.setItem('motobox-card', JSON.stringify(nextCart));
  }

  // -------------- GET ERRORS TYPE -------------- //
  private getErrorType(error) {
    if (error.status === 0 || 200) {
      return throwError(new Succed(error));
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
