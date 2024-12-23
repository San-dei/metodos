import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const concatElements = () => {
  const arr_1: number[] = [1, 2, 3];
  const arr_2: number[] = [4, 5, 6];

  console.log(`Array inicial arr_1: ${JSON.stringify(arr_1)}`);
  console.log(`Array a concatenar arr_2: ${JSON.stringify(arr_2)}`);

  for (let i = 0; i < arr_2.length; i++) {
    arr_1[arr_1.length] = arr_2[i];
    console.log(
      `Paso ${i + 1}: Se añade ${
        arr_2[i]
      } al final de arr_1. Estado actual: ${JSON.stringify(arr_1)}`
    );
  }

  console.log(
    `Resultado final del método manual de Concat: ${JSON.stringify(arr_1)}`
  );
  return arr_1;
};

const Concat = () => {
  console.log("Método manual de Concat ejecutándose...");
  concatElements();

  return (
    <Link
      href={
        "https://stackblitz.com/edit/stackblitz-starters-whvmhr78?file=app%2FConcat.tsx"
      }
      className={style.link_blitz}
    >
      <div className={style.cards}>Muestra un resultado por consola - Método Concat</div>
    </Link>
  );
};

export default Concat;
