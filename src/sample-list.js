import { LitElement, html } from 'lit-element';

class SampleElement extends LitElement {
  constructor() {
    super();
    this.list = []; 
  }

  static get properties() {
    return {
      list: { type: Array },
    };
  }

  render(){
    return html`
      <ul>
        ${this.list.map(item => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

customElements.define('sample-list', SampleElement);
