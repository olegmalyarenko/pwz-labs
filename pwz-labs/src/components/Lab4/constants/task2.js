const task2 = `const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

const sortArray = (array) => {
    const positiveNum = [];
    const negativeNum = [];
   
    array.forEach((el) => {
        if(el > 0) return positiveNum.push(el);
        if(el < 0) return negativeNum.push(el);
    });
    let minPozitiveVal = positiveNum[0];
    let maxNegativeVal = negativeNum[0];
    positiveNum.forEach((el) => {
        if(el < minPozitiveVal ){
            minPozitiveVal = el;
       }
    });
    
    negativeNum.forEach((el) => {
       if(el > maxNegativeVal){
          maxNegativeVal = el
        }
    });
   
    console.log('Невідсортований масив:', array);
    console.log('Найменьший позитивний елемент:', minPozitiveVal);
    console.log('Найбільший негативний елемент', maxNegativeVal);
    console.log('масивідсортований масив', selectionSort(array));
    
};
const arr = [16, 15, 7, -1, 0, 3, 9, -2, -9, 7, 8, 8, 20, -5, 6, 14, 20, 7, -7, 3];
sortArray(arr);`;

export default task2;
