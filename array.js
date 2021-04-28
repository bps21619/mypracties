var A = "every day is a chance to get better"

var B = A.split(" ")
/*for(var i=0;i<B.length;i++)
console.log(B[i])

console.log(B.toString())
console.log(B.join("^"))
console.log(B.pop())
console.log(B.push('Better'))
//console.log(B)

console.log(B.shift())
console.log(B.unshift("every"))

console.log(B[B.length]= 'bps')
console.log(B)
console.log(delete B[0])
console.log(B+'\n'+"hi")


console.log(B.splice(2,1))



console.log("slice: "+B.slice(1,4))

console.log("tostring(): "+B.toString())

console.log("sort(): "+B.sort())


console.log("reverse:"+B.reverse())

var num = [23,33,4,45,6,7,1,2,8,9,0,]

console.log(num.sort(function(a,b){return a-b}))

console.log(num.sort(function(x,y){return y-x}))

console.log(num.sort())


console.log(num.sort(function(x,y){return 1.5 -Math.round()}))



 for(i = num.length-1;i>0;i--){
    j = Math.floor(Math.round()*i)
    k = num[i]
    num[i]=num[j]
    num[j]=k
}
console.log(num)*/



//console.log(function myarray(num){return Math.max.apply(null,num)})

var num = [23,33,4,45,6,7,1,2,8,9,0,]

/*num.forEach(function(array){
    let a = array
    console.log(a)
})*/

//console.log(num.filter(num=> 15<=num))


/*console.log(num.map(function(a,){
    return a*3;
}))*/

console.log(num.reduceRight(function(total){
    return total+2;
}))

//var d = new Date()
//console.log(new Date().setFullYear(2020,10,3))
//console.log(d.getFullYear())