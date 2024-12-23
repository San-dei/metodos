import React from 'react';

const myComponent = (x: number) => {
  const arr: number[] = [1, 2, 3];
  const newElement: number = x;

  arr[arr.length] = newElement;

  return arr;
};

const Push = () => {
  console.log(`Metodo manual de Push >>> ${myComponent(101)}`); // cambia el numero del parametro por otro numero natural

  return (
    <div>
      Muestra un resultado por consola - Metodo Push
    </div>
  );
};

export default Push;