import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import firebase from 'firebase/app';

type UserCredential = firebase.auth.UserCredential;
type User = firebase.User;

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: '/',
  // This must be true.
  handleCodeInApp: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = null;
    this.firebaseAuth.authState.subscribe((user: User|null) => {
      // I use local storage here, but if I were working with an actual server with an auth set up, I'd use cookies
      if (user) {
        console.log('user already logged in');
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        console.log('no user logged in');
        localStorage.removeItem('user');
      }
    });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(async (userCredential: UserCredential) => {
        if (!userCredential) {
          console.log('no signup user credential');
          return;
        }

        const user = userCredential.user ? userCredential.user : null;

        if (!user) {
          console.log('no signup user');
          return;
        }

        await this.sendEmailVerification(user)
          .catch(err => {
            alert(`An error happened trying to send the verification email - ${err.message}`)
          });
        localStorage.setItem('user', JSON.stringify(user));
        console.log('email verification sent & user set');
      })
      .catch(err => {
        // I'd normally handle with some stateful variables to trigger an error messaging component
        const errorCode = err.code;
        const errorMessage = err.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            alert('Invalid email.');
            break;
          case 'auth/user-disabled':
            alert('User disabled.');
            break;
          case 'auth/user-not-found':
            alert('User not found.');
            break;
          case 'auth/wrong-password':
            alert('Wrong password.');
            break;
          default:
            alert(`An unknown error happened - ${errorMessage}`);
        }
      });
  }

  async sendEmailVerification(user: User) {
    if (!user) {
      throw 'no user to verify';
    }

    const email = user.email ? user.email : '';

    if (!email) {
      throw 'no user email to send verification email to';
    }

    await this.firebaseAuth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(async () => {
        console.log('sign in link email sent');
        return this.router.navigate(['auth/verify-email']);
      })
      .catch(err => {
        // I'd normally handle with some stateful variables to trigger an error messaging component
        const errorCode = err.code;
        const errorMessage = err.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            alert('Invalid sign in link email.');
            break;
          case 'auth/argument-error':
          case 'auth/missing-android-pkg-name':
          case 'auth/missing-ios-bundle-id':
          case 'auth/missing-continue-uri':
          case 'auth/invalid-continue-uri':
          case 'auth/unauthorized-continue-uri':
            alert(`Configuration error sending sign in link email. ${errorMessage}`);
            break;
          default:
            alert(`An unknown error happened sending sign in link - ${errorMessage}`);
        }
      });
  }

  async login(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential: UserCredential) => {
        if (!userCredential) {
          console.log('no login user credential');
          return;
        }
        console.log('signed in');
        
        this.router.navigate(['/vehicle-stats']);
      })
      .catch(err => {
        // I'd normally handle with some stateful variables to trigger an error messaging component
        const errorCode = err.code;
        const errorMessage = err.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            alert('Invalid email signing in.');
            break;
          case 'auth/user-disabled':
            alert('User disabled signing in.');
            break;
          case 'auth/user-not-found':
            alert('User not found signing in.');
            break;
          case 'auth/wrong-password':
            alert('Wrong password signing in.');
            break;
          default:
            alert(`An unknown error happened signing in - ${errorMessage}`);
        }
      });
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail, actionCodeSettings)
      .then(async () => {
        console.log('password reset email sent');
        return this.router.navigate(['password-reset-sent']);
      })
      .catch(err => {
        // I'd normally handle with some stateful variables to trigger an error messaging component
        const errorCode = err.code;
        const errorMessage = err.message;

        switch (errorCode) {
          case 'auth/invalid-email':
            alert('Invalid password reset email.');
            break;
          case 'auth/user-not-found':
            alert('User not found for password reset email.');
            break;
          case 'auth/argument-error':
          case 'auth/missing-android-pkg-name':
          case 'auth/missing-ios-bundle-id':
          case 'auth/missing-continue-uri':
          case 'auth/invalid-continue-uri':
          case 'auth/unauthorized-continue-uri':
            alert(`Configuration error sending password reset email. ${errorMessage}`);
            break;
          default:
            alert(`An unknown error happened sending password reset email - ${errorMessage}`);
        }
      });
  }

  async logout() {
    await this.firebaseAuth.signOut()
      .then(() => {
        console.log('logged out');
        localStorage.removeItem('user');
        this.router.navigate(['auth/login']);
      })
      .catch(err => {
        // I'd normally handle with some stateful variables to trigger an error messaging component
        alert(`An error happened while logging out - ${err.message}`);
      });
  }

  get isLoggedIn(): boolean {
    let user = localStorage.getItem('user');

    if (!user) {
      return false;
    }
    
    return JSON.parse(user).emailVerified !== false;
  }
}
