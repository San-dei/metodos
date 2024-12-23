import React from "react";

const indexOfElements = (x:number ) => {
  const arr: number[] = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < arr.length; i++) {
    const newValue = i
    if(x > arr.length ) return -1
    if(newValue == x) return arr[newValue]
}

};

const IndexOf = () => {
  console.log(`Metodo manual de IndexOf >>> ${indexOfElements(3)}`);

  return (
    <div>
      Muestra un resultado por consola - Metodo IndexOf
    </div>
  );
};

export default IndexOf;
