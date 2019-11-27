import { LitElement, html } from 'lit-element';

class SampleElement extends LitElement {
  render(){
    return html`
      <p>Sample</p>
    `;
  }
}

customElements.define('sample-element', SampleElement);
