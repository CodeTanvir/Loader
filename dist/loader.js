import { spinnerStyle, createSpinner } from "../src/spinner.js";
import { verticalStyle, createVertical } from "../src/vertical.js";

class Loader extends HTMLElement {
  static get observedAttributes() {
    return ['type'];
}
  constructor() {
      super();

      // Attach a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
      // Create a style element
      const style = document.createElement('style');
       shadow.appendChild(style);

     const type = this.getAttribute('type')
     if(type === 'spinner'){
       style.textContent = `
          ${spinnerStyle}
      `;
      const spinner = createSpinner()
      shadow.appendChild(spinner)

     }
     else if(type === 'vertical'){
     style.textContent = `${verticalStyle}`;
     shadow.appendChild(createVertical())
     }
     
      
  }
}

// Define the new element
customElements.define('my-loader', Loader);
