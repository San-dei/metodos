import React from 'react';

const removeFirstElement = () => {
  const arr: number[] = [3,1, 2, 3];

  for(let i = 0; i < arr.length ; i++){
    arr[i] = arr[i+1]
  }
  return arr
}

const Shift = () => {
  console.log(`Metodo manual de Shift >>> ${removeFirstElement()}`); 

  return (
    <div>
      Muestra un resultado por consola - Metodo Shift
    </div>
  );
};

export default Shift;