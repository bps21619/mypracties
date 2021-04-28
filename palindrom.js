function checkPalindrom(str){
    //check length of string

    const length = string.length;
    // check is string is empty or not
    if (length == 0)
    return "given string is empaty";
    console.log(string.toUpperCase())
    console.log([...string].reverse().join(""))

    let array= string.split('')
    for (var i =0;i<array.length/2;i++)
    {
        if (array[i] == array[array.length-1-i]){
    return (array)
}
else
{
    return "no array";
}
}
    // check string is palindrom or not using loop

    for (var i=0;i<length/2;i++)
    {
        if (string[i] !== string[string.length-1-i])
        return "given string is not palindrom";
    }
    return " palindrom";



}
const prompt = require("prompt-sync");
const input = prompt();
let string = input("enter astring: ")


console.log(checkPalindrom(string))







