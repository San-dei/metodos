const ForEach= () => {
  const forEachElements = (
    array: number[],
    callback: (value: number, index: number, array: number[]) => void
  ): void => {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  };

  const arr = [4, 3, 2];

  forEachElements(arr, (value, index, array) => {
    console.log(`Valor actual: ${value}, Índice: ${index}, Array: ${array}`);
  });

  return (
    <div>
      Abre la consola para ver los resultados.
    </div>
  );
};

export default ForEach;
