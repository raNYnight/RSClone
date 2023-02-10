/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component } from '../../../components/component';
import { fields } from 'components/translate/translateInterfase';
import { lang } from '../../../components/translate/translate';
import { state } from '../../../utils/state';
import './signup.scss';
import { sign } from 'crypto';
import { Field } from '../../../constants/field';
import { fieldsErrors } from '../../../constants/fieldsErrors';
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
      <input type="${type}" name="${lowerField}" autocomplete="${autoComplete}">
     </div>
      `;
    }
    return `
    <div class="sign-up-window">
    <div class="form-wrapper">
      <div class="middle-headers">
        <h2>${path.signUp.title}</h2>
        <p>${path.signUp.haveAcc} <a href="#login">${path.signUp.login}</a></p>
        ${form}
      </div>
      <input class="submit-btn" type="submit" value="${path.signUp.signUp}">
    </div>
  </div>
      `;
  }

  setListeners(): void {
    const fields: Field[] = [];
    if (typeof lang.en.signUp.fields !== 'string')
      for (const key in lang.en.signUp.fields) {
        const element = document.querySelector(`input[name=${key.toLowerCase()}]`);
        const label = document.querySelector(`label[for=${key.toLowerCase()}]`);
        element && label ? fields.push({ field: element as HTMLElement, label: label as HTMLElement }) : null;
      }
    const signUpBtn = document.querySelector('.submit-btn');
    signUpBtn?.addEventListener('click', () => {
      if (
        this.checkEmail(fields[0]) &&
        this.checkUsername(fields[1]) &&
        this.checkPassword(fields[2]) &&
        this.arePasswordsEqual(fields[2], fields[3])
      ) {
        // Registration function here
      }
    });
  }

  setError(initName: string, field: Field, result: boolean, errorMsg: string) {
    if (!result) field.label.innerHTML = initName + `<span class="error"> ${errorMsg}<span>`;
    else field.label.innerHTML = initName;
  }

  checkEmail(field: Field): boolean {
    const lang = this.errors.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = emailRegex.test((field.field as HTMLInputElement).value);
    console.log((field.field as HTMLInputElement).value);
    this.setError(lang.name, field, result, lang.invalid);
    return result;
  }

  checkUsername(field: Field): boolean {
    const lang = this.errors.username;
    const result = (field.field as HTMLInputElement).value.length > 0;
    this.setError(lang.name, field, result, lang.req);
    return result;
  }

  checkPassword(field: Field): boolean {
    const lang = this.errors.password;
    const result = (field.field as HTMLInputElement).value.length >= 6;
    const errorMsg = !result && (field.field as HTMLInputElement).value.length === 0 ? lang.req : lang.invalid;
    this.setError(lang.name, field, result, errorMsg);
    return result;
  }

  arePasswordsEqual(password: Field, confirmation: Field): boolean {
    const lang = this.errors.passConf;
    const passwordText = (password.field as HTMLInputElement).value;
    const confirmationText = (confirmation.field as HTMLInputElement).value;
    const result = passwordText === confirmationText && !!passwordText && !!confirmationText;
    const errorMsg = !result && (confirmation.field as HTMLInputElement).value.length === 0 ? lang.req : lang.invalid;
    this.setError(lang.name, confirmation, result, errorMsg);
    return result;
  }
}
