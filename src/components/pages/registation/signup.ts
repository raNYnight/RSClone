import { fields } from "components/translate/translateInterfase";
import { lang } from "../../../components/translate/translate";
import { state } from '../../../utils/state';
import "./signup.scss";
export class SignupComponent {
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
}
