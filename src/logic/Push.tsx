import Link from "next/link";
import React from "react";
import style from "../styles/page.module.css";

const myComponent = (x: number) => {
  const arr: number[] = [1, 2, 3];
  console.log(`Array inicial: ${JSON.stringify(arr)}`);

  const newElement: number = x;
  console.log(`Nuevo elemento a agregar: ${newElement}`);
  arr[arr.length] = newElement;
  console.log(
    `Array después de agregar el nuevo elemento: ${JSON.stringify(arr)}`
  );

  return arr;
};

const Push = () => {
  console.log(`Metodo manual de Push >>> ${JSON.stringify(myComponent(101))}`);

  return (
    <>
      <Link
        href={
          "https://stackblitz.com/edit/stackblitz-starters-6nypfpah?file=app%2FPush.tsx"
        }
        className={style.link_blitz}
      >
        <div className={style.cards}>Muestra un resultado por consola - Metodo Push</div>
      </Link>
    </>
  );
};

export default Push;
