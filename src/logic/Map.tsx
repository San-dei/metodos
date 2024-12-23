const manualMap = (
  arr: number[],
  manualMap: (currentValue: number, index: number, array: number[]) => void
): void => {
  for (let i = 0; i < arr.length; i++) {
    manualMap(arr[i], i, arr);
  }
};

const mapElements = () => {
  const arr: number[] = [1, 2, 3];
  const arr_2: number[] = [];

  manualMap(arr, (curentValue, index, array) => {
    arr_2[index] = arr[index];
    const result = arr_2[index] * 2;
    console.log(
      `array x 2: ${result}\nValor actual Map: ${curentValue}, Indice map: ${index} , Array map: ${array}`
    );
  });
};

const Map = () => {
  console.log(`Metodo manual de Map >>> ${mapElements()}`);

  return (
    <div>
      Muestra un resultado por consola - Metodo Map
    </div>
  );
};

export default Map;
