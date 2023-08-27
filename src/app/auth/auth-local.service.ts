import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class AuthLocalService {

  public setSignUpUser(user: any): void {

    const authUserFromStore = [];

    const getAllAuthUser = JSON.parse(localStorage.getItem('signUp') || '{}');

    if (getAllAuthUser.length > 0) {
      authUserFromStore.push(...getAllAuthUser);
    }

    authUserFromStore.push(user);

    localStorage.setItem('signUp', JSON.stringify(authUserFromStore))
  }

}
