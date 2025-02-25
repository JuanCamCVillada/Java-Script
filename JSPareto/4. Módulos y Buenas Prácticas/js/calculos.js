export function division(numeroA, numeroB) {
  try {
    if (numeroB === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return numeroA / numeroB;
  } catch (error) {
    console.error("Error en la division: ", error);
  }
}
