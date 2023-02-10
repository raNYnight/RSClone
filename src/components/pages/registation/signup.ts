/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component } from '../../../components/component';
import { fields } from 'components/translate/translateInterfase';
import { lang } from '../../../components/translate/translate';
import { state } from '../../../utils/state';
import './signup.scss';
import { sign } from 'crypto';
import { field } from '../../../constants/field';
import { fieldsErrors } from '../../../constants/fieldsErrors';
import { UsersService } from '../../../APIs/UsersService';
import { strict } from 'assert';
import { getRandomString } from '../../../utils/randomString';
import { Authorization, User } from '../../../utils/types';
export class SignupComponent implements Component {
  public errors = state.isEngl ? fieldsErrors.ru : fieldsErrors.en;

  async getHtml(): Promise<string> {
    const path = state.isEngl ? lang.en : lang.ru;
    let form = '';
    for (const key in path.signUp.fields as fields) {
      const field = key;
      const lowerField = field.toLowerCase();
      const isPassword = lowerField.includes('password');
      const label = typeof path.signUp.fields !== 'string' ? path.signUp.fields[key] : null;
      const autoComplete = isPassword ? 'new-password' : lowerField;
      const type = isPassword ? 'password' : 'text';
      form += `
      <div class="sign-up-field">
      <label for="${lowerField}">${label}</label>
      <input class="form-field" type="${type}" name="${lowerField}" autocomplete="${autoComplete}">
     </div>
      `;
    }
    return `
    <div class="sign-up-window">
    <div class="form-wrapper">
      <div class="middle-headers">
        <h2>${path.signUp.title}</h2>
        <p>${path.signUp.haveAcc} <a href="#login">${path.signUp.login}</a></p>
        <p class="reg-fail"></p>
        ${form}
      </div>
      <input class="submit-btn" type="submit" value="${path.signUp.signUp}">
    </div>
  </div>
      `;
  }

  async setListeners(): Promise<void> {
    const fields: field[] = [];
    if (typeof lang.en.signUp.fields !== 'string')
      for (const key in lang.en.signUp.fields) {
        const element = document.querySelector(`input[name=${key.toLowerCase()}]`);
        const label = document.querySelector(`label[for=${key.toLowerCase()}]`);
        element && label ? fields.push({ field: element as HTMLElement, label: label as HTMLElement }) : null;
      }
    const signUpBtn = document.querySelector('.submit-btn');
    signUpBtn?.addEventListener('click', async (event: Event) => {
      const regFailBlock = document.querySelector(".reg-fail");
      const RegButton = event.target as HTMLElement;
      (regFailBlock as HTMLElement).style.visibility = "hidden";
      if (
        this.checkEmail(fields[0]) &&
        this.checkUsername(fields[1]) &&
        this.checkPassword(fields[2]) &&
        this.arePasswordsEqual(fields[2], fields[3])
      ) {
        const userData = {
        email: (fields[0].field as HTMLInputElement).value,
        userName: (fields[1].field as HTMLInputElement).value,
        password: (fields[2].field as HTMLInputElement).value
        };
        RegButton.classList.add('btn-pending');

        const newUser: User = {
          email: userData.email ? userData.email.toString() : "",
          user_name: userData.userName ? userData.userName.toString() : "",
          password: userData.password ? userData.password.toString() : "",
          permalink: await getRandomString(10),
          registration_date: new Date(new Date().getTime()).toISOString(),
        }

        UsersService.registerNewUser(newUser).then((data) => {
          UsersService.authorizeWithCookie({user_name: newUser.user_name, password: newUser.password});

        })
        .catch((error) => {
          const lang = state.isEngl ? 'en' : 'ru';
          (regFailBlock as HTMLElement).style.visibility = "visible";
          (regFailBlock as HTMLElement).textContent = "";
          if (regFailBlock)
          error.data['denyReasons'][lang].forEach((element: string) => {
          regFailBlock.innerHTML += element + "</br>";
          });
        })
        .finally(() => RegButton.classList.remove('btn-pending'));
      }
    });
  }

  setError(initName: string, field: field, result: boolean, errorMsg: string) {
    if (!result) field.label.innerHTML = initName + `<span class="error"> ${errorMsg}<span>`;
    else field.label.innerHTML = initName;
  }

  checkEmail(field: field): boolean {
    const lang = this.errors.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailRegex.test((field.field as HTMLInputElement).value);
    this.setError(lang.name, field, result, lang.invalid);
    return result;
  }

  checkUsername(field: field): boolean {
    const lang = this.errors.username;
    const result = (field.field as HTMLInputElement).value.length > 0;
    this.setError(lang.name, field, result, lang.req);
    return result;
  }

  checkPassword(field: field): boolean {
    const lang = this.errors.password;
    const result = (field.field as HTMLInputElement).value.length >= 6;
    const errorMsg = !result && (field.field as HTMLInputElement).value.length === 0 ? lang.req : lang.invalid;
    this.setError(lang.name, field, result, errorMsg);
    return result;
  }

  arePasswordsEqual(password: field, confirmation: field): boolean {
    const lang = this.errors.passConf;
    const passwordText = (password.field as HTMLInputElement).value;
    const confirmationText = (confirmation.field as HTMLInputElement).value;
    const result = passwordText === confirmationText && !!passwordText && !!confirmationText;
    const errorMsg = !result && (confirmation.field as HTMLInputElement).value.length === 0 ? lang.req : lang.invalid;
    this.setError(lang.name, confirmation, result, errorMsg);
    return result;
  }
}
