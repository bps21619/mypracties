
var str = "Every day is a chance to get better"
  function myfunction(s_name, s_id ,s_age){
      this.s_name=s_name;
      this.s_age=s_age;
  }
    var s= str.replace(str, function(x){
        return x.toLocaleUpperCase()
    });
    console.log(s)
    console.log(str.split('').constructor)

    console.log(s.match(/e/gi))
    myfunction.prototype.s_class= "8th";
    console.log(new myfunction().s_age=23)
    