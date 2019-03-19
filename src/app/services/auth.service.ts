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

    getToken(): void {
        localStorage.getItem('MotoBoxToken');
    }

    isAuthenticated2(): boolean {
        return true;
    }

    isAuthenticated(): boolean {
        if (localStorage.getItem('MotoBoxToken')) {
            return true;
        }
        return false;
        // return localStorage.getItem('token') != null && !this.isTokenExpired();
    }

    isTokenExpired(): boolean {
        return false;
    }

    login(token: string): void {
        localStorage.setItem('token', token);
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
