import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";

export class gradosF extends LitElement {
  static get styles() {
    return[
      styleScss
    ];
  }

  gradosFahrenheit() {
    var c = parseFloat(this.shadowRoot.getElementById("c").value);
  
    if (c !== "") {
      const x = (c * 1.8) + 32; 
      this.shadowRoot.getElementById("resultado").value = x.toFixed(2) + " grados Fahrenheit"; 
    }
  }
  
  render() {
    return html`
      <h2>Hallar grados Fahrenheit</h2>

      <div class="imagen">
      <img src="./img/capturaf.png">
      </div> 
  
      <div class="a">
      <label for="c">DIJITE C°</label>
      <input type="number" id="c" @change="${this.gradosFahrenheit}"><br><br>
      </div>
  
      <div class="resultado">
      <label for="resultado">RESULTADO:  </label>
      <input type="text" disabled id="resultado">
      </div>
    `;
  }
}

customElements.define("grados-f", gradosF);