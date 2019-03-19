import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from './../auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      // add a custom header to ALL requests
      if (this.auth.getToken() !== undefined) {
        request = request.clone({   
            setHeaders: {
                Authorization: `${this.auth.getToken}`
            }
        });
    }
      // pass on the modified request object
    return next.handle(request);
  }
}