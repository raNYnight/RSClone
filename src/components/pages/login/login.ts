import { Component } from "../../../components/component";
export class LoginComponent implements Component {
  async getHtml(): Promise<string> {
    return `
        <p>Login PAGE</p>
      `;
  }
}
