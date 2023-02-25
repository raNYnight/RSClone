import { lang } from '../../components/translate/translate';
import { state } from '../../utils/state';
import { SPINNER_SVG } from '../../assets/icons/svg';

export class ModalWindow{
  lang = state.isEngl ? lang.en : lang.ru;
  showModal() {
    const modal: string = `<div id="loading-modal" class="modal">
    <div class="modal-content">
      <p>${this.lang.common.loading}   ${SPINNER_SVG}</p>
    </div>
  </div>`;
    const main = document.querySelector('main'); 
    if(main)
    main.insertAdjacentHTML('beforeend', modal);
    const modalNode = document.querySelector('#loading-modal') as HTMLElement;
    modalNode.style.display = 'block';
  }

  hideModal() {
    const modalNode = document.querySelector('#loading-modal') as HTMLElement;
    modalNode.style.display = 'none';
  }
}