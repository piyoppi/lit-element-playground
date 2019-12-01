import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class SampleTextbox extends LitElement {
  constructor() {
    super();
    this.regexp = '';
    this.list = []; 
    this.message = '';
    this.messageClasses = {
      hidemsg: false
    }
  }

  static get properties() {
    return {
      list: { type: Array },
      regexp: { type: String },
      message: { type: String },
    };
  }

  static get styles() {
    return css`
      input {
        border: 1px solid gainsboro;
        padding: 10px 20px;
        border-radius: 3px;
      }

      .hidemsg {
        display: none;
      }
    `;
  }

  isValid(value) {
    const re = new RegExp(this.regexp);
    console.log(value.match(re));
    return !!value.match(re);
  }

  validate(e) {
    if( !this.regexp ) return;
    this.messageClasses = {
      hidemsg: this.isValid(e.target.value.toString())
    }
    this.requestUpdate();
  }

  render(){
    return html`
      <div>
        <input id="text" @input="${this.validate}" type="textbox"></input>
        <span class="${classMap(this.messageClasses)}">${this.message}</span>
      </div>
    `;
  }
}

customElements.define('sample-textbox', SampleTextbox);
