import { spinnerStyle, createSpinner } from "./spinner";
import { verticalStyle, createVertical } from "./vertical";

class Loader extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'loader');
  
      const style = document.createElement('style');
      style.textContent = `
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        ${spinnerStyle}
        ${verticalStyle}
      `;
  
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  
    connectedCallback() {
      this.updateLoader();
    }
  
    static get observedAttributes() {
      return ['type'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'type' && oldValue !== newValue) {
        this.updateLoader();
      }
    }
  
    updateLoader() {
      const type = this.getAttribute('type');
      const wrapper = this.shadowRoot.querySelector('.loader');
      wrapper.innerHTML = '';
  
      if (type === 'spinner') {
        const spinner = createSpinner();
        wrapper.appendChild(spinner);
      } else if (type === 'vertical') {
        const vertical = createVertical();
        wrapper.appendChild(vertical);
      }
    }
  }

customElements.define('my-loader', Loader)