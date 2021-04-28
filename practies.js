//checks given string is palindrom or not

const prompt = require("prompt-sync");
const input = prompt();
function bps(){

// input form taken from user
    let str = input("enter a some palindrom string: ")
//lets check given string is empty or not
      if (typeof str !== 'string')
      console( "not a string")

    if (str.length == 0)
         console.log("given string is empaty")
for(let i=0;i<str.length/2;i++)
{
          if (str[i] == str[str.length-i]){
            console.log("given string is palindrom,string is: ",str)
              
          }
           else{
                
                console.log('good bye')
           }
}
}
 bps()


 //const a= [...str].reverse().join('')

// console.log(str==a? 'panlindrom'  : 'not palindrom')