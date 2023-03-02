import './footer.css';
import '../../assets/icons/logo.svg';
import { Component } from '../../components/component';

export class FooterComponent implements Component {
  async getHtml(): Promise<string> {
    return `<footer class='footer'>
  <ul class="footer__ul">
    <li class="footer__li">
      <a href="https://github.com/ranynight" target="_blank">
        <img class="footer__logo-gh" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" title="raNYnight">
      </a>
      <a href="https://github.com/almondchips" target="_blank">
        <img class="footer__logo-gh" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" title="AlmondChips">
      </a>
      <a href="https://github.com/IliasovDamir" target="_blank">
        <img class="footer__logo-gh" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" title="Iliasov Damir">
      </a>
    </li>
    <li class="footer__li">
      <a href="https://rs.school/js/" target="_blank">
       <img class="footer__logo-rs" src="https://rs.school/images/rs_school.svg" alt="RSSchool">
      </a>
    </li>
  </ul>  
  </footer>`;
  }
}
