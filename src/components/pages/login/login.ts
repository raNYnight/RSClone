import { lang } from '../../../components/translate/translate';
import { Fields } from '../../../components/translate/translateInterfase';
import { state } from '../../../utils/state';
import { Component } from '../../../components/component';
import { Field } from '../../../constants/field';
import { fieldsErrors } from '../../../constants/fieldsErrors';
import { UsersService } from '../../../APIs/UsersService';
import './login.css';
import { ModalWindow } from '../modalWindow';

export class LoginComponent extends ModalWindow implements Component {
  public errors = state.isEngl ? fieldsErrors.ru : fieldsErrors.en;

  async getHtml(): Promise<string> {
    const path = this.lang;
    let form = '';
    for (const key in path.login.fields as Fields) {
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
        <h2>${path.login.title}</h2>
        <p>${path.login.haveAcc} <a href="#signup">${path.login.signUp}</a></p>
        <p class="auth-fail"></p>
        ${form}
      </div>
      <input class="submit-btn" type="submit" value="${path.login.login}">
    </div>
  </div>
      `;
  }

  async setListeners(): Promise<void> {
    const fields: Field[] = [];
    if (typeof lang.en.login.fields !== 'string')
      for (const key in lang.en.login.fields) {
        const element = document.querySelector(`input[name=${key.toLowerCase()}]`);
        const label = document.querySelector(`label[for=${key.toLowerCase()}]`);
        element && label ? fields.push({ field: element as HTMLElement, label: label as HTMLElement }) : null;
      }
    const loginBtn = document.querySelector('.submit-btn');
    loginBtn?.addEventListener('click', async (event: Event) => {
      const authFailBlock = document.querySelector('.auth-fail');
      const loginBtn = event.target as HTMLElement;
      (authFailBlock as HTMLElement).style.visibility = 'hidden';
      (authFailBlock as HTMLElement).textContent = '';
      if (this.checkUsername(fields[0]) && this.checkPassword(fields[1])) {
        (loginBtn as HTMLElement).classList.add('btn-pending');
        this.showModal();
        UsersService.authorizeWithCookie({
          user_name: (fields[0].field as HTMLInputElement).value,
          password: (fields[1].field as HTMLInputElement).value,
        })
          .then(() => {
            window.location.hash = 'dashboard';
          })
          .catch(() => {
            if (authFailBlock) {
              (authFailBlock as HTMLElement).style.visibility = 'visible';
              authFailBlock.innerHTML = state.isEngl
                ? 'Username and password do not match'
                : '?????? ???????????????????????? ?? ???????????? ???? ??????????????????????????';
            }
          })
          .finally(() => {
            (loginBtn as HTMLElement).classList.remove('btn-pending');
            this.hideModal();
          });
      }
    });
  }

  setError(initName: string, field: Field, result: boolean, errorMsg: string) {
    if (!result) field.label.innerHTML = initName + `<span class="error"> ${errorMsg}<span>`;
    else field.label.innerHTML = initName;
  }

  checkUsername(field: Field): boolean {
    const lang = this.errors.username;
    const result = (field.field as HTMLInputElement).value.length > 0;
    this.setError(lang.name, field, result, lang.req);
    return result;
  }

  checkPassword(field: Field): boolean {
    const lang = this.errors.password;
    const result = (field.field as HTMLInputElement).value.length > 0;
    this.setError(lang.name, field, result, lang.req);
    return result;
  }
}
