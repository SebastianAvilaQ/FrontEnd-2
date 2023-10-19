import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";


export class gradosk extends LitElement {
  static get styles() {
    return[
      styleScss
    ];
  }

  gradosKelvin() {
    var a = parseFloat(this.shadowRoot.getElementById("a").value);
  
    if (a !== "") {
      const x = (5/9 * (a - 32) + 273.15); 
      this.shadowRoot.getElementById("resultado").value = x.toFixed(2) + " grados Kelvin"; 
    }
  }
  
  render() {
    return html`
      <h2>Hallar grados Kelvin</h2>

      <div class="imagen">
      <img src="./img/captura.png">
      </div> 
  
      <div class="a">
      <label for="a">DIJITE F°</label>
      <input type="number" id="a" @change="${this.gradosKelvin}"><br><br>
      </div>
  
      <div class="resultado">
      <label for="resultado">RESULTADO:  </label>
      <input type="text" disabled id="resultado">
      </div>
    `;
  }
}

customElements.define("my-funcu", gradosk);