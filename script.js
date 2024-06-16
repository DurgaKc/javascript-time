//popup
window.addEventListener("load",function()
{
    setTimeout(
        function open(event)
        {
            document.querySelector(".popup").style.display="block";
        },
        300
    )
});
  document.querySelector("#close").addEventListener
  ("click", function()
  {
    document.querySelector(".popup").style.display="none";
  }
);

    // Get the values of the input fields
    var num1 = document.getElementById("number1");
    var num2 = document.getElementById("number2");
    var res = document.getElementById("result");
    var num = document.getElementById("number");
    
    document.getElementById("add").addEventListener('click', function() {
        res.value= parseFloat(num1.value)+parseFloat(num2.value);
        console.log(res.value);
    });

    document.getElementById("sub").addEventListener('click', function() {
        res.value= parseInt(num1.value)-parseInt(num2.value);
        console.log(res.value);
    });

    document.getElementById("mul").addEventListener('click', function() {
        res.value= parseFloat(num1.value)*parseFloat(num2.value);
        console.log(res.value);
    });

    document.getElementById("div").addEventListener('click', function() {
        res.value= parseInt(num1.value)/parseInt(num2.value);
        console.log(res.value);
    });

    document.getElementById("mod").addEventListener('click', function() {
        res.value= parseInt(num1.value)%parseInt(num2.value);
        console.log(res.value);
    });

    document.getElementById("pow").addEventListener('click', function() {
        res.value= parseInt(num1.value)**parseInt(num2.value);
        console.log(res.value);
    });

    document.getElementById("incr").addEventListener('click', function() {
        num.value= parseInt(num.value)+1;
        console.log(num.value);
    });
    document.getElementById("decr").addEventListener('click', function() {
        if(num>0){
        num.value= parseInt(num.value)-1;
        document.getElementById("num").value=num.value;
       console.log(num.value);
    }
        else {
            num.value= 0;
        }
    });

    function showTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
     var session ="AM";
    //  if(h==0){
    //     h = 12;
    //  }
      if (h > 12){
        h = h-12;
        session= "PM";
      }
     h=h<10 ? "0"+h : h;
     m=m<10 ? "0"+m : m;
     s=s<10 ? "0"+s : s;

    setTimeout(showTime, 1000);
   
    document.getElementById("demo").innerHTML = h +":" + m + ":" + s + " " + session;
}

function displayDate(){
    document.getElementById("showdate").innerHTML = Date();
}


function displayTime() {
    var selectedTimeZone = document.getElementById("timezone-selector").value;

    // Create a new Date object in the selected time zone
    var now = new Date().toLocaleString("en-US", {timeZone: selectedTimeZone});
    var date = new Date(now);

    
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = days[date.getDay()];
    setTimeout(displayTime, 1000);
    
    document.getElementById('selected-timezone-time').innerText = "Time in " + selectedTimeZone + ": " + now + " (" + dayOfWeek + ")";
  }
  

  function displayNepaliTime() {
    // Set moment to use Nepali locale
    moment.locale("ne-NP");

    // Get current time in Nepali timezone
    var now = moment().tz("Asia/Kathmandu");

    // Format the time in Nepali format
    var nepaliTime = now.format('LTS');

    // Display the formatted time
    document.getElementById('nepali-time').innerText = nepaliTime;
}

displayNepaliTime();

setInterval(displayNepaliTime, 1000);



    window.addEventListener('load', function() {
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('result').value = '';
    });

    



   
    
