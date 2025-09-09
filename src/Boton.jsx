import * as math from "mathjs";
function Boton({ array, idem, Entrada, setEntrada, setResult, Result }) {
  return (
    <>
      {array.map((boton, index) => {
        const simb = `${idem + index + 1}`;
        return (
          <div
            onClick={() => {
              if (
                boton !== "=" &&
                boton !== "<=" &&
                boton !== "sin" &&
                boton !== "deg"
              ) {
                if (boton == "e") {
                  let x = `${boton} ^`;
                  setEntrada(Entrada + x);
                }
                if (boton !== "e") {
                  setEntrada(Entrada + boton);
                }
              }
              if (boton == "deg") {
                try {
                  let x = math.evaluate(Entrada);
                  let pi = (x * math.pi) / 180;
                  let y = `${x.toFixed(3)} ° o ${pi.toFixed(3)} rad`;
                  setResult(y);
                } catch (err) {
                  console.log(err.message);
                }
              }
              if (boton == "sin" && Entrada) {
                let x = Entrada;
                let y = `sin (${x} deg)`;
                setResult(math.evaluate(y));
              }
              if (boton == "=") {
                if (Entrada.includes("μ")) {
                  let x = Entrada.split("μ");
                  let y = `Precio Final ${
                    parseInt(x[0]) + (parseInt(x[0]) * parseInt(x[1])) / 100
                  }`;
                  setResult(y);
                }
                if (!Entrada.includes("μ"))
                  try {
                    setResult(math.evaluate(Entrada));
                  } catch (err) {
                    console.log(err.message);
                    setResult("Error de sintaxsis");
                  }
              }
              if (boton == "<=") {
                setEntrada(Entrada.slice(0, -1));
              }
              if (boton == "Ac") {
                setEntrada("");
                setResult("");
              }
            }}
            key={index}
            id={simb}
            className="simbolos"
          >
            {boton}
          </div>
        );
      })}
    </>
  );
}
export default Boton;
