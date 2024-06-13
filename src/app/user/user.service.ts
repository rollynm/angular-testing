import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    { id: 1, name: 'acidrain' },
    { id: 2, name: 'Iceman' },
  ];
  constructor() {}

  getUsers() {
    return of(this.users);
  }
}
