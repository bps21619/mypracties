var d = new Date();
d.setDate(d.getDate() - 7);
d.setMonth(d.getMonth() + 1);
var curr_date = d.getDate();
var curr_month = d.getMonth();
var curr_year = d.getFullYear();
if (curr_month < 10 && curr_date < 10) {
    var parsedDate = "0" + curr_month + "/" + "0" + curr_date + "/" + curr_year;
    console.log(parsedDate);
} else if (curr_month < 10 && curr_date > 9) {
    var parsedDate = "0" + curr_month + "/" + curr_date + "/" + curr_year;
    console.log(parsedDate);
} else if (curr_month > 9 && curr_date < 10) {
    var parsedDate = curr_month + "/" + "0" + curr_date + "/" + curr_year;
    console.log(parsedDate);
} else {
    var parsedDate = curr_month + "/" + curr_date + "/" + curr_year;
    console.log(parsedDate);
}
