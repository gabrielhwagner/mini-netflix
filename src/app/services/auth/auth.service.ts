import { Injectable } from '@angular/core';
import { getUsers } from 'app/mocks/users';
import { Observable } from 'rxjs';
import { IUser } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({ email, password }): Observable<IUser> {
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
        return observer.error('Usuário e/ou senha inválidos');
      }, 1500);
    });
  }

  searchUserInformation(): Observable<IUser> {
    return new Observable((observer) => {
      const user = window.localStorage.getItem('user');
      return observer.next(JSON.parse(user));
    });
  }
}
