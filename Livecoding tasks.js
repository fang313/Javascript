// #1 is Palindrom Является ли слово палиндромом
//

function palindrom(str){
    str = str.toLowerCase();
    str2 = str.split('').reverse().join('');
    if (str === str2) 
        console.log(str + ' is palindrom')
    else 
        console.log(str + ' is NOT palindrom')
}
palindrom('addavalue')

// Второе решение через стрелочную функцию 

const palindrome = str => {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}

// #2 Поиск гласных

const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()){
        if (vowels.includes(char))
            count ++
    }
    console.log(count)
}

// #3 Числа Фибоначчи

const fibbonachi = num => {
    const result = [0, 1]

    for (let i = 2; i <= num; i++){
        const prevnum1 = result[i - 1]
        const prevnum2 = result[i - 2]
        result.push(prevnum1 + prevnum2)
    }
    console.log(result(num))
}

// Через рекурсию 

const fibbonachi2 = num => {
    if (num < 2){
        return(num)
    }
    return fibbonachi2(num - 1) + fibbonachi2 (num - 2)
    console.log(num)
}

// #4 FizzBuzz Поиск кратных чисел 

const fizzbuzz = num => {
    for (let i = 0; i < num; i++)
        if (i % 3 === 0 && i % 5 === 0)
            console.log('FizzBuzz')
        else if (i % 3 === 0) {
            console.log('Fizz')   
        }
        else if (i % 5 === 0){
            console.log('Buzz')   
        }
        else {
            console.log(i)
        }

}

// #5 Анаграмма Все буквы одного слова содержатся в другом

const anagramma = (str1, str2) => {
    if (str1.split('').sort().join('') === str2.split('').sort().join('')){
        console.log(str1 + " anagramma of word " + str2)
    }
}


// Неразобранное 

// 2 Суммы

var twoSum = function (nums, target) {
    let map = {}
    for(let i = 0;i < nums.length;i++){
        if(target - nums[i] in map){
           return [map[target - nums[i]],i]
         }else{
             map[nums[i]] = i
         }
    }
};