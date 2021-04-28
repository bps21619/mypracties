var date = new Date();
function bps(){

    date.setDate(date.getDate()+6)
var dayBefore6 = date.getDate() +"/" + (date.getMonth()+1)+"/"+ date.getFullYear() ;

      console.log(dayBefore6 +"\n");
}
bps();

function bps1(){

    var date1 = new Date("2021-04-25")
    date1.setDate(date1.getDate()-1)
 console.log(date1.getDate() + "/" + (date1.getMonth()+1) +"/"+ date1.getFullYear())
}
bps1();

function a(){
  let date2 = new Date();
  let date3 = new Date("2020-03-25");
    let d = date2.getMonth()-date3.getMonth();
       //d.setDate(d.getTime());
       
 // console.log(Math.round(d/(1000*3600*24*365)));

  console.log(Math.round(((Date.parse(date3)))/(1000*3600*24*365)))


}
a();


