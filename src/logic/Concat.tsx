import React from 'react';

const concatElements = () => {
  const arr_1: number[] = [1,2,3];
  const arr_2: number[] = [4,5,6];

  for(let i=0; i < arr_2.length; i++){
    arr_1[arr_1.length] = arr_2[i]
  }
  return arr_1
}

const Concat = () => {
  console.log(`Metodo manual de Concat >>> ${concatElements()}`); 

  return (
    <div>
      Muestra un resultado por consola - Metodo Concat
    </div>
  );
};

export default Concat;