import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs'

import { environment } from '../../environments/environment';

export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modReq = req.clone({
      headers: req.headers.append('x-rapidapi-key', environment.key)
    });
    return next.handle(modReq);
  }

  


}
