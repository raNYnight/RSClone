import { state } from '../utils/state';
import { SPINNER_SVG } from '../assets/icons/svg';
import { lang } from './translate/translate';

export class ModalComponent {
  getHTML() {
    const language = state.isEngl ? 'en' : 'ru';
    return `<div id="loading-modal" class="modal">
    <div class="modal-content">
      <p>${lang[language].common.loading}   ${SPINNER_SVG}</p>
    </div>
  </div>`;
  }

  showModal() {
    const modalNode = document.querySelector('#loading-modal') as HTMLElement;
    modalNode.style.display = 'block';
  }

  hideModal() {
    const modalNode = document.querySelector('#loading-modal') as HTMLElement;
    modalNode.style.display = 'none';
  }
}
