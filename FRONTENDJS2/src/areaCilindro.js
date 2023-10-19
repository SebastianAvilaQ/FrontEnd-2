import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";

export class areaCilindro extends LitElement{

    static get styles() {
        return[
          styleScss
        ];
      }
   
    areacilindro() {
        var r = parseFloat(this.shadowRoot.getElementById("r").value);
        var h = parseFloat(this.shadowRoot.getElementById("h").value);
      
        if (r !== "" && h !== "") {
          const x = 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h; 
          this.shadowRoot.getElementById("resultado").value = x.toFixed(2) + " Área del cilindro";
        }
      }
      
      render() {
        return html`
          <h2>ÁREA DEL CILINDRO</h2>
    
          <div class="imagen">
          <img src="./img/cilindro.png">
          </div> 
      
          <div class="a">
          <label for="r">DIGITE R</label>
          <input type="number" id="r" @change="${this.areacilindro}"><br><br>

          <label for="h">DIGITE H</label>
          <input type="number" id="h" @change="${this.areacilindro}"><br><br>
          </div>
      
          <div class="resultado">
          <label for="res">RESULTADO: </label>
          <input type="text" disabled id="resultado">
          </div>
        `;
      }
    }

customElements.define("cilindro-area",areaCilindro);