import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private message: string;

    constructor(private router: Router, ) { }

    clear(): void {
        localStorage.clear();
    }

    setToken() {
        localStorage.setItem('token', 'hello token');
    }

    isAuthenticated2(): boolean {
        return true;
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('token') != null && !this.isTokenExpired();
    }

    isTokenExpired(): boolean {
        return false;
    }

    login(): void {
        localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo`);
        this.router.navigate(['/admin']);
      }

    logout(): void {
        this.clear();
        this.router.navigate(['/']);
      }

    decode() {
        // return this.jwtHelper.decodeToken(localStorage.getItem('token'));
    }
}
