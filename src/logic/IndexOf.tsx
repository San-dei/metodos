import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const indexOfElements = (x: number): number => {
  const arr: number[] = [1, 2, 3, 4, 5, 6];
  console.log(`Array inicial: ${JSON.stringify(arr)}`);
  console.log(`Buscando el índice del valor: ${x}`);

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    console.log(
      `Iteración ${i + 1}: Valor actual = ${currentValue}, Índice actual = ${i}`
    );

    if (currentValue === x) {
      console.log(`¡Valor encontrado! El índice de ${x} es ${i}.`);
      return i;
    }
  }

  console.log(`El valor ${x} no se encuentra en el array.`);
  return -1; // Devuelve -1 si no se encuentra el valor, como lo hace indexOf
};

const IndexOf = () => {
  console.log("Iniciando método manual IndexOf...");

  // Prueba con un valor existente
  const valueToSearch1 = 3;
  const result1 = indexOfElements(valueToSearch1);
  console.log(`Resultado para ${valueToSearch1}: ${result1}`);

  // Prueba con un valor inexistente
  const valueToSearch2 = 10;
  const result2 = indexOfElements(valueToSearch2);
  console.log(`Resultado para ${valueToSearch2}: ${result2}`);

  return (
    <Link
      href={
        "https://stackblitz.com/edit/stackblitz-starters-ashcoseh?file=app%2FIndexOf.tsx"
      }
      className={style.link_blitz}
    >
      <div className={style.cards}>Muestra un resultado por consola - Método IndexOf</div>
    </Link>
  );
};

export default IndexOf;
