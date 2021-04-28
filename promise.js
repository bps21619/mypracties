async function bps(info){
    console.log(await info)

}
let myPromise = new Promise(function(myresolve,myreject){

const XMLHttpRequest = require("XMLHttpREquest").XMLHttpRequest;
    var req = new XMLHttpRequest();
 req.open('GET',"bps.html");
 req.onload = function(){
     if(req.stastus==200){
         myresolve(req.response);
     }else{
      myreject("file not found")

     }
 };
 req.send();
});
 myPromise.then(function(value) {bps(value)},
                function(error) {bps(error)})