import { css } from "lit-element";

export default css`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;

}



body{
    min-height: 100vh;
    background-color: #3CA6A6;
    justify-content: center;    
    align-items: center;
    text-align: center;
    display: grid;
}

.imagen {
    max-width: 100%;
    max-height: 100%;
  }


.a label{
    margin: 1rem;
    color: #black;

}
.a input{
    background-color: #eaeaea;
    width: 10vh;
    border: 1rem;
    border-radius: 10px;
    text-align: center;
 
}

.resultado label{
    margin: 1rem;
    color: #black;

}
.resultado input{
    background-color: #eaeaea;
    width: 45vh;
    border: 1rem;
    border-radius: 10px;
    text-align: center;
 
}

`