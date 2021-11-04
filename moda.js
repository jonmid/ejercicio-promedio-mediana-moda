const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (elementoA, elementoB) {
  return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1];

// console.log('lista1: ', JSON.stringify(lista1));
// console.log('lista1Count: ', lista1Count);
// console.log('lista1Array: ', JSON.stringify(lista1Array));
// console.log('moda: ', JSON.stringify(moda));
