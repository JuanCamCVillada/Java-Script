export default function numeros(numero) {
  var resultado = 0;

  if (numero % 2 === 0) {
    resultado = "Par";
  } else {
    resultado = "Impar";
  }

  return resultado;
}
