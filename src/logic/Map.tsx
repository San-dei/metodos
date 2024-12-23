import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const manualMap = (
  arr: number[],
  callback: (currentValue: number, index: number, array: number[]) => number
): number[] => {
  const resultArray: number[] = [];

  console.log(`Array inicial: ${JSON.stringify(arr)}`);

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];

    console.log(
      `Iteración ${
        i + 1
      }: Valor actual = ${currentValue}, Índice actual = ${i}, Array actual = ${JSON.stringify(
        arr
      )}`
    );

    resultArray[i] = callback(currentValue, i, arr);
  }

  console.log(
    `Array resultado después de aplicar 'callback': ${JSON.stringify(
      resultArray
    )}`
  );
  return resultArray;
};

const mapElements = () => {
  const arr: number[] = [1, 2, 3];

  const result = manualMap(arr, (currentValue, index, array) => {
    console.log(
      `Valor actual Map: ${currentValue}, Índice map: ${index}, Array map: ${JSON.stringify(
        array
      )}`
    );
    return currentValue * 2;
  });

  return result;
};

const Map = () => {
  console.log("Iniciando método manual de Map...");
  const result = mapElements();
  console.log(
    `Resultado final de la función 'mapElements': ${JSON.stringify(result)}`
  );

  return (
    <Link
      href={
        "https://stackblitz.com/edit/stackblitz-starters-xhxt1mwl?file=app%2FMap.tsx"
      }
      className={style.link_blitz}
    >
      <div className={style.cards}>Muestra un resultado por consola - Método Map</div>
    </Link>
  );
};

export default Map;
