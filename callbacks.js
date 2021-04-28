function myconsole(value){
    console.log(value);
}

function mycalculator(num1,num2,mycallback){
try{
    let sum = num1+num2;
   mycallback(sum)
}
catch(error){
    console.log(error)
}
}
mycalculator(2,3,myconsole);

function bps(status){
console.log(status)}
 let p = new Promise( function(A,B){
    let x=0
if(x>0){
var date = new Date()
console.log(setInterval(function(){date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()},4000))
A("ok")
}
else
B("error")

});
p.then(
    function(value){bps(value)},
    function(error){bps(erroe)}
)
