import React from 'react';

const removeLastElement = () => {
  const arr: number[] = [1, 2, 3, 4,5];
    arr.length = arr.length - 1

    return arr
}

const Pop = () => {
  console.log(`Metodo manual de Pop >>> ${removeLastElement()}`); 

  return (
    <div>
      <h1>Muestra un resultado por consola - Metodo Pop</h1>
    </div>
  );
};

export default Pop;