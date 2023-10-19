import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";

export class distanciaMRU extends LitElement{

    static get styles() {
        return[
          styleScss
        ];
      }
   
      distancia() {
        var v = parseFloat(this.shadowRoot.getElementById("v").value);
        var t = parseFloat(this.shadowRoot.getElementById("t").value);
      
        if (v !== "" && t !== "") {
          const d = v*t; 
          this.shadowRoot.getElementById("resultado").value = d.toFixed(2) + " metros";
        }
      }
      
      render() {
        return html`
          <h2>DISTANCIA EN MRU</h2>
    
          <div class="imagen">
          <img src="./img/MRU.png">
          </div> 
      
          <div class="a">
          <label for="v">DIGITE V</label>
          <input type="number" id="v" @change="${this.distancia}"><br><br>

          <label for="t">DIGITE T</label>
          <input type="number" id="t" @change="${this.distancia}"><br><br>
          </div>
      
          <div class="resultado">
          <label for="res">DISTANCIA RECORRIDA: </label>
          <input type="text" disabled id="resultado">
          </div>
        `;
      }
    }

customElements.define("mru-distancia",distanciaMRU);