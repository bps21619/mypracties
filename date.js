var d=new Date()
console.log(d+"\n");


var d1 = new Date(2012,11,23,12,23,59,657585)
console.log(d1);

var d2 = new Date(123456)
console.log(d2);


var d3 = new Date("March 23,2012 23:23:23:2323 ")
console.log(d3)

console.log(new Date("2020-04-24T12:00:00Z"));
console.log(new Date("2021-04-23T12:00:00-02:30")+'\n');

console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getDate())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getUTCMilliseconds())
console.log(d.getSeconds())
console.log(d.getTime())
console.log(Math.round(Date.now()/(1000*60*60*24*365)+'\n'))

console.log(Math.round(Date.parse("april 23 2021")/(1000*60*60*24*365)))

Date.prototype.date = function(){
    if(this.getDay() == 0){this.myProp = "sunday"}
    if(this.getDay()== 1){this.myProp = "monday"}
    if(this.getDay()== 2){this.myProp = "tuesday"}
    if(this.getDay()== 3){this.myProp = "wedensday"}
    if(this.getDay()== 4){this.myProp = "thursday"}
    if(this.getDay()== 5){this.myProp = "friday"}
    if(this.getDay()== 6){this.myProp = "saturday"}

}

d.date()
console.log(d.myProp +"\n")

console.log(d.setDate(15));
console.log(d.setHours(15))
console.log(d.setMonth(3))
console.log(d.setFullYear(2021))
console.log(d.setMinutes(34))
console.log(d.setSeconds(23))
console.log(Math.round(d.setMilliseconds(2342)/(1000*60*60*24)))
console.log(d.setTime(12))
console.log(d.toDateString())




