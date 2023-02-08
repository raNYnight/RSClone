import { Component } from "../../../components/component";
import { fields } from "components/translate/translateInterfase";
import { lang } from "../../../components/translate/translate";
import { state } from '../../../utils/state';
import "./signup.scss";
import { sign } from "crypto";
import { field } from "../../../constants/field";
export class SignupComponent implements Component{
  async getHtml(): Promise<string> {
    const path = state.isEngl ? lang.en : lang.ru;
    let form = ``;
    for (const key in path.signUp.fields as fields) {
        const field = key;
        const lowerField = field.toLowerCase();
        const isPassword = lowerField.includes("password")
        const label = typeof path.signUp.fields !== "string" ? path.signUp.fields[key] : null;
        const autoComplete = isPassword ?
        "new-password" : lowerField;
        const type = isPassword ? "password" : "text"
        form += `
      <div class="sign-up-field">
      <label for="${lowerField}">${label}</label>
      <input type="${type}" name="${lowerField}" autocomplete="${autoComplete}">
     </div>
      `}
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

  setListeners(): void{
    const fields: field[] = [];
    if (typeof lang.en.signUp.fields !== "string")
    for (const key in lang.en.signUp.fields) {
      const element = document.querySelector(`input[name=${key.toLowerCase()}]`);
      const label = document.querySelector(`label[for=${key.toLowerCase()}]`);
      element && label ? fields.push({field:element as HTMLElement, label:label as HTMLElement}): null;
    }
    const signUpBtn = document.querySelector(".submit-btn");
    signUpBtn?.addEventListener('click', ()=>{
      if (this.checkEmail(fields[0]) &&
      this.checkUsername(fields[1]) &&
      this.checkPassword(fields[2]) &&
      this.arePasswordsEqual(fields[2], fields[3])) {
        // Registration function here
      }
    })
  }

  setError(initName: string, field: field, result: boolean, errorMsg: string){
    if (!result) field.label.innerHTML = initName + 
    `<span class="error"> ${errorMsg}<span>`;
    else field.label.innerHTML = initName;
  }

  checkEmail(field: field): boolean{
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const result = emailRegex.test((field.field as HTMLInputElement).value);
      console.log((field.field as HTMLInputElement).value);
      this.setError("Email", field, result, 'Invalid email address');
      return result;
  }

  checkUsername(field: field): boolean{
    const result = (field.field as HTMLInputElement).value.length > 0;
    this.setError("Username", field, result, 'Required');
    return result;
  }

  checkPassword(field: field): boolean{
    const result = (field.field as HTMLInputElement).value.length >= 6;
    const errorMsg = !result && (field.field as HTMLInputElement).value.length === 0 ?
     "Required" : "Must be at least 6 characters long"
    this.setError("Password", field, result, errorMsg);
    return result;
  }

  arePasswordsEqual(password: field, confirmation: field): boolean{
    const passwordText = (password.field as HTMLInputElement).value;
    const confirmationText = (confirmation.field as HTMLInputElement).value
    const result = (passwordText === confirmationText) && !!passwordText && !!confirmationText;
    const errorMsg = !result && (confirmation.field as HTMLInputElement).value.length === 0 ?
     "Required" : "Passwords must match";
    this.setError("Password confirmation", confirmation, result, errorMsg);
    return result;
  }
}
