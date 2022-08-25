// Линейный поиск


const arr = [1, 2, 3, 4, 5, 6, 8, 9, 12];

const linearSearch = function(arr, num){

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num){
            return i;
        }
    }
    return null
}

console.log(linearSearch(arr,5))

// Бинарный поиск

const arr2 = [-1,0, 2, 4, 5, 6, 8, 9, 12];

const search = function (nums, target){
    let left = 0;
    let right = nums.length - 1;
    let separator; 

    while (left <= right){
        mid = Math.round((right - left)/2 + left)

        if (target === nums[mid]){
            return mid
        } 
        else if (target < nums[mid]){
            right = mid - 1; 
        }
        else {
            left = mid + 1
        }
    }
    return -1;
}

console.log(search(arr2,4))


// 


const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('count', count)


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const binarySearch = function(arr, item){
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end){
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item){
            found = true
            position = middle
            return position;
        }
        if (item < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position
}

console.log(binarySearch(arr, 15))


const arr = [0,3,2,5,6,8,23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,]

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))


// Рекурсивная функция 
// Вычисление факториала

const factorial = (n) =>{
    if (n === 1){
        return 1;
    }
    return n * factorial(n - 1)
}


// Числа фиббоначи через рекурсию

const fibbonachi = (n) => {
    if (n === 1 || n === 2){
        return 1
    }

    return fibbonachi(n - 1) + fibbonachi (n - 2)
}


const fibbonachi = (n) => {
    if (n === 1 || n === 2){
        return 1
    }

    return fibbonachi(n - 1) + fibbonachi (n - 2)
}

console.log(fibbonachi(8))


const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true
            position = middle
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

console.log(binarySearch(array, 3))
