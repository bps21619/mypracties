async function bps(){
    let p = new Promise(function(myResolve,myReject){
        setTimeout(function(){myResolve("bps....")},3000)
    })
    console.log(await p)
}
bps();