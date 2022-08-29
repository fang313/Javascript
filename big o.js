// O(1)  Константная сложность
// Постоянное время обработки алгоритма в независимости от входных данных

function getLastArrElement (arr) {
    return arr[arr.length - 1];
}

// O(log n) Логарифмическая сложность
// Бинарный поиск через деление входных данных пополам

let search = function(nums, target) {
    let left = 0
    let right = nums.length - 1;
    let mid; 
    
    while (left <= right){
        mid = Math.round((right - left)/2) + left;
     
        if (target === nums[mid]){
            return mid
        } else if (target < nums[mid]){
            right = mid - 1; 
        } else {
            left = mid + 1
        }
    }
    return -1;
}

// O(n) Линейная сложность
// Цикл перебирает каждый элемент массива
// Время обработки увеличевается пропорционально увеличению входных данных

function getSumOfArray (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum
}



// O(n log n) 
// нет примера

// O (n*n) Квадратичная сложность
// Цикл вложенный в цикл

function getMultiplyList(n) {
    for (let i = 1; i <= n; i++);{
        for (let j = 1; j <= n; j++){
            console.log(`${i} * ${j} = ${i*j}`);
        }
    }
}

// O(n*n*n) Кубическая сложность
// 3 вложенных цикла


// O(2^n)
// Экспоненциальная сложность

function getFib(n) {
    if (n < 2){
        return n;
    }
    return getFib(n-1) + getFib(n-2);
}

// O (n!)
// Факториальная сложность
// Перебо всех возможных вариантов между собой