export const calcular = (expresion: string): string => {
  try {
    // Reemplaza 'X' por '*' y '÷' por '/' para las operaciones
    const sanitizedExpression = expresion.replace(/X/g, '*').replace(/÷/g, '/');
    const resultado = Function(`"use strict"; return (${sanitizedExpression})`)();
    return resultado.toString();
  } catch {
    return 'Error';
  }
};
