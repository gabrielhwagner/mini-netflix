import { Injectable } from '@angular/core';
import { getUsers } from 'app/mocks/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({ email, password }) {
    return new Observable((observer) => {
      const users = getUsers();
      const login = users.find(
        user => user.email === email && user.password === password
      );

      setTimeout(() => {
        if (login) {
          delete login.password;
          return observer.next(login);
        }
        return observer.error('Usuario e senha inválidos')
      }, 1500);
    });
  }
}
