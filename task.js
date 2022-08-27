// Question # 1

function reversString (userText) {
    var text = userText.toString();
    var newText = '';
    for(var i = 1; i <= text.length; i++){
        newText += text[text.length-i];
    }
    return newText;
}

reversString(34567810);

// Question # 2

function checkString (userText){
    var text = userText.replace(/\s|[,.?"'!]/g,'').toLowerCase();
    console.log(text);
    var newText = '';
    for(var i = 1; i <= text.length; i++){
        newText += text[text.length-i];
    }
    if(newText === text){
        return "Is Palindrome Text";
    }
}

checkString("We panic in a pew"); 

// Question  # 3 

function possibleCombinations(value){
    var string = value;
    var newString = string.replace(/\s/g, '');
    var finalArray = [];
    for (let i = 0; i < newString.length; i++){
        finalArray.push(newString[i]);
        
       for(let j = 1; j <= newString.length; j++){
           var getstring = newString.slice(i, j);
           if(getstring !== ''){
               finalArray.push(getstring);
           }
           
       }
    }
    return finalArray();
}

// Question # 4 

function returnAlphabeticalStrings(text){
    var string = text;
    var spliteString = text.split('');
    var sortString = spliteString.sort();
    var finalString = '';
    for(var i = 0; i < sortString.length; i++){
        finalString += sortString[i];
    }
    return finalString;
}

// Question # 5 

function firstLetterUpperCase(text){
    var string = text;
    var spliteString = text.split(' ').filter((x) => x);
    console.log(spliteString);
   var finalString = '';
    for(var i = 0; i < spliteString.length; i++){
        
        finalString += spliteString[i].replace(spliteString[i][0], spliteString[i][0].toUpperCase()) + ' ';
    }
    return finalString;
}

firstLetterUpperCase('this is');

// Question # 6 

function findLongString(text){
    var splitString = text.split(' ').filter((x) => x);
    var longString = '';
    for(var i = 0; i < splitString.length; i++){
        if(splitString[i].length > longString.length){
            longString = splitString[i];
        }
    }
    return longString;
}

findLongString("web Development Tutorial");

// Question # 7 

function countVowel(text) {
    var count = text.match(/[aeiou]/gi).length;
    return count;
}

 countVowel("string");

// Question # 8 

function checkPrime(num){
    if (num % 2 === 0) {
     return "is not prime number";
    }
    return "is prime number";
}

checkPrime(3);

// Question # 9

function checkTypeOf(text){
    return typeof text;
}

checkTypeOf("check type");

// Question # 10

var arr=[23,45,78,23];
function findSecondLargeandSmallNumber(array){
    var sortArray= array.sort();
    var secondSmallNumber = sortArray[1];
    var secondLargeNumber = sortArray[sortArray.length-2];
    return "second smaller = " + secondSmallNumber + " and second greater = "+ secondLargeNumber;
}

findSecondLargeandSmallNumber(arr);