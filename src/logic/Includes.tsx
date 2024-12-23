import React from "react";

const includesElements = (x: number) => {
  const arr: number[] = [1, 2, 3];

  for (let i = 0; i < arr.length; i++) {
    const addValue = arr[i];
    
    if (addValue == x) {
      return true;
    }

  }
  return false
};

const Includes = () => {
  console.log(`Metodo manual de Concat >>> ${includesElements(1)}`);

  return (
    <div>
      Muestra un resultado por consola - Metodo Includes
    </div>
  );
};

export default Includes;
