function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // set lowest index
    let lowest = i;

    // compare loop
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // check swap
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
}

selectionSort([34, 22, 10, 19, 17]);
