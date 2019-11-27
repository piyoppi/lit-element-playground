import { LitElement, html } from 'lit-element';

class SampleElement extends LitElement {
  constructor() {
    super();
    this.name = 'default name';
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  render(){
    return html`
      <p>${this.name}</p>
    `;
  }
}

customElements.define('sample-element', SampleElement);
