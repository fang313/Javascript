// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let num = 2 
let maxsteps = 2

for (let step=1; step <= maxsteps; step++) {
    let itog = num ** step
    console.log (num + " в степени " + step + " равно " + itog)
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function number_stepen (num2, maxsteps2) {
    for (let step2=1; step2 <= maxsteps2; step2++) {
    let itog2 = num2 ** step2;
    console.log (num2 + " в степени " + step2 + " равно " + itog2)
    }
}
number_stepen (3,2)
    
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let text = (":)")
let smiletext = (":)")
let iterations = 5

for (let step3=1; step3 <= iterations; step3++){
    console.log (smiletext)
    smiletext=smiletext+text
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 

function printSmile(stroka, numberOfRows)
    {
    let textX = ""
    for (let step4=1; step4 <= numberOfRows; step4++){
    textX = textX + stroka
    console.log (textX)
}
}
printSmile ("=)", 3)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'


// Вариант 1 


function getWordStructure (entertext) {

    const vowels = ["a","A","e","E","i","I","o","O","y","Y","u","U"]
    const consonants=["b","B","c","C","d","D","f","F","g","G","h","H","k","K","l","L","m","M","n","N","p","P","q","Q","r","R","s","S","t","T","v","V","w","W","x","X","z","Z"]
    
    let countervowels = 0
    let counterconsonants = 0 
    
        for (r = 0; r < entertext.length; r++){         //r - runner, пробегает по ввееденному тексту
            for (vr = 0; vr < vowels.length; vr++){     // vr - vowels runner пробегает по массиву гласных
                if (entertext[r] === vowels[vr]){       // сравниваем букву в слове под номером "r" с буквами массива vowels
                    countervowels++
                    break
                }
            }
            for (cr = 0; cr < consonants.length; cr++){ //cr - consonants runner пробегает по массиву согласных
                if (entertext[r] === consonants[cr]){   // сравниваем букву в слове под номером "r" с буквами массива consonants
                    counterconsonants++
                    break
                }
            }
             
        }
    console.log('Слово ' + entertext + ' состоит из ' + countervowels + ' гласных и ' + counterconsonants + ' согласных')  
    }
    getWordStructure('smart oleg')   
    getWordStructure('case')
    getWordStructure('Case')
    getWordStructure('Check-list')


// Вариант 2 


function getWordStructure (entertext) {

    const vowels = 'aeioyu'.split('')                               // массив гласных
    const consonants='bcdfghjklmnpqrstvwxz'.split('')               // массив согласных
    let countervowels = 0                                           // счетчик гласных
    let counterconsonants = 0                                       // счетчик согласных
    
    for (readytext of entertext.toLowerCase()){                     // вводим новую переменную, приводим вводимый текст к нижнему регистру
        if (vowels.includes(readytext)) countervowels++             // если в массиве есть буквы из приведенного текста, то увеличиваем счетчик
        else if (consonants.includes(readytext)) counterconsonants++ 
    }
    console.log('Слово ' + entertext + ' состоит из ' + countervowels + ' гласных и ' + counterconsonants + ' согласных')  
    }
    getWordStructure('smart oleg')
    
// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

// Вариант 1 

function isPalindrom(word){
    let reverseword = word.split('').reverse().join('')             //нагуглил. Преобразовываем в массив который разбиваеться, разворачивается, потом собираеться
        if (word.toLowerCase() == reverseword.toLowerCase())        //сравниваем наши результаты в нижнем регистре
        console.log(word + " is palindrom")
        else console.log(word + " is NOT palindrom")
}

isPalindrom('Ruscable')
isPalindrom ('abba')
isPalindrom ('Abba')

// Вариант 2




