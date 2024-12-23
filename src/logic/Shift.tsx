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
      <h1>Muestra un resultado por consola - Metodo Shift</h1>
    </div>
  );
};

export default Shift;