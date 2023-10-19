import { LitElement, html } from "lit-element";
import styleScss from "./gradosStyle.js";

export class areaTri extends LitElement{

    static get styles() {
        return[
          styleScss
        ];
      }
   
    areatri() {
        var b = parseFloat(this.shadowRoot.getElementById("b").value);
        var h = parseFloat(this.shadowRoot.getElementById("h").value);
      
        if (b !== "" && h !== "") {
          const x = ((b*h)/2); 
          this.shadowRoot.getElementById("res").value = x.toFixed(2) + " Area del triangulo"; 
        }
      }
      
      render() {
        return html`
          <h2>AREA DEL TRIANGULO</h2>
    
          <div class="imagen">
          <img src="./img/TRIANGULO.png">
          </div> 
      
          <div class="a">
          <label for="b">DIJITE B</label>
          <input type="number" id="b" @change="${this.areatri}"><br><br>

          <label for="h">DIJITE H</label>
          <input type="number" id="h" @change="${this.areatri}"><br><br>
          </div>
        
          <div class="resultado">
          <label for="res">RESULTADO: </label>
          <input type="text" disabled id="res">
          </div>
        `;
      }
    }

customElements.define("triangulo-area",areaTri);