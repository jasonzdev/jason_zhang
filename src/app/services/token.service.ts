import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  constructor() { }

  getToken(): string {
    return localStorage.getItem('session_id') || '';
  }

  setToken(token: string) {
    localStorage.setItem('session_id', token);
  }

  removeToken() {
    localStorage.removeItem('session_id');
  }

}
