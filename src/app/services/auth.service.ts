import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId = this.afAuth.authState.pipe(
    map((authState) => (!authState ? null : authState))
  );
  logInError = new Subject();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) { }
  async loginEmail(userData) {
    const { email, password } = userData;
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log(result);
      this.router.navigate([`/home`]);
    } catch (error) {
      console.log(error.message);
      this.logInError.next(error.message);
    }
  }
  async login() {
    try {
      const result = await this.afAuth.auth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      const userData = {
        username: result.user.displayName,
        email: result.user.email,
        userId: result.user.uid,
      };

      await this.userService.getUsers().subscribe((res) => {
        const foundUser = res.filter(
          (user) => user.userId == result.user.uid
        )[0];
        console.log("User found", foundUser)
        if (!foundUser) {
          this.userService.addUserToDB(userData).subscribe();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  }
}
