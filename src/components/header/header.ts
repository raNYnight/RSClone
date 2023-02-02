export class HeaderComponent {
  async getHtml(): Promise<string> {
    return `<header class="header">
              <nav class="nav">
                  <a href="#main" class="nav__link">Main</a>
                  <a href="#dashboard" class="nav__link">Dashboard</a>
                  <a href="#signup" class="nav__link">Sign Up</a>
                  <a href="#login" class="nav__link">Login</a>
              </nav>
      </header> `;
  }
}
