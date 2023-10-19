import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";

export class velocidad extends LitElement{

    static get styles() {
        return[
          styleScss
        ];
      }
   
      velocidad() {
        var d = parseFloat(this.shadowRoot.getElementById("d").value);
        var t = parseFloat(this.shadowRoot.getElementById("t").value);
      
        if (d !== "" && t !== "") {
          const x = (d/t); 
          this.shadowRoot.getElementById("resultado").value = x.toFixed(2) + "km velocidad";
        }
      }
      
      render() {
        return html`
          <h2>VELOCIDAD EN MRU</h2>
    
          <div class="imagen">
          <img src="./img/MRU.png">
          </div> 
      
          <div class="a">
          <label for="d">DIGITE D</label>
          <input type="number" id="d" @change="${this.velocidad}"><br><br>

          <label for="t">DIGITE T</label>
          <input type="number" id="t" @change="${this.velocidad}"><br><br>
          </div>
      
          <div class="resultado">
          <label for="res">RESULTADO: </label>
          <input type="text" disabled id="resultado">
          </div>
        `;
      }
    }

customElements.define("mru-velocidad",velocidad);