import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const includesElements = (x: number): boolean => {
  const arr: number[] = [1, 2, 3];
  console.log(`Array inicial: ${JSON.stringify(arr)}`);
  console.log(`Buscando el valor: ${x}`);

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    console.log(
      `Iteración ${i + 1}: Valor actual = ${currentValue}, Comparando con ${x}`
    );

    if (currentValue === x) {
      console.log(`¡Valor encontrado! ${x} está presente en el array.`);
      return true;
    }
  }

  console.log(`El valor ${x} no se encuentra en el array.`);
  return false;
};

const Includes = () => {
  console.log("Iniciando método manual Includes...");

  // Prueba con el valor 1
  const valueToSearch1 = 1;
  const result1 = includesElements(valueToSearch1);
  console.log(`Resultado para ${valueToSearch1}: ${result1}`);

  // Prueba con el valor 5
  const valueToSearch2 = 5;
  const result2 = includesElements(valueToSearch2);
  console.log(`Resultado para ${valueToSearch2}: ${result2}`);

  return (
    <Link
      href={
        "https://stackblitz.com/edit/stackblitz-starters-utcbcz5r?file=app%2FIncludes.tsx"
      }
      className={style.link_blitz}
    >
      <div className={style.cards}>Muestra un resultado por consola - Método Includes</div>
    </Link>
  );
};

export default Includes;
