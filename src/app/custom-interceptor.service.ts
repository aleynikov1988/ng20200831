import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';


@Injectable()
export class CustomInterceptorService implements HttpInterceptor {
    public constructor(
        @Inject('server') private readonly server: any
    ) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers: HttpHeaders = req.headers
            .append('Content-Type', 'application/json')
            .append('Authorization', `Bearer ${this.server.token}`)

        return next.handle(req.clone({headers}))
            .pipe(filter((e: HttpEvent<any>): e is HttpResponse<any> => e instanceof HttpResponse))
            .pipe(map((res) => res.clone({ body: res.body?.data })))
            .pipe(catchError(() => EMPTY));
    }
}
