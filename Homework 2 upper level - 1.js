let age_1 = 10 
let age_2 = 18 
let age_3 = 60 

let checkAge = function(age) {
    const agenumber = Number (age);

    if (typeof agenumber == 'number' && (age < age_2)) 
        console.log("You dont have access cause your age is " + age + " Its less then " + age_2)
        else if (agenumber >= age_2 && age < age_3) {
        console.log("Welcome !")
    }   else if (agenumber > age_3) {
            console.log("Keep calm and look Culture channel")
    }
        else if (typeof agenumber == 'number') {
        console.log("Error") 
    }   else{
    console.log("Technical work") 
    } 
}

checkAge (17)
checkAge (18)
checkAge (61)
checkAge ('2')
checkAge (false)

/* let EnterAge = prompt ('Enter you age','');
checkAge (EnterAge)  */