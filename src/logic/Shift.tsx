import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const removeFirstElement = () => {
  const arr: number[] = [3, 1, 2, 3];
  console.log(`Array inicial: ${JSON.stringify(arr)}`);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    console.log(`Iteración ${i + 1}: Array actual = ${JSON.stringify(arr)}`);
  }

  console.log(
    `Array después de intentar eliminar el primer elemento: ${JSON.stringify(
      arr
    )}`
  );
  return arr;
};

const Shift = () => {
  console.log(
    `Metodo manual de Shift >>> ${JSON.stringify(removeFirstElement())}`
  );
  return (
    <>
      <Link
        href={
          "https://stackblitz.com/edit/stackblitz-starters-o8n9uczz?file=app%2FShift.tsx"
        }
        className={style.link_blitz}
      >
        <div className={style.cards}>Muestra un resultado por consola - Metodo Shift</div>
      </Link>
    </>
  );
};

export default Shift;
