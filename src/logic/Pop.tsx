import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const removeLastElement = () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  console.log(`Array inicial: ${JSON.stringify(arr)}`);

  arr.length = arr.length - 1;

  console.log(
    `Array después de eliminar el último elemento: ${JSON.stringify(arr)}`
  );
  return arr;
};

const Pop = () => {
  console.log(
    `Metodo manual de Pop >>> ${JSON.stringify(removeLastElement())}`
  );

  return (
    <Link
      href={
        "https://stackblitz.com/edit/stackblitz-starters-vrductok?file=app%2FPop.tsx"
      }
      className={style.link_blitz}
    >
      <div className={style.cards}>Muestra un resultado por consola - Metodo Pop</div>
    </Link>
  );
};

export default Pop;
