import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const ForEach = () => {
  const forEachElements = (
    array: number[],
    callback: (value: number, index: number, array: number[]) => void
  ): void => {
    console.log(`Array inicial recibido: ${JSON.stringify(array)}`);
    for (let i = 0; i < array.length; i++) {
      console.log(
        `Iteración ${i + 1}: Ejecutando callback con valor=${
          array[i]
        }, índice=${i}`
      );
      callback(array[i], i, array);
    }
    console.log(
      "Se ha recorrido todo el array usando el método manual ForEach."
    );
  };

  const arr = [4, 3, 2];

  console.log("Iniciando método manual ForEach...");
  forEachElements(arr, (value, index, array) => {
    console.log(
      `Callback ejecutado -> Valor actual: ${value}, Índice: ${index}, Array completo: ${JSON.stringify(
        array
      )}`
    );
  });

  return (
    <Link
      href={
        "https://stackblitz.com/edit/stackblitz-starters-kqpjyb2x?file=app%2FForEach.tsx"
      }
      className={style.link_blitz}
    >
      <div className={style.cards}>Muestra un resultado por consola - Método ForEach</div>
    </Link>
  );
};

export default ForEach;
