function myTime()
{
    var myDate=new Date();
    var hr=myDate.getHours()
        min=myDate.getMinutes()<10?'0'+myDate.getMinutes(): myDate.getMinutes(),
        sec=myDate.getSeconds()<10?'0'+myDate.getSeconds():myDate.getSeconds(),
        M=myDate.getHours()>=12?"PM":"AM";
        var currenttime=(hr+":"+min+":"+sec)
        console.log(hr,min,sec,M)
        document.getElementById('H').innerHTML=currenttime;
        document.getElementById('M').innerHTML=M;

        var myDay = [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ];
        var myMonth = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ];
        var day=myDate.getDate()
        var currentDate=myDay[myDate.getDay()]+" "+myMonth[myDate.getMonth()]+" "+day;
        console.log(currentDate)
        console.log(currenttime)
        document.getElementById('date').innerHTML=currentDate;
}
// myTime()
// var date=new Date()
// console.log(date.getDate(),date.getDay())
myTime()
setInterval(myTime,1000)