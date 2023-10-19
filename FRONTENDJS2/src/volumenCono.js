import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";

export class volumenCono extends LitElement{

    static get styles() {
        return[
          styleScss
        ];
      }
   
    volumencono() {
        var r = parseFloat(this.shadowRoot.getElementById("r").value);
        var h = parseFloat(this.shadowRoot.getElementById("h").value);
      
        if (r !== "" && h !== "") {
          const x = (1/3) * Math.PI * Math.pow(r, 2) * h; 
          this.shadowRoot.getElementById("resultado").value = x.toFixed(2) + " Volumen del cono "
          ; 
        }
      }
      
      render() {
        return html`
          <h2>VOLUMEN DEL CONO</h2>
    
          <div class="imagen">
          <img src="./img/cono.png">
          </div> 
      
          <div class="a">
          <label for="r">DIJITE R</label>
          <input type="number" id="r" @change="${this.volumencono}"><br><br>

          <label for="h">DIJITE H</label>
          <input type="number" id="h" @change="${this.volumencono}"><br><br>
          </div>
      
          <div class="resultado">
          <label for="res">RESULTADO: </label>
          <input type="text" disabled id="resultado">
          </div>
        `;
      }
    }

customElements.define("volumen-cono",volumenCono);