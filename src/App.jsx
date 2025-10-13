import { useEffect, useState } from "react";
import Boton from "./Boton";
import "./App.css";

function App() {
  const [Entrada, setEntrada] = useState("");
  const [Result, setResult] = useState("");
  useEffect(() => {
    if (Result !== null) {
      setEntrada("");
    }
  }, [Result]);
  const number = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const simbolo1 = ["e", "μ", "sin", "deg"];
  const simbolo2 = ["Ac", "<=", "/", "*"];
  const simbolo3 = ["-", "+", "="];
  return (
    <>
      <div id="conteiner">
        <section id="consol">
          <form action="star">
            <input
              type="text"
              name="star"
              value={Entrada}
              maxLength="10"
              readOnly
              id="star"
              onChange={() => console.log("value alterado")}
            />
          </form>

          <h1>= {Result}</h1>
        </section>
        <div id="boton">
          <Boton
            Entrada={Entrada}
            setResult={setResult}
            Result={Result}
            setEntrada={setEntrada}
            array={simbolo1}
            idem="S1"
          />
          <Boton
            Entrada={Entrada}
            setResult={setResult}
            Result={Result}
            setEntrada={setEntrada}
            array={simbolo2}
            idem="S2"
          />
        </div>
        <div id="boton2">
          <section id="numeros">
            <Boton
              Entrada={Entrada}
              setResult={setResult}
              Result={Result}
              setEntrada={setEntrada}
              array={number}
              idem="Number"
            />
          </section>
          <section id="op">
            <Boton
              Entrada={Entrada}
              setResult={setResult}
              Result={Result}
              setEntrada={setEntrada}
              array={simbolo3}
              idem="S3"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
