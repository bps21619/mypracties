console.log("bps")

var str = "knowledge is power,but enthusiam pulls the switch."
var str1 = "knowledge is power,but enthusiam pulls the switch"


console.log(str.charAt(4).toUpperCase())
console.log(str.charAt(str.length-5))
console.log(str.charCodeAt(str.length-5))

console.log(str.concat("=","bps"))
console.log(str.endsWith("switch."))
console.log(String.fromCharCode(98))
console.log(str.includes('pulls'))
console.log(str.includes('but',4))
console.log(str.indexOf('pulls'))
console.log(str.indexOf('e',6))
console.log(str.lastIndexOf('the'))
console.log(str.lastIndexOf('but',18))
console.log(str.length)
console.log(str.localeCompare(str1))
console.log(str.match(/th/gi))
function emp(name,age,id){
    this.name=name
    this.age=age
    this.id=id
}
emp.prototype.salary=2000;
var e=new emp("bps",525,1234)
console.log(e.salary,e.name,e.id,e.age)
console.log(str.repeat(2))
console.log(str.replace('the','The'))
console.log(str.replace(/e/gi,'E'))
console.log(str.search( 'but'))
console.log(str.slice(2,9))
console.log(str.slice(3))
console.log(str.split('').reverse())
console.log(str.split(" "))
console.log(str.startsWith('p',0))
console.log(str.substr(3,5).reverse())
console.log(str.substr(-1,-23))
console.log(str.substring(2,25))
console.log(str.substring(-1,2))
console.log (str.toUpperCase())
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
console.log(str.toLowerCase())
console.log(str.toString())
console.log(str.trim())
console.log(str.valueOf())