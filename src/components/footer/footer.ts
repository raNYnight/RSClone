export class FooterComponent {
  async getHtml(): Promise<string> {
    return `<footer>
      <a href="https://github.com/" class="git"></a>

      <a href="https://rs.school/js/" class="rss"></a>
    </footer>`;
  }
}
