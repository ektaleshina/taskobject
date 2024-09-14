function truePalindrome(string) {
    const stringLen = string.length,
      stringReverse = string.split("").reverse().join("");
    if (stringReverse === string) {
      return "Cлово является палиндромом";
    } else {
      return "Слово не явлется палиндромом";
    }
  }
  
  let a = truePalindrome("довод");
  
  console.log(a);


const unArr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const uniqueSet = new Set(unArr); 
const uniqueArr = Array.from(uniqueSet);



const number = prompt('Введите любое число:');
let newNum = [];
for (let i = 0; i <= number; i += 1) {
    newNum.push(i);
}

console.log(newNum);



const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

obj['arrValues'] = Object.values(obj);